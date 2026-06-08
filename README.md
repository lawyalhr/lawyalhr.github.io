# Lawyal HR React Site

Marketing website for **Lawyal HR & Legal Advisors**, built with React and Webpack.

- **Live site:** [https://lawyalhr.com](https://lawyalhr.com)
- **Repository:** [lawyalhr/lawyalhr.github.io](https://github.com/lawyalhr/lawyalhr.github.io)

## Prerequisites

- [Node.js](https://nodejs.org/) 20 or later
- [npm](https://www.npmjs.com/) (comes with Node.js)
- Git access to the GitHub repository

## Local development

Install dependencies:

```bash
npm install
```

Start the development server (opens at `http://localhost:3000`):

```bash
npm start
```

Create a production build locally:

```bash
npm run build
```

The build output is written to the `dist/` folder.

## Deployment overview

This project is deployed to **GitHub Pages** with a **custom domain** (`lawyalhr.com`).

Deployment is **automatic**. You do not need to run a separate deploy command after pushing code.

```text
Push to main
    ↓
GitHub Actions workflow runs
    ↓
npm ci && npm run build
    ↓
dist/ published to gh-pages branch
    ↓
GitHub Pages serves the site at lawyalhr.com
```

## Automatic deploy (recommended)

### What triggers a deploy

Any push to the `main` branch starts the workflow defined in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### What the workflow does

1. Checks out the repository
2. Installs dependencies with `npm ci`
3. Builds the site with `npm run build`
4. Publishes the contents of `dist/` to the `gh-pages` branch using [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)

### How to publish changes

1. Make and test your changes locally
2. Commit the changes
3. Push to `main`:

```bash
git add .
git commit -m "Describe your change"
git push origin main
```

4. Open the **Actions** tab on GitHub and wait for **Deploy to GitHub Pages** to finish
5. After the workflow succeeds, the live site is updated (usually within 1–2 minutes)

## GitHub Pages configuration

These settings should already be configured for this repository:

| Setting | Value |
|--------|--------|
| Source branch | `gh-pages` |
| Custom domain | `lawyalhr.com` |
| HTTPS | Enabled |

The custom domain is included in every build via the root [`CNAME`](CNAME) file, which Webpack copies into `dist/` during the build step in [`webpack.config.js`](webpack.config.js).

## Project structure (deploy-related)

```text
.github/workflows/deploy.yml   # CI/CD workflow
webpack.config.js              # Builds app into dist/
CNAME                          # Custom domain for GitHub Pages
public/                        # Static assets and HTML template
src/                           # React application source
dist/                          # Production build output (generated locally)
```

## Troubleshooting

### The live site did not update

- Confirm your changes were pushed to `main`, not another branch
- Check the latest **Deploy to GitHub Pages** run in GitHub Actions for errors
- Wait a minute or two and hard-refresh the browser (`Cmd+Shift+R` / `Ctrl+Shift+R`)

### Build fails in GitHub Actions

- Run `npm ci` and `npm run build` locally to reproduce the error
- Fix the issue, commit, and push again

### Local build works but assets look wrong on the live site

- Ensure `publicPath` in `webpack.config.js` remains `/` for the custom domain setup
- Confirm the `CNAME` file still contains `lawyalhr.com`

### Need to redeploy without code changes

Push an empty commit to `main`:

```bash
git commit --allow-empty -m "chore: trigger GitHub Pages deploy"
git push origin main
```

## Branches

| Branch | Purpose |
|--------|---------|
| `main` | Source code and development history |
| `gh-pages` | Published static site (updated automatically by GitHub Actions) |

Do not manually edit the `gh-pages` branch unless you are debugging a deployment issue. Normal changes should always be made on `main`.
