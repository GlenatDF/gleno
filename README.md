# Glen Naysmith — CV Website

Personal CV site, deployed via GitHub Pages.

**Live at:** https://glenatdf.github.io

---

## File structure

```
GlenatDF.github.io/
├── index.html              # All content lives here
├── styles.css              # All styles
├── script.js               # Scroll reveal + nav highlighting
├── glen-naysmith-cv.pdf    # ← drop your PDF here
└── README.md
```

## Quick edit guide

Search `index.html` for `✏️ EDIT` comments — they mark every place you're likely to want to change something:

| What to change | How |
|---|---|
| PDF link | Replace `glen-naysmith-cv.pdf` with your filename |
| LinkedIn URL | Find `LinkedIn — add your URL` and replace `href="#"` |
| Add a work role | Copy a `.timeline-item` block in the Experience section |
| Update projects | Edit `.project-card` blocks in the Projects section |
| Add skills | Add `<span class="tag">...</span>` to any `.skill-tags` div |
| Email address | Find `g.naysmith@gmail.com` (appears 3 times) |

## Adding your PDF

1. Copy your CV PDF into this folder
2. Name it `glen-naysmith-cv.pdf` (or update the `href` on all three download buttons)
3. Commit and push

## Deployment

See deployment steps in the initial setup instructions, or:

```bash
git add .
git commit -m "Update CV"
git push
```

GitHub Pages auto-publishes within 1–2 minutes.
