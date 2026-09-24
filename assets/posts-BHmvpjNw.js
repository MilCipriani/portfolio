const d="/assets/Blog-post00-00-BbZ3Z1hc.webp",u="/assets/Blog-post01-00-DpXUKsGM.webp",p="/assets/Blog-post01-01-BNzhHeq4.webp",m="/assets/Blog-post01-02-B5RwJOjs.webp",f=`---
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

`,g=`---
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
I'd love to hear what you think, feel free to reach out! `,y=Object.assign({"../assets/blogImages/Blog-post00-00.webp":d,"../assets/blogImages/Blog-post01-00.webp":u,"../assets/blogImages/Blog-post01-01.webp":p,"../assets/blogImages/Blog-post01-02.webp":m}),v=Object.fromEntries(Object.entries(y).map(([e,t])=>[e.split("/").pop()??"",t]));function w(e){const t=e.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!t)return{data:{},content:e};const[,o,i]=t,s={};return o.split(`
`).forEach(a=>{const r=a.indexOf(":");if(r===-1)return;const h=a.slice(0,r).trim();let n=a.slice(r+1).trim();typeof n=="string"&&n.startsWith("[")&&n.endsWith("]")?n=n.slice(1,-1).split(",").map(c=>c.trim()).filter(Boolean):n==="true"?n=!0:n==="false"&&(n=!1),s[h]=n}),{data:s,content:i.trim()}}const b=Object.assign({"../blogPosts/00-Obsidian-as-my-Second-Brain.md":f,"../blogPosts/01-I'm-Self-Hosting.md":g});function l(e){const[t,o,i]=e.split("-").map(Number);return new Date(i,o-1,t).getTime()}const k=Object.entries(b).map(([e,t])=>{const{data:o,content:i}=w(t);return{slug:e.split("/").pop()?.replace(".md","")??"",...o,content:i}}).filter(e=>e.published).sort((e,t)=>l(t.date)-l(e.date));export{v as i,k as p};
