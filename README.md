# Poorbita

Official website for **Poorbita**, an initiative of Egra Agriculture and Rural Development Society (EARDS) working with rural and tribal communities in West Bengal, India.

The production website is intended to be available at **[poorbitaeards.org](https://poorbitaeards.org)** and is deployed as a static Astro site on Netlify.

## Contents

- [Technology](#technology)
- [Project structure](#project-structure)
- [Local development](#local-development)
- [Available commands](#available-commands)
- [Content and images](#content-and-images)
- [Contact form](#contact-form)
- [Netlify deployment](#netlify-deployment)
- [Custom domain and DNS](#custom-domain-and-dns)
- [Changing the domain](#changing-the-domain)
- [Pre-launch verification](#pre-launch-verification)
- [Maintenance](#maintenance)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Technology

- [Astro](https://astro.build/) for static generation, routing and page components
- TypeScript with Astro's strict configuration
- Component-scoped CSS plus shared design tokens in `src/styles/global.css`
- Netlify for continuous deployment, HTTPS, redirects and form handling
- No database or server runtime is required

Astro generates plain HTML, CSS and a small amount of browser JavaScript. This keeps the site fast and inexpensive to host while still supporting interactive navigation and the gallery lightbox.

## Project structure

```text
.
├── public/
│   ├── favicon.svg
│   └── images/              # Photographs served without processing
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   └── Header.astro
│   ├── data/
│   │   └── site.ts          # Navigation and shared program summaries
│   ├── layouts/
│   │   └── BaseLayout.astro # Metadata and shared page shell
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── our-work.astro
│   │   ├── gallery.astro
│   │   ├── contact.astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs         # Canonical production URL and Astro settings
├── netlify.toml             # Build, redirects and response headers
├── package.json
└── tsconfig.json
```

Files inside `src/pages` become routes automatically. For example, `src/pages/about.astro` produces `/about/`.

## Local development

### Requirements

- Node.js 20 or newer
- npm 10 or newer

Clone the repository and install dependencies:

```sh
git clone https://github.com/Anindyakafka/poorbitaeards.git
cd poorbitaeards
npm install
```

Start the development server:

```sh
npm run dev
```

Astro normally serves the site at `http://localhost:4321` and prints the exact address in the terminal.

On Windows systems where PowerShell blocks `npm.ps1`, use the executable directly:

```powershell
npm.cmd install
npm.cmd run dev
```

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server with hot reload |
| `npm run build` | Run Astro diagnostics and create the production build |
| `npm run preview` | Preview the most recent production build locally |

The production build is written to `dist/`. That directory is generated and should not be committed.

Before pushing a change, run:

```sh
npm run build
```

A successful build should report zero Astro errors and generate all six routes.

## Content and images

The initial text, program history, contact details and photographs were recovered from Poorbita's archived website. They provide a useful historical foundation but should not automatically be treated as current.

Shared navigation and program summaries are in `src/data/site.ts`. Longer page-specific copy currently lives inside the relevant `.astro` page.

Photographs are stored in `public/images` and referenced as `/images/filename.jpg`. When adding photographs:

- Prefer original files at least 2,000 pixels wide.
- Use descriptive lowercase filenames with hyphens.
- Compress large photographs before committing them.
- Write accurate alternative text describing the visible activity.
- Confirm publication consent, especially for images containing children.
- Record the program, location and approximate date outside the image file when possible.

Do not use invented impact figures or unverified donation information. Historical figures displayed on the website should remain clearly identified as archival until Poorbita supplies current reporting data.

## Contact form

The contact page uses Netlify Forms. The form is detected during Netlify's production build through these attributes:

```html
<form name="contact" method="POST" data-netlify="true">
```

Submissions appear in the Netlify project under **Forms**. Configure submission notifications in the Netlify dashboard if messages should also be delivered by email.

Netlify form handling does not operate through the ordinary Astro development server. Test the final form on a Netlify deploy or Deploy Preview.

The website currently displays the archived addresses `contact@poorbita.org` and `eards15@gmail.com`. The first email uses the former `poorbita.org` domain and is intentionally not rewritten to `poorbitaeards.org`; Poorbita must confirm that a new mailbox exists before the displayed email is changed.

## Netlify deployment

The repository includes the required build configuration in `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

To connect a new Netlify project:

1. Select **Add new project** in Netlify.
2. Import the GitHub repository `Anindyakafka/poorbitaeards`.
3. Select the production branch, normally `main`.
4. Confirm the build command is `npm run build`.
5. Confirm the publish directory is `dist`.
6. Deploy the project.

Every push to the connected production branch triggers a new production deployment. Pull requests can produce Deploy Previews for review before merging.

## Custom domain and DNS

The canonical production domain is:

```text
poorbitaeards.org
```

It is configured in `astro.config.mjs`. This value is used to generate canonical URLs and social metadata.

For Netlify DNS:

1. Add `poorbitaeards.org` under **Domain management → Production domains**.
2. Select **Set up Netlify DNS**.
3. Copy the four nameservers provided for this project.
4. At the domain registrar, replace all existing authoritative nameservers with those four Netlify nameservers.
5. Do not combine registrar nameservers and Netlify nameservers.
6. Wait for DNS propagation and Netlify's HTTPS certificate provisioning.

Keep the domain registration at the registrar. Changing authoritative nameservers delegates DNS management; it does not transfer ownership of the domain.

Before switching nameservers, recreate any important email records—MX, SPF, DKIM, DMARC or service-verification TXT records—in Netlify DNS. Missing mail records can interrupt domain email even while the website works correctly.

Set one hostname as the primary production domain in Netlify. Netlify can redirect the other hostname between `www.poorbitaeards.org` and `poorbitaeards.org`.

## Changing the domain

When the canonical domain changes, update all of the following:

1. The `site` property in `astro.config.mjs`.
2. Production domains and the primary domain in Netlify.
3. DNS or authoritative nameservers at the registrar.
4. Host-specific redirects in `netlify.toml`.
5. Any analytics, search-console or third-party domain verification.
6. Email addresses only after the corresponding mailboxes and DNS records exist.

The former `poorbitaeards.com` host redirects to `poorbitaeards.org` when the `.com` domain remains assigned to the same Netlify project as a domain alias and its DNS points to Netlify.

## Pre-launch verification

The NGO should confirm the following before treating the site as final:

- Legal organisation name and registration number
- Current phone numbers and email addresses
- Office and program-centre addresses
- Current program descriptions and geographic coverage
- Impact figures and reporting period
- Team or governing-body information
- Donation instructions and regulatory disclosures
- Rights and consent for every published photograph
- Privacy requirements for contact-form submissions

The site deliberately does not publish online banking or payment details until the organisation supplies verified information.

## Maintenance

For an ordinary content or design update:

```sh
git pull
npm install
npm run dev
# edit and review the site
npm run build
git add .
git commit -m "Describe the change"
git push
```

Netlify will build the pushed commit automatically. Check the Netlify deploy log after each production update.

Dependencies should be updated deliberately and followed by a production build and visual review. Avoid running forced automated upgrades without checking their breaking changes.

## Troubleshooting

### The custom domain shows a registrar parking page

DNS still points to the registrar or an old forwarding service. Check the domain's authoritative nameservers and remove obsolete URL-forwarding records.

### The Netlify URL works but the custom domain does not

The build is healthy and the problem is DNS or domain assignment. Confirm the custom domain is attached to the correct Netlify project and wait for DNS propagation.

### One device shows the new site while another shows the old site

The devices are using different DNS caches or resolvers. Flush the operating-system DNS cache, restart the browser, or wait for the previous DNS record's TTL to expire.

On Windows:

```powershell
Clear-DnsClientCache
```

### Netlify does not deploy a local change

Netlify deploys pushed Git commits, not uncommitted local files. Confirm the change has been committed and pushed to the branch connected in Netlify.

```sh
git status
git log -1 --oneline
git push
```

### The form works locally but submissions do not appear

Netlify Forms requires a Netlify deployment. Test the form on the deployed site and confirm form detection in the deploy log and Forms dashboard.

## License

This repository is distributed under the terms in [LICENSE](LICENSE).
