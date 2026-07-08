# Product Handoff

## Purpose

`bda-main` is the future builder/admin backend for creating structured question-and-answer processes. The first target product experience is **Drill for Perfection**, but the builder should eventually support more than tests.

Administrators should eventually be able to create and manage:

- Tests
- Study material
- Forms
- Checklists
- Legal/document-review workflows
- Other structured question-and-answer processes

## Current Mock-up Scope

The current project is a static HTML/CSS/JavaScript mock-up. It demonstrates the expected administration flow and visual direction, but it does not persist data.

Implemented mock-up areas:

- Dashboard/test list
- Test/question editor
- Job titles/posts
- Test groups
- Students/employees
- Teachers
- Learning paths
- Results/reporting placeholder

## Main User Roles

### Administrator

Creates and manages tests, posts, groups, learning paths, employee assignments, teacher assignments, and reporting views.

### Teacher

Facilitates testing, marks responses, confirms review of incorrect answers, and helps students repeat questions until correct.

### Student / Employee

Studies assigned material, takes knowledge tests, completes learning paths, and receives certificates from their profile when eligible.

## Drill For Perfection Delivery Modes

The connected frontend prototype demonstrates three delivery modes:

1. Student Study mode
2. Student Test Knowledge mode
3. Teacher Testing mode

The builder should configure content and rules that these delivery modes consume.

## Question Configuration Requirements

A question may include:

- Question text
- One answer
- Multiple answers
- Answers that must be learned verbatim
- Multiple answers that must be given in a configured order
- Both verbatim and ordered requirements
- Comments
- Comment attachments
- Question attachments
- Custom attachment/comment headings
- Placement below the question or below the answer
- Ordered or unordered attachments
- List and tab attachment views

## Attachment Requirements

Attachments need:

- File name
- Description
- Preview
- Download
- Configurable display order
- A setting indicating whether attachments must be viewed in order
- Association with either the question or its comment
- Configurable visual placement

## Teacher Testing Requirements

The teacher flow must support:

- Seeing questions and expected answers.
- Marking answers correct or incorrect.
- Checking individual answers for multiple-answer questions.
- Enforcing configured answer order.
- Showing the expected answer after an incorrect response.
- Confirming that the student reviewed the answer.
- Repeating the question until eventually correct.
- Recording incorrect attempts and review duration.
- Completing a test only after a perfect first pass.
- Restarting the entire test if any first attempt was incorrect.
- Abandoning a test.

## Session And Logging Requirements

Sessions need an immutable activity log recording:

- Started, paused, and resumed
- Restarted
- Correct and incorrect responses
- Out-of-order responses
- Answer shown
- Answer reviewed
- Review duration
- Completed or abandoned
- Timestamps and running time
- Statistics captured at each event

## Current Product Decisions

- Keep the existing TimeMaker visual style as much as possible.
- Use a horizontal Drill for Perfection submenu under the main menu.
- Do not show Questions as a standalone submenu item. Questions belong inside a test.
- Remove User Defined Fields, Notifications, and top-level Actions from the test editor for now.
- Keep Sections and the Questions inside Sections.
- Remove Stages Custom Days to Complete and Evaluation from the editor.
- Certificates belong on the student/employee profile.
- Remove Teacher Activity for now.
- Keep Results & Reporting as a placeholder until detailed requirements are confirmed.
- Treat screens as if there may be thousands of records.

