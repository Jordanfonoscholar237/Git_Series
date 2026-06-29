# LifeView Central

**LifeView Central** is a hospital-wide patient monitoring and clinical intelligence MVP that collects real-time data from automated medical machines, stores it centrally, and displays it on web/mobile dashboards with alerts and AI-assisted analysis.

> Positioning: Hospital-wide patient monitoring platform with real-time device data, dashboards, alerts, AI analysis, and mobile/PWA support.

## Problem solved

Hospitals often rely on disconnected bedside monitors, paper notes, separate lab/imaging systems, and manual escalation. LifeView Central demonstrates a unified command center for doctors, nurses, biomedical engineers, and administrators to see patient status earlier and coordinate safer, faster care.

## Key features

- Professional landing/login page with the message: **“Real-time patient visibility across the hospital.”**
- Department hub: ICU, Emergency, Surgery, Radiology, Maternity, Pediatrics, Laboratory, Pharmacy, Biomedical, Administration.
- Patient list with add, delete, search, and filter support.
- Patient details: admission context, diagnosis, allergies, attending doctor, nurse, room/bed, blood type, notes, orders, labs, imaging, alerts, and latest vitals.
- Simulated real-time vitals: HR, SpO₂, BP, RR, temperature, ventilator values, and EtCO₂.
- Central monitoring wall with alarm colors and bed cards.
- Alerts with severity: low, medium, high, critical.
- Reports and audit logs.
- PWA/mobile access with manifest and service worker.
- Optional AI-style clinical decision-support demo that produces a risk score, abnormal value summary, recommended checks, and a safety disclaimer.

## Tech stack

- Node.js
- Node.js built-in HTTP server
- Vanilla HTML/CSS/JavaScript
- PWA manifest + service worker
- JSON runtime demo storage

## Architecture

```text
Medical devices / automated machines
  → device adapter or hospital gateway API
  → Node.js backend ingestion endpoint
  → central database or demo JSON storage
  → responsive web/PWA dashboards
  → alerts, reports, audit logs
  → optional AI-assisted decision-support
```

See [`docs/device-integration.md`](docs/device-integration.md) for example JSON payloads for bedside monitors, ventilators, infusion pumps, lab machines, and imaging systems.

## Installation

```bash
npm install
cp .env.example .env
npm start
```

Open <http://localhost:3000>.

## Demo login

- Doctor: `doctor@lifeview.demo` / `demo123`
- Nurse: `nurse@lifeview.demo` / `demo123`
- Biomedical engineer: `biomed@lifeview.demo` / `demo123`
- Admin: `admin@lifeview.demo` / `demo123`

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `PORT` | No | Server port. Defaults to `3000`. |
| `NODE_ENV` | No | Runtime environment. |
| `OPENAI_API_KEY` | No | Reserved for optional future external AI mode. The default demo works without an external API. |

## Deployment on Render or similar

1. Create a new Web Service from the GitHub repository.
2. Build command: `npm install`.
3. Start command: `npm start`.
4. Add environment variables from `.env.example` in the platform dashboard.
5. Do not upload `.env` or real patient data.

## Screenshots

Add screenshots or GIFs here before public launch:

- Landing/login page
- Central monitoring wall
- Patient details
- AI decision-support demo
- Mobile/PWA view

## Security, privacy, and clinical safety

- Prototype only. Do not use for diagnosis, treatment, or live clinical decision-making.
- Do not enter real patient data in public demos or screenshots.
- Real deployments require authentication hardening, role-based authorization, encryption, audit logging, backups, clinical validation, cybersecurity review, and compliance with applicable health-data laws.
- Real device integration must be authorized and implemented through vendor-supported interfaces, HL7/FHIR, secure gateway APIs, or approved protocols.
- The AI analysis is **demo decision-support only** and does not replace clinicians.

## Roadmap

- Persistent production database such as PostgreSQL.
- Full add/edit/delete patient workflow with validation.
- HL7/FHIR integration adapters.
- Role-based permissions and SSO.
- SMS/WhatsApp/email escalation workflows.
- Offline-first mobile rounding experience.
- Production observability, backups, and incident response.

## GitHub presentation

Suggested repository name: `lifeview-central`

Suggested description: `Hospital-wide patient monitoring platform with real-time device data, dashboards, alerts, AI analysis, and mobile/PWA support.`

Recommended topics: `healthcare`, `healthtech`, `patient-monitoring`, `hospital-management`, `medical-dashboard`, `ai-healthcare`, `iot`, `nodejs`, `pwa`.

## Rename repository

If GitHub CLI is authenticated:

```bash
gh repo rename lifeview-central
```

Or use GitHub: **Repository → Settings → General → Repository name → Rename**.

Then update your local remote if needed:

```bash
git remote set-url origin git@github.com:YOUR-USERNAME/lifeview-central.git
git remote -v
```

## License

MIT. See [`LICENSE`](LICENSE).

## Contact

Add your name, GitHub profile, LinkedIn, or project email here.
