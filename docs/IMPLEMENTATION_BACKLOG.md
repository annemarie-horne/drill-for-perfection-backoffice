# Implementation Backlog

This backlog is a suggested implementation sequence for the software team. It is intentionally practical and can be converted into tickets.

## Phase 1 - Confirm Foundation

- Select backend runtime, database, and hosting approach.
- Confirm whether this project will extend the existing TimeMaker/PHP system or become a separate service.
- Confirm authentication and authorization approach.
- Confirm file storage approach for attachments.
- Confirm whether tests, forms, checklists, and document reviews share one process-definition model.

## Phase 2 - Domain Model And APIs

- Design versioned process/test definitions.
- Design sections, questions, answers, comments, and attachments.
- Design answer policies for single answer, multiple answers, ordered answers, and verbatim answers.
- Design posts/job titles.
- Design test groups.
- Design learning paths.
- Design teacher/student/employee assignments.
- Design sessions, attempts, and immutable activity events.
- Design certificate issue records from employee/student profiles.

## Phase 3 - Builder Screens

- Implement dashboard test list with real pagination, filtering, and search.
- Implement create/edit test flow.
- Implement section create/edit/delete/reorder.
- Implement question create/edit/delete/reorder.
- Implement answer editor.
- Implement prerequisites search and selection.
- Implement attachment upload, preview, download, ordering, and placement.
- Implement comment configuration.
- Implement save/publish/version behavior.

## Phase 4 - Administration Screens

- Implement job title/post list and add/edit form.
- Implement test search for assigning tests to posts.
- Implement test group list and add/edit form.
- Implement test search for assigning tests to groups.
- Implement employee list with scalable search/pagination.
- Implement employee profile.
- Implement manual completion/exemption records.
- Implement teacher list and teacher permissions.
- Implement learning path list and add/edit form.
- Implement learning path item ordering.

## Phase 5 - Delivery Integration

- Connect builder definitions to the Drill for Perfection frontend.
- Replace static frontend fixture data with API data.
- Implement Student Study sessions.
- Implement Student Test Knowledge sessions.
- Implement Teacher Testing sessions.
- Implement answer validation server-side.
- Implement review timing and confirmation.
- Implement restart/abandon/complete rules.

## Phase 6 - Reporting

- Define reporting requirements.
- Implement result summaries by employee, post, teacher, test, group, and learning path.
- Report incorrect attempts, repeated questions, review duration, abandoned tests, and restarts.
- Add CSV export if still required.

## Phase 7 - Quality And Controls

- Add role-based access control tests.
- Add validation tests for ordered answers.
- Add validation tests for verbatim answers.
- Add tests for perfect first pass completion rules.
- Add tests for append-only session events.
- Add tests for versioned content behavior.
- Add upload authorization and file access tests.

## Open Questions

- What backend technology will be used?
- Will this live inside the current TimeMaker codebase or as a separate module?
- What is the final authentication source for teachers, students, employees, and admins?
- Should posts, teachers, and employees sync from another company HR or CRM system?
- Should certificates be generated as PDF files?
- What reporting views are required for management?
- Are forms/checklists/legal workflows part of the first release or future release?

