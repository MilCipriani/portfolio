---
title: I’m Deleting Things (Properly)
date: 29-10-2026
description: What happens when a delete touches the disk and the database at once? A refactor to soft delete and eventual consistency, the same flaw hiding in my tests and a fix for a security bug I found along the way.
tags: [TheLeftDrawer, Backend, Security]
readingTime: 5mins
published: true
---
# I’m Deleting Things (Properly)

`Node.js` `Expressjs` `PostgreSQL` `React` `Vitest` `Supertest`

>**TL;DR**: I refactored how The Left Drawer deletes files. A delete used to touch the disk and the database in one go. Now it’s a single database update, and a cron job tidies up the disk later. Along the way I found a security hole in my hand-made markdown renderer.

Over the weekend I opened the delete endpoint of The Left Drawer to make one small change. By Sunday evening I had a refactor, a schema migration, a security hole and a lot of tinkering behind me.

Picture a library. The catalog says which books exist, and the shelves hold them. My old delete worked like a librarian who first walks to the shelves and removes the books, and only then goes back to cross out the cards. If the librarian gets interrupted halfway, the catalog promises books that are no longer there.

Here’s what I changed.

## Before

There was one single function that, in order, would:
```txt
collect every file and folder that needs to go

phase 1 (disk)
    move all the files to the trash folder
    remove all the subfolders, and the files inside them, recursively

phase 2 (database)
    in a transaction, remove all the rows that are not needed anymore
```


## The elephant in the room

I noticed the problem the first time I wrote this code. Fixing it meant a big refactor, even though the feature itself looked simple, so I wrote it on the roadmap and kept going. I tend to be a perfectionist, and I’m learning that pushing something imperfect beats never pushing anything. This weekend, the roadmap caught up with me.

The general rule of thumb is that if something can go wrong, at some point it will. The good practice is to take that into account and prepare a parachute before it’s needed.

A connection hiccup or a permission issue could de-sync the disk and the database, polluting the system:

- **If Phase 1 failed halfway**, some files would already be in the trash and some subfolders gone for good, while the database still insisted they existed. There was nothing to roll back, because the transaction hadn’t even started. The app would break very noticeably for the users.
- **If Phase 2 failed**, it was the mirror image. The rollback would put every row back, but the files were already gone. Trying again wouldn’t work either, because there was nothing left on disk to delete. Those files would stay broken, permanently.

Did this ever happen? No.
But it could have.

## The solution

The fix is a separation of concerns: **database vs disk**.

The database is the safer layer to interact with. Rollbacks are easy to implement, and going back to the state before an error is just as straightforward. So the database becomes the source of truth, and the disk gets handled separately, at a different moment. In other words, the two are allowed to disagree for a little while, as long as they eventually agree.
>The fancy term is eventual consistency. The pattern of flagging instead of deleting is called soft delete.

A user action now triggers only a database operation.

## After

I added a column to both the files and folders tables:

```sql
deleted BOOLEAN DEFAULT FALSE NOT NULL
```
When a user deletes a file, all I do is flip that flag. For a folder, a recursive function marks its files as deleted, then walks into each subfolder and does the same. One user action, one operation, everything tagged. Both the API and the frontend filter out deleted items, so from the user’s point of view the deletion is instant.

Then, every two days, a cron job runs:
```txt
select every file and folder flagged as deleted
try to remove them from disk
only if there were no errors, remove their rows from the database
```
I chose two days on purpose. If someone deletes something by mistake, I have a window to step in and restore it manually. Unlikely, but possible.

The cron job is built so that nothing bad can happen if it stumbles:

- **A file that’s already gone counts as a success**. If the job dies right after deleting a file but before removing its row, the next run simply carries on. The operation is safe to repeat (idempotent).
- **If the database transaction rolls back**, that’s fine too. It can try again, and again.
- **Every error is logged.**

So if anything goes wrong, the user never feels it. The system keeps trying to clean itself up.

## The trade-offs
- Deleted files now linger on disk until the next run. For a privacy-focused app that’s a real cost, which is why it’s a short window and not a long one.
- A boolean can’t tell me when something was deleted. I’ll switch to a `deleted_at` timestamp at some point, which would also open the door to a proper trash folder for users. The old trash folder was never accessible to them, so this isn’t a downgrade, but it could become an upgrade.
- A silently failing cleanup job is easy to miss, logs or not. Next on my list is adding it to Uptime Kuma as a push monitor, so I get alerted if it stops reporting.

## Found along the way
### The markdown that ran code

I like my code tidy, with as few dependencies as possible. That’s why I was rendering every markdown element by hand.

While testing, I noticed that images in a markdown file weren’t rendering properly. Digging in, I realized the content wasn’t being sanitized at all. So I tried an img with an empty src and an onerror handler that opened a modal.

It worked. The code was executed. Not the kind of “it works” I was hoping for.

**That’s an XSS vulnerability**: whatever someone writes in a markdown file could run as JavaScript in another user’s browser. I replaced my homemade renderer with:
```txt
react-markdown
remark-gfm
rehype-raw
rehype-sanitize
```
Minimal dependencies are a good instinct, but some things are worth their weight. Security is one of them.

### Tests

My integration tests create a user in a separate database instance and remove it at the end. The same problem of the delete endpoint was hiding there: if a test failed halfway, the user was never removed, and the next run failed too. Now the tests clean up after themselves, so they can fail without poisoning the next run.


## One last small change

I started with one small change and ended up with a migration, a security fix and a much better understanding of my own architecture. Both problems came from assumptions I had never written down: that the disk and the database would always agree, and that every file could be trusted. It’s not that the change is big. It’s that everything is connected, and touching one piece shows you what the others were quietly relying on.

The librarian can now be interrupted mid-shelf, trip over a cable, or lose power to the whole building, and the catalog will still be telling the truth. The books get tidied up later, when nobody is in a hurry.