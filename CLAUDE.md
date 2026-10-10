# Overview

Personal website for Dominic Harrington. Plain static HTML/CSS with no build step or npm. Served files live in `site/` and are deployed to GitHub Pages by `.github/workflows/deploy.yml`.

The home page is the full-screen looping animation, drawn live on a canvas by `site/loop.js` (adapted from the standalone `loop.html` in the repo root, which also renders the video version) with three persistent buttons: Thesis (`thesis.pdf`), CV (`cv.pdf`) and Skiing game (`skicross.html`). The visual style (near-black ground, Inter + JetBrains Mono, coral/cyan accents) matches the loop.
