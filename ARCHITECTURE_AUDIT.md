# BDA Builder Architecture Audit

## Scope

This audit maps the current `bda-main` builder prototype to the delivery behavior demonstrated by `bda-drill-for-perfection`. It is an architecture reference only; no application architecture has been implemented yet.

## Current State

### bda-main

- Static HTML/CSS mockup with no JavaScript, backend runtime, API, database, or build system.
- Models the visual hierarchy of a test editor: test metadata, sections, question rows, user-defined fields, notifications, and actions.
- Question rows are display-only. Add, edit, delete, move, save, and cancel controls have no behavior.
- Existing form controls suggest older BDA concepts such as required answers, attachments, user notes, comments, sections, and workflow actions, but they are not represented as structured data.

### bda-drill-for-perfection

- Static HTML/CSS/JavaScript prototype with no API or database.
- `session.html` is both fixture data and view markup. `js/script.js` builds the interactive study/testing UI and stores runtime state in DOM classes and `data-*` attributes.
- Login and dashboards are visual prototypes. Role selection and a few outcomes use `localStorage`; authentication and authorization are not real.
- The session activity log is an in-memory array and is lost on reload.

## Reusable Product Contracts

The frontend prototype is valuable as an executable behavioral specification. The following contracts should be preserved while storage and rendering are replaced:

### Question presentation

- Single-answer and multiple-answer questions.
- Independent `verbatim` and `ordered` requirements.
- Expected answers shown as text or ordered/unordered lists.
- Comments with custom headings and question/answer placement.
- Question and comment attachments with filename, description, preview, download, custom heading, placement, order, and list/tab views.

### Student Study

- Start, pause, resume, restart, and complete study sessions.
- Mark questions as learned or requiring review.
- Filter to outstanding/review questions and repeat a selected subset.
- Transition from study to knowledge testing.

### Student Test Knowledge

- Mark answers correct or needing practice.
- Track first response separately from later retries.
- Restart knowledge practice and retain meaningful attempt statistics.

### Teacher Testing

- Teacher sees expected answers and marks responses.
- Multiple answers can be checked individually.
- Ordered answers reject an out-of-order selection.
- Incorrect responses enter a review-required phase.
- Expected answer is shown, review duration is measured, and the teacher confirms review.
- The question becomes retryable until correct.
- Completion distinguishes a perfect first pass from a test that must restart or be abandoned.

### Session telemetry

- Events carry an event type, timestamp, mode, optional question context, and a statistics snapshot.
- Existing event vocabulary includes start, pause, resume, restart, correct, incorrect, out of order, answer shown, answer reviewed, complete, abandon, and reschedule.

## Recommended Domain Boundaries

Do not persist the prototype's CSS classes, display labels, pipe-delimited answers, or attachment strings. Introduce explicit domain records:

### Content definition

- `ProcessDefinition`: general container with purpose/type (`test`, `study`, `form`, `checklist`, `document_review`, or extensible custom type), title, description, status, and version.
- `SectionDefinition`: ordered grouping within a process.
- `QuestionDefinition`: prompt, question type, configuration, expected-answer policy, and position.
- `AnswerDefinition`: one ordered answer item; multiple answers are multiple records, not a delimited string.
- `CommentDefinition`: body, custom heading, and placement.
- `AttachmentDefinition`: storage key, filename, media type, size, description, preview metadata, position, and owner type/id.
- `AttachmentPresentation`: heading, placement, ordered requirement, and permitted views.
- `WorkflowAction` and `NotificationRule`: remain separate from learning/testing rules.

### Delivery and assignment

- `Assignment`: binds a versioned process definition to a student, teacher, schedule, and delivery policy.
- `Session`: one study/test execution with role/mode, status, timing totals, and the exact process version used.
- `SessionQuestion`: per-session question state, first-attempt outcome, current phase, retry count, and final outcome.
- `ResponseAttempt`: append-only response/marking attempt, including selected answer items and ordering evidence.
- `SessionEvent`: append-only immutable activity event with occurred-at time, actor, question/attempt references, duration, and statistics snapshot.

