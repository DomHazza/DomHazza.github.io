# DomHazza.github.io

Personal site: a looping animation with links to my thesis, CV and the SkiCross game video.

Plain static HTML/CSS. There's no build step. Everything served lives in `site/`, and pushing to `main` deploys that folder to GitHub Pages via `.github/workflows/deploy.yml`.

```
site/
  index.html      home: full-screen loop + buttons
  skicross.html   SkiCross video page
  404.html
  style.css
  favicon.svg
  cv.pdf
  thesis.pdf
  loop.js         live home-page animation (adapted from ../loop.html)
  media/          loop-poster.jpg (shown until loop.js draws), skicross.mp4
```

Preview locally with `python3 -m http.server -d site` and open http://localhost:8000.
