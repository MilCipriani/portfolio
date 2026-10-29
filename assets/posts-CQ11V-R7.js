const c="/assets/Blog-post00-00-BbZ3Z1hc.webp",u="/assets/Blog-post01-00-DpXUKsGM.webp",p="/assets/Blog-post01-01-BNzhHeq4.webp",m="/assets/Blog-post01-02-B5RwJOjs.webp",g=`---
title: Obsidian as my Second Brain
date: 21-07-2026
description: A practical note-taking system for tracking and structuring projects, ideas, and everything in between: what I use, why it works, and how to set it up in under 10 minutes.
tags: [Obsidian, Productivity]
readingTime: 6mins
published: true
---
# Obsidian as my Second Brain

## Why and which note taking app

When life gets busy post-it notes multiply on the fridge. When I'm studying something new, papers are scattered on my desk, on the kitchen table and, if the topic is intricate enough, on the wall next to my calendar.

I'm never going to get rid of these habits. There's something unique about transferring tangled thoughts on a piece of paper. (Sorry, trees.)

I've recently discovered this feeling has an actual scientific explanation. We learn better when we write. It has to do with how the brain experiences the movement of the hand and the physical sensory effort of shaping each letter on paper.
(If you're curious, sources are below).

That's lovely, but I quickly came to the conclusion I can't keep accumulating notes forever: it takes surprisingly little time to fill up a drawer.
And that's when I googled it.

![Google search results for the most popuar note-taking apps show Obsidian and Notion at the top](Blog-post00-00.webp)

I will skip all the research I did to figure out which one was the best option for my use case, that's a rabbithole, but as the title spoiled: Obsidian.

Quickly, few reasons why I love it:
1) **Completely local**. The files are yours, private unless you decide to intentionally share them with someone.
2) This means it works completely **offline** too. Work from an office, on a train or from a cabin in the woods. The choice is yours. 
3) **Markdowns**. It's all markdowns. And maybe few pictures if you want to get fancy. This is great cause it keeps everything extremely light and snappy, even if you have thousands of notes. And markdowns are digestible and supported by a bunch of common services. This post is a markdown file itself.
4) **Links**. You can link notes and have a graphical view of all your connections. Clusters of topics tend to naturally form, and this allows the discovery of new points of intersection. It helps reworking your knowledge.

## Productivity methods

I've been using Obsidian for a bit over 2 years now, but it didn't immediately click.
It was not love at first sight. It was confusing at best.
But I'm honestly glad I could stick to it, as it shaped the way I work in a very positive way, and I would never go back.

Two things helped me find my flow:
1) Zettelkasten
2) PARA/CODE

### Zettelkasten

Zettelkasten is a thinking methodology based on few strict rules:
- **Atomicity**. Each note must contain the minimum amount of information. Each note is a self-contained thought.
- **Linking** between notes/thoughts.
- **Writing in your own words**. This is arguably the most important. It allows you to actually absorb the knowledge. Re-elaborate on what you just recently acquired wires your brain around it.

### PARA / CODE

The **PARA** method is a note storage system created by Tiago Forte.
You divide your notes into the following categories:
- **P**rojects
- **A**reas
- **R**esources
- **A**rchive

In short, how does it work?

→ *Is my note related to something that has a timeline, due date or a precise goal?* 
(e.g. get fit, learn a skill, build something) → Projects

→ *Is my note related to a long term responsibility?*
(e.g. managing your house, health, finances, career) → Areas

→ *Is my note related to something that I should keep in mind and that I will most likely come back to in the future?*
(e.g. reading list, restaurant suggestions, "how to..." guides) → resources

The Archive is pretty self-explanatory.

Now, this method is great, but it wouldn't be as effective if it wasn't used as part of the **CODE** strategy.
- **C**apture. In the moment, while it's still fresh. This is why I have a \`Scraps/Inbox\` folder in my vault where I drop all my on-the-go notes, ready to be revised every few days.
- **O**rganize. Sort (the notes in your inbox) with PARA, by actionability.
- **D**istill. Keep summarizing down to the essence. Get back to the same note multiple times and strip it down. No fluff survives.
- **E**xpress. Use your knowledge. Create/share something with what you gathered. This is the most important step. Don't just collect notes to leave them to digital dust. Integrate what you learn in your projects and routines. Or build a new one.

## Put everything together

This system can sound like a lot of thinking on top of more thinking, but if applied correctly it will do the heavy lifting for you.

The methods above are just the ones I ended up using in my dailies. A quick google search will reveal many many different ones, built by people with a focus on many many different areas. I encourage you to do your own research and try this yourself until you find your perfect solution.

In practice, here's a starting point.

Download Obsidian and open or create a new vault. (*Vault* is fancy for *folder*).

Create your folder structure:
\`\`\`bash
0 Inbox
1 Projects
2 Areas
3 Resources
4 Archive
\`\`\`

Every time you add a note, place it in the Inbox. You can set Obsidian to do this automatically.

You can later go back to your Inbox (spaced repetition) and re-organize following the PARA method.
So ask yourself:
- does this topic have a due date or close end goal?
- is this topic a long term responsibility?
- is this topic something I will reference often?

I'm not usually extra careful to respect Zettelkasten's atomicity, as a personal preference: I like to have the entire situation in sight at once and splitting a topic into multiple notes can feel unnecessary at times.
I'm lowering the number of clicks and preferring a bit of scrolling.
What truly makes a difference is writing everything with your own words. And keeping this in mind, I often prefer pseudo-code to copy-pasted code snippets.

And then? Apply.
Read that book on your reading list, test that gardening tip, write that script, make that website.

This way, you're not creating a dumpster for random ready-to-be-forgotten knowledge: you're enforcing good practices that will help you grow in any and every direction, while keeping a window open on the decisions you made, the difficulties you faced and the solutions you found.
No matter what your next challenge will be, your past self will have your back.

## Sources


→ [NTNU's van der Meer and Weel - handwriting engages broad network of brain regions](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2023.1219945/full)

`,f=`---
title: I'm Self-Hosting
date: 24-09-2026
description: A look at The Left Drawer, my self-hosted file storage app: the architecture, the security choices, and the difference between Demo and Production.
tags: [TheLeftDrawer, Self-Hosting]
readingTime: 6mins
published: true
---
# I'm Self-Hosting

\`React\` \`Expressjs\` \`PostgreSQL\` \`NGINX\` \`Docker\` \`ZeroTier\` \`Uptime Kuma\` \`GoatCounter\`

>**TL;DR**: The Left Drawer is a self-hosted file-storage app I built for my family/friends. I deployed it in two environments: a private, ZeroTier-protected installation for real data, and a public Demo with intentionally different security and usability constraints. This project will keep growing.
>If you want to touch some code you can find it [here](https://github.com/MilCipriani/TheLeftDrawer-Demo).



Life sometimes can be frenetic.  
Memories pile up. Phones break. USBs get lost. SSDs end up in your grandma's tureen during a move, only to resurface two years later. It's not soup, it's 800GB of family reunions, puppies and landscapes.
And backups. So many backups.  
We spent hours hunting duplicates and organizing files by hand, and every time someone wanted to take a walk down memory lane, they had to sit in front of the PC.

I scrolled on Amazon long enough to find a good deal on a Raspberry Pi.
The reviews were comforting.

"★★★☆☆ It either works, or it doesn't."

So I bought it.

To solve our problem I wanted a very simple, reliable, grandma-proof cloud-storage app. I did not rely on the most well-known services as they were quite limiting on their free tiers, they have fairly complex UIs for non-technical users, and if a privacy policy is longer than the Bible it makes me raise my eyebrows.

That's how I found out self-hosting is a lot of work. And I love it.

## Two environments, two threat models

In this particular case I wanted to keep all of our files as safe as possible. It's pretty easy to fall into the "so safe it's unusable" trap.
For the private installation, my primary concern is unauthorized access to users' personal data. For the Demo, the bigger concern is abuse of a publicly accessible application and keeping the environment resettable.

This is how I organized the architecture:

![Architecture diagram of the self-hosted app. ZeroTier network.](Blog-post01-00.webp)

While this is what the Demo environment looks like:

![Architecture diagram of the Demo. No ZeroTier network on the VPS, as the data there is less critical.](Blog-post01-01.webp)

The app is the same in both environments.
- The frontend is a pre-built React bundle served by NGINX.
- API requests from the browser are sent to NGINX, which forwards them to Expressjs through the internal Docker network.
- Expressjs processes the requests, communicates with the database, and returns responses through NGINX.
- When files are needed, the API retrieves their metadata from the database and then accesses the corresponding files in storage.

## The interesting bits
### Hardware choice

Raspberries consume so little, even compared to a laptop. And I don't really need a screen when SSH exists. A laptop has one advantage: it survives a power outage. But since it still depends on my Wi-Fi, a power outage takes everything offline anyway.

### To VPN or not to VPN

The Pi, hosting the actual app, sits behind a ZeroTier network.
Only devices connected to that same network can communicate with the app. I chose ZeroTier over self-hosted WireGuard (or similar services) mainly for time-to-value. Networking security has a lot of sharp edges, and I'd rather learn WireGuard properly in a lower-stakes environment before self-hosting something where a misconfigured rule means an exposed endpoint.
ZeroTier let me ship now and revisit this decision later.

This, however, wasn't ideal for the Demo. Having to download an additional app just to access the correct network would only create friction. Additionally, the Demo contains only demo data. No sensitive information. Taking this into consideration, I preferred to expose it through NGINX as the front-facing layer.

### Data access

I divided traffic into two Docker Networks, separating the app from the analytics tools. Everything pivots around NGINX which is the only container accessing both networks.
To gain access to the database somebody would probably have to get into ZeroTier, get into NGINX, get into the API and then get into the db. Multiple layers of the system, each with its own defensive strategy, need to be compromised before accessing the real data.

### Monitoring tools

I tried Uptime Kuma and it just worked. Simple setup, beautiful interface, self-hosted.
I didn't need to duplicate it and have it both on the Pi and the VPS, as one container is enough to keep track of multiple services. It currently sits behind the ZeroTier network, accessible only through the NGINX container, but it can reach out to online websites and check their status normally, both frontend and API services.

I'm hosting GoatCounter on the VPS instead, to collect some analytics for my personal portfolio. I keep everything privacy-focused, so right now I'm only tracking visit counts.

### Demo environment requirements

On the Demo, I want some presentation files to be accessible for everyone at all times (can't delete). I also want to make sure everyone can try the app and upload some files, while keeping the environment safe (no NSFW material, no funny scripts users might think are part of the Demo). This is why a cron job runs every 30 minutes: it forces everyone to log out, wipes the contents of the Demo and restores the important files. It's not 100% safe, but it's once again the same battle: safety against usability. This way I found the balance that works for me.

### Deployment and maintenance

I built this app once and deployed it twice. All the differences are in Docker Compose override files. The app can be configured for any situation by modifying the \`.env\` file following the instructions. 
To ship changes is just as straightforward: a git pull and rebuild.

### Backup strategy

The backup plan is simple but enough: a script syncs to a different machine every few days. A physical copy exists for every important document.  I do intend to add a RAID strategy to protect the app from disk failure and make it easier to recover, but that's for the future.

## The face of the app

Enough architecture, it's time for the official presentation.
This is The Left Drawer.

![Screenshot of the app, both login and home pages](Blog-post01-02.webp)

If you wish to give it a try you can find the Demo [here](https://leftdrawer-demo.milena.work) or in the [Work](https://milena.work/work/) section where I included the credentials.

There's more to this project than fits in one post. I'm planning some deep dives.
I'd love to hear what you think, feel free to reach out! `,y=`---
title: I’m Deleting Things (Properly)
date: 29-10-2026
description: What happens when a delete touches the disk and the database at once? A refactor to soft delete and eventual consistency, the same flaw hiding in my tests and a fix for a security bug I found along the way.
tags: [TheLeftDrawer, Backend, Security]
readingTime: 5mins
published: true
---
# I’m Deleting Things (Properly)

\`Node.js\` \`Expressjs\` \`PostgreSQL\` \`React\` \`Vitest\` \`Supertest\`

>**TL;DR**: I refactored how The Left Drawer deletes files. A delete used to touch the disk and the database in one go. Now it’s a single database update, and a cron job tidies up the disk later. Along the way I found a security hole in my hand-made markdown renderer.

Over the weekend I opened the delete endpoint of The Left Drawer to make one small change. By Sunday evening I had a refactor, a schema migration, a security hole and a lot of tinkering behind me.

Picture a library. The catalog says which books exist, and the shelves hold them. My old delete worked like a librarian who first walks to the shelves and removes the books, and only then goes back to cross out the cards. If the librarian gets interrupted halfway, the catalog promises books that are no longer there.

Here’s what I changed.

## Before

There was one single function that, in order, would:
\`\`\`txt
collect every file and folder that needs to go

phase 1 (disk)
    move all the files to the trash folder
    remove all the subfolders, and the files inside them, recursively

phase 2 (database)
    in a transaction, remove all the rows that are not needed anymore
\`\`\`


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

\`\`\`sql
deleted BOOLEAN DEFAULT FALSE NOT NULL
\`\`\`
When a user deletes a file, all I do is flip that flag. For a folder, a recursive function marks its files as deleted, then walks into each subfolder and does the same. One user action, one operation, everything tagged. Both the API and the frontend filter out deleted items, so from the user’s point of view the deletion is instant.

Then, every two days, a cron job runs:
\`\`\`txt
select every file and folder flagged as deleted
try to remove them from disk
only if there were no errors, remove their rows from the database
\`\`\`
I chose two days on purpose. If someone deletes something by mistake, I have a window to step in and restore it manually. Unlikely, but possible.

The cron job is built so that nothing bad can happen if it stumbles:

- **A file that’s already gone counts as a success**. If the job dies right after deleting a file but before removing its row, the next run simply carries on. The operation is safe to repeat (idempotent).
- **If the database transaction rolls back**, that’s fine too. It can try again, and again.
- **Every error is logged.**

So if anything goes wrong, the user never feels it. The system keeps trying to clean itself up.

## The trade-offs
- Deleted files now linger on disk until the next run. For a privacy-focused app that’s a real cost, which is why it’s a short window and not a long one.
- A boolean can’t tell me when something was deleted. I’ll switch to a \`deleted_at\` timestamp at some point, which would also open the door to a proper trash folder for users. The old trash folder was never accessible to them, so this isn’t a downgrade, but it could become an upgrade.
- A silently failing cleanup job is easy to miss, logs or not. Next on my list is adding it to Uptime Kuma as a push monitor, so I get alerted if it stops reporting.

## Found along the way
### The markdown that ran code

I like my code tidy, with as few dependencies as possible. That’s why I was rendering every markdown element by hand.

While testing, I noticed that images in a markdown file weren’t rendering properly. Digging in, I realized the content wasn’t being sanitized at all. So I tried an img with an empty src and an onerror handler that opened a modal.

It worked. The code was executed. Not the kind of “it works” I was hoping for.

**That’s an XSS vulnerability**: whatever someone writes in a markdown file could run as JavaScript in another user’s browser. I replaced my homemade renderer with:
\`\`\`txt
react-markdown
remark-gfm
rehype-raw
rehype-sanitize
\`\`\`
Minimal dependencies are a good instinct, but some things are worth their weight. Security is one of them.

### Tests

My integration tests create a user in a separate database instance and remove it at the end. The same problem of the delete endpoint was hiding there: if a test failed halfway, the user was never removed, and the next run failed too. Now the tests clean up after themselves, so they can fail without poisoning the next run.


## One last small change

I started with one small change and ended up with a migration, a security fix and a much better understanding of my own architecture. Both problems came from assumptions I had never written down: that the disk and the database would always agree, and that every file could be trusted. It’s not that the change is big. It’s that everything is connected, and touching one piece shows you what the others were quietly relying on.

The librarian can now be interrupted mid-shelf, trip over a cable, or lose power to the whole building, and the catalog will still be telling the truth. The books get tidied up later, when nobody is in a hurry.`,w=Object.assign({"../assets/blogImages/Blog-post00-00.webp":c,"../assets/blogImages/Blog-post01-00.webp":u,"../assets/blogImages/Blog-post01-01.webp":p,"../assets/blogImages/Blog-post01-02.webp":m}),v=Object.fromEntries(Object.entries(w).map(([e,t])=>[e.split("/").pop()??"",t]));function b(e){const t=e.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!t)return{data:{},content:e};const[,o,a]=t,i={};return o.split(`
`).forEach(s=>{const r=s.indexOf(":");if(r===-1)return;const h=s.slice(0,r).trim();let n=s.slice(r+1).trim();typeof n=="string"&&n.startsWith("[")&&n.endsWith("]")?n=n.slice(1,-1).split(",").map(d=>d.trim()).filter(Boolean):n==="true"?n=!0:n==="false"&&(n=!1),i[h]=n}),{data:i,content:a.trim()}}const k=Object.assign({"../blogPosts/00-Obsidian-as-my-Second-Brain.md":g,"../blogPosts/01-I'm-Self-Hosting.md":f,"../blogPosts/03-I’m-Deleting-Things-(Properly).md":y});function l(e){const[t,o,a]=e.split("-").map(Number);return new Date(a,o-1,t).getTime()}const I=Object.entries(k).map(([e,t])=>{const{data:o,content:a}=b(t);return{slug:e.split("/").pop()?.replace(".md","")??"",...o,content:a}}).filter(e=>e.published).sort((e,t)=>l(t.date)-l(e.date));export{v as i,I as p};
