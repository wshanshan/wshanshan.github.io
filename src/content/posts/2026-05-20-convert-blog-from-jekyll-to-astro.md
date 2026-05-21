---
title: "Painless blog migration with Claude Code and VSCode"
pubDatetime: 2026-05-20T00:00:00Z
description: "goodbye Ruby and hello Node.js"
tags: [VibeBuilding]
featured: false
draft: false
---

This blog was previously powered by the Jekyll 'Minimal Mistakes' theme. I loved its simple and elegant style. BUT, oh man, Ruby was giving me so much trouble. Honestly, the fault is mutual — both Ruby and me. I never understood its package management system, and Ruby remained a mystery, especially since I had no other occasion to use it. I survived a few years by blindly executing commands from Stack Overflow and Google upon every error.

But this time, after it reported another package issue and Claude Code spent 10 minutes without being able to fix it, I knew it was time to move on.

I gave Claude Code this prompt:
```
this repo includes my personal website hosted in GitHub using Jekyll. I want to switch it to something simpler. I had a lot of problems updating Ruby packages. provide suggestions and migration plan
```

Claude first suggested Hugo (based on Go), then mentioned Astro (based on Node.js).

I chose Astro, and Claude Code — running inside VSCode — helped me migrate the whole repo painlessly. I did need to give some navigational guidance along the way, for example:
- Claude originally didn't update README.md and .gitignore
- Claude tried to use custom styling to mimic the 'Minimal Mistakes' theme, but the result didn't look good. I pointed it to an Astro template instead.

The back and forth took an hour or two in total, including local testing and deployment. It cost around 70k tokens with Sonnet 4.6 (~$1).

The new site deployemnt is fast and the tooling just works, and I haven't touched Ruby since. Highly recommend this workflow if you're stuck in a similar rut.
