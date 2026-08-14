# Client materials

This directory is the private intake area for source material supplied by Poorbita or EARDS.

Place new files under `incoming/`:

```text
client-materials/
├── README.md
└── incoming/
    ├── documents/  # Reports, registration papers, copy, PDFs and spreadsheets
    ├── images/     # Original photographs supplied for review
    └── brand/      # Logos, fonts, colour references and identity files
```

Everything inside `incoming/` is ignored by Git. This prevents unreviewed, sensitive or personally identifiable material from being committed or deployed accidentally.

## Workflow

1. Store the original client file in the appropriate `incoming/` folder.
2. Review its accuracy, privacy, consent and publication status.
3. Rename and optimize any approved public asset.
4. Copy only the approved output to its publishing location:
   - Website downloads and reports: `public/documents/`
   - Website photographs and graphics: `public/images/`
   - Content incorporated into pages: the relevant file under `src/`
5. Keep confidential originals in `client-materials/incoming/`; do not move them into `public/`.

Files placed under `public/` are included in the deployed website and may be accessible to anyone who knows their URL. Do not place identity documents, private contact details, bank information, beneficiary records or unapproved photographs there.
