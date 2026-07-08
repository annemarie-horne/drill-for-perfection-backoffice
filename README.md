# BDA Main - Drill for Perfection Admin Mock-up

This repository contains a static TimeMaker-style mock-up for the future BDA builder/admin backend. It is currently focused on the **Drill for Perfection** training/test workflow and is intended as a product and UI hand-off for the software team.

## Open The Mock-up

Open the project root in the browser:

```text
http://localhost/WebDev/bda-main/
```

The root `index.html` redirects directly to the dashboard:

```text
drill-for-perfection-home/
```

The test/question editor is available here:

```text
edit-question/
```

## Current Status

This is a static functional mock-up. It includes HTML, CSS, and small JavaScript interactions, but it does not include a backend, database, authentication, API, build step, or production data persistence.

The mock-up demonstrates:

- A TimeMaker-style dashboard for Drill for Perfection administration.
- Test list with All, Active, and Deleted filters.
- Job titles/posts with test assignment search.
- Test groups with test counts and searchable test selection.
- Students/employees with scalable table layout and profile modal.
- Teachers overview.
- Learning paths in table format for large company setups.
- Results and reporting placeholder screen.
- Test editor with sections, questions, prerequisites, teacher/student metadata, and aligned question controls.

## Folder Structure

```text
bda-main/
  index.html                         Root redirect into the dashboard
  README.md                          GitHub-facing project overview
  ARCHITECTURE_AUDIT.md              Earlier architecture mapping notes
  docs/                              Software team hand-off documents
  drill-for-perfection-home/
    index.html                       Main admin/dashboard mock-up
    styles.css                       Dashboard-specific styles
    admin.js                         Static tab, modal, filter interactions
  edit-question/
    index.html                       Test/question editor mock-up
    styles.css                       Shared TimeMaker-style base CSS
    editor.js                        Static prerequisite interaction
    images/logo.png                  TimeMaker logo
```

## Design Direction

The goal is to reuse the existing TimeMaker builder look and feel as much as possible. The mock-up intentionally keeps the blue header, compact form layout, small action buttons, table-heavy administration screens, and existing admin styling language.

The vertical admin menu has been replaced with a horizontal submenu under the main navigation:

- Tests
- Job Titles / Posts
- Test Groups
- Students / Employees
- Teachers
- Learning Paths
- Results & Reporting

Questions are not a standalone navigation item. They are managed from inside a test.

## Important Product Decisions

- Certificates are not a separate module. They belong inside the student/employee profile.
- Teacher Activity has been removed for now.
- Results & Reporting is intentionally kept as a placeholder until requirements are clearer.
- Large datasets are assumed. Screens should be designed for thousands of employees, tests, and records.
- Test assignments can happen through posts, test groups, learning paths, and direct employee/profile decisions.
- The eventual backend should support tests, study material, forms, checklists, legal/document-review workflows, and other structured question-and-answer processes.

## Developer Notes

The current pages are static. Button actions, form saves, modal saves, filters, and links are only illustrative unless implemented in `admin.js` or `editor.js`.

Use these documents for implementation planning:

- [Product Handoff](docs/PRODUCT_HANDOFF.md)
- [Technical Handoff](docs/TECHNICAL_HANDOFF.md)
- [UI Screen Guide](docs/UI_SCREEN_GUIDE.md)
- [Implementation Backlog](docs/IMPLEMENTATION_BACKLOG.md)

