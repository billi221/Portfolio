# Muhammad Bilal — Portfolio Website

A responsive, accessible portfolio made with semantic HTML, vanilla JavaScript, and CSS. **No build step or paid services required.**

## Run locally

1. Extract the ZIP file.
2. Open `index.html` in Chrome or Edge. The content and project filters work locally.
3. Alternatively, from the folder run `python -m http.server 8000` and visit `http://localhost:8000`.

## Publish online (GitHub Pages)

1. Create a GitHub account/repository (for example `muhammad-bilal-portfolio`).
2. Upload the contents of this folder to the *root* of the repository, including `index.html`, `styles.css`, `script.js`, and `assets/`.
3. In the repository, select **Settings → Pages → Build and deployment → Deploy from a branch**.
4. Choose branch `main`, folder `/ (root)`, and save.
5. GitHub will display the published website URL once deployment completes. Check the displayed URL rather than assuming one.
6. Optionally connect a custom domain afterward.

You can also drag and drop the website folder onto Netlify's manual deployment interface. Ensure all files are present.

## Edit this portfolio

- **Personal intro, email, education, navigation:** `index.html`.
- **Skills, experience, and technical projects:** arrays near the top of `script.js`.
- **Colors and visual styles:** CSS variables near the top of `styles.css`.
- **Resume:** `assets/Muhammad-Bilal-Resume.pdf` (new detailed PDF) and `assets/Muhammad-Bilal-Resume.docx` (editable). The enhanced PDF resume is included, with an editable DOCX version in assets/.
- **Project screenshots:** once supplied, add real image files and corresponding markup. The current card art is abstract UI illustration, not fake project screenshots.
- **Repositories:** each project currently says “GitHub repository · link pending.” Replace it with a working external anchor when an actual repository URL exists. Never invent links.
- **LinkedIn/GitHub profiles:** replace the plain-text placeholder in the contact block with real verified links.
- **Professional photo option:** the current design intentionally uses a photo-free illustration. To switch, insert your own real photo into `assets/` and replace the hero illustration area with `<img src="assets/your-photo.jpg" alt="Portrait of Muhammad Bilal" />`. Don't use an AI-generated likeness presented as you.

## Important facts to confirm before publishing

- **Education wording:** the supplied instructions say “student,” while your uploaded CV describes you as a recent graduate and lists 2021–2025. To avoid contradictory claims, the website lists the qualification and years without making a present student/graduate assertion. Confirm your graduation status and update accordingly.
- **Android support:** employer, job title, and employment dates were not supplied. Website intentionally shows “Dates & employer not provided.” Replace only with verified details.
- **Projects:** milestone and implementation details are incomplete. All ambiguous areas are marked as in development, exploratory, or needing verification. Particularly, The Windows Application Testing Agent remains in development/testing.
- **CV privacy:** resume includes a mobile number. Publicly linking it exposes that number to visitors; remove the phone number from the PDF if you prefer to keep it private.
- **No certifications:** none displayed as earned.
- **Project screenshots, live demos, GitHub repository and LinkedIn URL:** still needed. The supplied professional photo is included.
- **Shopify/Amazon content:** experience is based on supplied statements; no fabricated employer, performance improvement, or campaign outcomes.

## Accessibility and quality

- Keyboard accessible project filters, disclosure panels, links, and mobile menu.
- Contrast-conscious dark color scheme, focus indicators, skip link, semantic headings, and reduced motion preference.
- No dummy buttons or fake forms. Contact opens the visitor's email app; resume links point to the included PDF.
- This is a lightweight static website with no tracking or analytics. Google Fonts requires an internet connection; system font fallbacks are included.

## Ways to improve your professional presence

- **GitHub:** publish sanitized project repositories with real setup steps, screenshots, sample test output, and clear labels for incomplete features. Exclude client info, private API tokens, credentials, and malware samples.
- **LinkedIn:** align headline with roles sought; summarize Android troubleshooting, QA, deployment testing, and e-commerce content experience. Feature two or three completed/verified project demos.
- **Portfolio projects:** include one real screenshot and a short README explaining problem, approach, your role, features demonstrated, and next steps.


## October 2026 update

- The uploaded two-page PDF resume is the current resume linked throughout the website.
- The supplied portrait now has a navy/teal background treatment consistent with the design.
- All hosting-ready files are provided in the ZIP; publishing is not automatic.
- To create a public link, deploy the folder using GitHub Pages or Netlify (instructions above).
- The PDF contains the contact details supplied by the owner. Public publishing makes these visible to anyone with the link.

LinkedIn profile: https://www.linkedin.com/in/ballivibez (linked in navigation and Contact section).
