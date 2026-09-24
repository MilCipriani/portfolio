---
title: I'm Self-Hosting
date: 24-09-2026
description: A look at The Left Drawer, my self-hosted file storage app: the architecture, the security choices, and the difference between Demo and Production.
tags: [TheLeftDrawer, Self-Hosting]
readingTime: 6mins
published: true
---
# I'm Self-Hosting

`React` `Expressjs` `PostgreSQL` `NGINX` `Docker` `ZeroTier` `Uptime Kuma` `GoatCounter`

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

I built this app once and deployed it twice. All the differences are in Docker Compose override files. The app can be configured for any situation by modifying the `.env` file following the instructions. 
To ship changes is just as straightforward: a git pull and rebuild.

### Backup strategy

The backup plan is simple but enough: a script syncs to a different machine every few days. A physical copy exists for every important document.  I do intend to add a RAID strategy to protect the app from disk failure and make it easier to recover, but that's for the future.

## The face of the app

Enough architecture, it's time for the official presentation.
This is The Left Drawer.

![Screenshot of the app, both login and home pages](Blog-post01-02.webp)

If you wish to give it a try you can find the Demo [here](https://leftdrawer-demo.milena.work) or in the [Work](https://milena.work/work/) section where I included the credentials.

There's more to this project than fits in one post. I'm planning some deep dives.
I'd love to hear what you think, feel free to reach out! 