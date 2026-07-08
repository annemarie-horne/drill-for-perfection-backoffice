# Technical Handoff

## Repository State

This repository is currently a static prototype:

- No backend runtime
- No database
- No API layer
- No authentication
- No build system
- No package manager dependency setup
- No production persistence

The mock-up can be opened directly through the local web server.

## Entry Points

Root URL:

```text
http://localhost/WebDev/bda-main/
```

The root `index.html` redirects to:

```text
drill-for-perfection-home/
```

Question editor:

```text
edit-question/
```

## Important Files

### `index.html`

Small root redirect so a developer or stakeholder can open the project folder URL and land on the dashboard.

### `drill-for-perfection-home/index.html`

Main static dashboard/admin mock-up. It contains all current admin sections as static markup:

- Tests
- Job Titles / Posts
- Test Groups
- Students / Employees
- Teachers
- Learning Paths
- Results & Reporting

### `drill-for-perfection-home/admin.js`

Small JavaScript file for mock-up interactions:

- Switches admin views through the horizontal submenu.
- Updates the URL hash.
- Filters the test table by All, Active, Deleted.
- Opens and closes mock modals.
- Filters checkbox lists inside assignment modals.

This is not production application logic.

### `edit-question/index.html`

Static test/question editor mock-up. It demonstrates:

- Test metadata
- Outcome/instructions fields
- Timer controls
- Teacher/student details
- Counter settings
- Prerequisite selection
- Sections
- Question rows
- Question action buttons
- Save/Cancel returning to dashboard tests

### `edit-question/styles.css`

Shared TimeMaker-style base styling. The dashboard imports this stylesheet first.

### `drill-for-perfection-home/styles.css`

Dashboard-specific styles layered on top of the editor/base stylesheet.

### `edit-question/editor.js`

Small prerequisite search/selection mock-up interaction.

## Related Project

This admin/builder mock-up connects conceptually to:

```text
/Library/WebServer/Documents/WebDev/bda-drill-for-perfection
```

That project demonstrates the student study, student test knowledge, and teacher testing frontend experiences. Its behavior should inform the domain model and APIs, but the current frontend DOM state should not be copied directly into the backend.

## Recommended Architecture Direction

Use explicit backend domain records instead of persisting UI labels or CSS state.

Recommended boundaries:

- Process definitions
- Versioned tests/processes
- Sections
- Questions
- Answers
- Comments
- Attachments
- Attachment presentation settings
- Assignments
- Sessions
- Attempts
- Immutable session events
- Users and roles
- Posts/job titles
- Test groups
- Learning paths
- Certificates issued from employee/student profiles

## Key Engineering Decisions To Preserve

### Version Content

When a test is started, the session should retain the exact version of the content used at that time. Later edits should create a new version rather than changing historical attempts.

### Separate Definition From Execution

Builder screens define what should happen. Sessions and attempts record what happened.

### Store Ordered Data Explicitly

Questions, answers, sections, attachments, test groups, and learning path items need stable order fields.

### Use Append-only Logs

Session activity should be recorded in an immutable event log. Current progress can be projected from events, but normal application flows should not rewrite the log.

### Enforce Rules Server-side

Rules such as ordered answers, review confirmation, restart requirements, and perfect first pass completion must be validated server-side.

## Suggested Data Concepts

These names are suggestions, not final implementation requirements:

- `ProcessDefinition`
- `ProcessVersion`
- `SectionDefinition`
- `QuestionDefinition`
- `AnswerDefinition`
- `CommentDefinition`
- `AttachmentDefinition`
- `AttachmentPresentation`
- `Post`
- `TestGroup`
- `LearningPath`
- `Assignment`
- `Session`
- `SessionQuestion`
- `ResponseAttempt`
- `SessionEvent`
- `User`
- `Role`
- `Certificate`

## Implementation Warning

The mock-up uses static sample rows and simple DOM interactions. Do not treat the mock-up JavaScript as the final application architecture. It is only there to make the prototype easier to click through.

