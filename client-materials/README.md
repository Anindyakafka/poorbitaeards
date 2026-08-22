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

## Current intake folders

Use the most specific folder available. Do not rename or overwrite original client files unless you are working on an approved public copy.

### Registered identity

- `incoming/brand/registered-logo/` — the official registered logo in every supplied format
- `incoming/brand/guidelines/` — brand manuals, colour specifications and font information
- `incoming/brand/reference/` — historical identity material that should not automatically be published

For the registered logo, prefer SVG, EPS, AI or PDF. Also include the largest transparent PNG supplied by the client. Do not convert or optimize the only original copy.

### Photographs

- `incoming/images/programmes/kishalay/` — children, education, nutrition, sport and talent development
- `incoming/images/programmes/agnishikha/` — adolescent girl empowerment
- `incoming/images/programmes/jibika/` — women, skills and livelihood training
- `incoming/images/programmes/chetana/` — awareness and capacity-building sessions
- `incoming/images/programmes/seva/` — medical camps, eye care, blood donation and relief
- `incoming/images/programmes/sanskriti/` — art, craft, festivals and cultural performances
- `incoming/images/programmes/krishi/` — farming, kitchen gardens, livestock and pisciculture
- `incoming/images/programmes/swapna/` — future programmes and concept/reference material
- `incoming/images/people/team/` — board, staff, teachers and volunteers
- `incoming/images/people/beneficiaries/` — portraits with confirmed publication consent
- `incoming/images/places/centres/` — Poorbita centres, classrooms and facilities
- `incoming/images/places/communities/` — villages and field locations
- `incoming/images/events/` — dated events that span several programme areas
- `incoming/images/awards-media/` — awards, certificates, press and recognition
- `incoming/images/uncategorised/` — unclear photographs for later review

Add known image information to `incoming/images/image-metadata.csv`. One image can have only one row; use semicolons inside the `people_or_notes` field when needed.

### Documents

- `incoming/documents/content/` — approved copy, programme descriptions and organizational profiles
- `incoming/documents/legal/` — registrations, certificates and compliance documents
- `incoming/documents/reports/` — annual reports, impact reports and financial reports
- `incoming/documents/awards-media/` — award letters, press clippings and coverage
- `incoming/documents/governance/` — board and advisory council information
- `incoming/documents/private/` — sensitive reference documents that must never be published directly

Everything inside `incoming/` is ignored by Git. This prevents unreviewed, sensitive or personally identifiable material from being committed or deployed accidentally.

## Confirmed source documents

- `incoming/documents/content/poorbita-kishalay-brochure.pdf` — client-approved Kishalay brochure used for current program, campus, recognition, cost, contact and contribution information
- `incoming/brand/reference/poorbita-agnisikha-reference.jpeg` — original flower reference supplied for Agnishikha; retained as reference rather than a public logo

Bank details may be incorporated into public page copy only from a client-confirmed source. Keep the original source private, transcribe account and IFSC values exactly, and ask EARDS to reconfirm them whenever a replacement brochure is supplied.

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