### Identity and access

- `User`, `Role`, and role assignment records.
- Teacher/student profile details should be separate from authentication credentials.
- Authorization must be enforced server-side for builder administration, assignments, teacher marking, and student sessions.

## Important Modeling Decisions

1. **Version definitions.** A started assignment/session must retain the exact question text, answers, ordering, comments, and attachments it began with. Editing a builder definition should create or publish a new version rather than mutate history.
2. **Use append-only session events.** Current session state can be projected for fast reads, but attempts and activity events must never be rewritten or deleted through normal application flows.
3. **Separate definition from execution.** Builder records describe what should happen; assignments and sessions record who performs it and what happened.
4. **Separate content rules from UI placement.** `verbatim` and `ordered` are answer policies. Attachment placement and list/tab presentation are rendering policies.
5. **Represent ordering explicitly.** Store integer positions for sections, questions, answers, and attachments. Record the submitted order for attempts.
6. **Treat review as a state transition.** Teacher flow should use explicit phases such as `awaiting_mark`, `review_required`, `answer_shown`, `review_confirmed`, `retry_ready`, and `correct`.
7. **Define "perfect first pass" server-side.** Completion eligibility must be derived from immutable first attempts, never from a mutable UI class or client-provided summary.

## Requirement Coverage

| Requirement | Prototype coverage | Backend/builder gap |
| --- | --- | --- |
| Tests, study material, forms, checklists, review workflows | Visual hints only | General process type and configurable delivery policy |
| Single/multiple answers | Demonstrated | Structured question/answer editor and persistence |
| Verbatim and ordered answers | Demonstrated independently and together | Validation policy and persisted answer ordering |
| Comments and custom headings/placement | Demonstrated | Builder controls and structured records |
| Question/comment attachments | Demonstrated | Upload/storage, metadata, ordering, ownership, preview authorization |
| List/tab attachment views | Demonstrated | Persisted presentation setting |
| Student Study | Interactive prototype | Durable session/assignment API |
| Student Test Knowledge | Interactive prototype | Attempt persistence and server-side rules |
| Teacher Testing | Strong interactive prototype | State machine, authorization, durable events |
| Perfect first pass/restart | Demonstrated in client logic | Server-side invariant and new session/round semantics |
| Immutable activity log | Visual in-memory log | Append-only event store/table and audit controls |
| Authentication and dashboards | Static prototype | Real identity, authorization, queries, pagination, scheduling |

## Reusable UI Pieces

- Drill resource viewer: list/tab modes, ordered indicator, preview/download actions.
- Question answer presentation and verbatim/multiple/order badges.
- Teacher answer-review modal and review-duration interaction.
- Session timer, metrics, filters, and activity-log presentation.
- Student and teacher dashboard information architecture.

These should be extracted only after an API/domain contract exists. Copying the 3,193-line session script into `bda-main` would couple the builder to DOM state and make persistence harder.

## Safe Implementation Sequence

1. Confirm the backend runtime and database technology; neither exists in this repository today.
2. Write the versioned process-definition and session-event schemas, including validation invariants.
3. Define API contracts using fixtures derived from the frontend's `data-*` examples.
4. Build the builder's question editor for single/multiple answers, verbatim/order policies, comments, and attachment presentation.
5. Add upload/storage and preview/download authorization.
6. Implement assignments, role-aware authentication, and session state transitions.
7. Adapt `bda-drill-for-perfection` to consume the APIs, extracting reusable UI components as each contract stabilizes.
8. Add invariant-focused tests for ordered answers, first attempts, review duration, restart requirements, and append-only logs.

## Explicit Non-Decisions

- No framework, language, database, object storage provider, or authentication provider is selected yet.
- No assumption is made that the current TimeMaker production PHP implementation is the target architecture.
- No large rewrite or component extraction should start until the runtime choice and domain/API contracts are agreed.
