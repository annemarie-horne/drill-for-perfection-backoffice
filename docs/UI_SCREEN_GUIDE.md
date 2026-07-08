# UI Screen Guide

## Navigation

The main TimeMaker-style navigation remains at the top:

- Tests
- Drill for Perfection
- Results
- Settings

Under it, Drill for Perfection uses a horizontal submenu:

- Tests
- Job Titles / Posts
- Test Groups
- Students / Employees
- Teachers
- Learning Paths
- Results & Reporting

There is no separate Questions submenu. Questions are accessed from a test.

## Dashboard / Tests

Location:

```text
drill-for-perfection-home/
```

Purpose:

Shows a list of tests and gives developers/stakeholders the primary landing page for the mock-up.

Current UI elements:

- All, Active, Deleted filter tabs
- List of tests
- Manage Views button
- Export CSV button
- Add button
- Edit, Delete, Duplicate row actions
- Static pagination controls
- Static column filters

Expected future behavior:

- Real server-side pagination and filtering
- Create/edit/delete/restore tests
- Duplicate tests
- Generate links if that feature is retained
- Enforce permissions

## Test / Question Editor

Location:

```text
edit-question/
```

Purpose:

Configure a test and the questions inside its sections.

Current UI elements:

- Test name
- Description
- Outcome
- Instructions
- Timer options
- Teacher details
- Student details
- Counter settings
- Prerequisites
- Sections
- Questions
- Question row actions

Expected future behavior:

- Save versioned test definitions
- Add/edit/delete/reorder sections
- Add/edit/delete/reorder questions
- Configure answer type and answer policy
- Configure attachments and comments
- Configure ordered/verbatim requirements
- Configure prerequisites

## Job Titles / Posts

Purpose:

Manage company posts and assign tests or test groups to each post.

Current UI elements:

- Searchable post list
- Add Post modal
- Detail panel for selected post
- Searchable individual test assignment list
- Test group assignment checkboxes

Expected future behavior:

- Search thousands of tests and posts
- Save post-to-test assignments
- Save post-to-test-group assignments
- Show counts for employees and assigned tests

## Test Groups

Purpose:

Bundle related tests into groups.

Current UI elements:

- Test group table
- Number of Tests column
- Add Test Group modal
- Searchable test selection

Expected future behavior:

- Create/edit/delete groups
- Add/remove tests from a group
- Search large test libraries
- Show where each group is used

## Students / Employees

Purpose:

Manage employees, assigned learning, manual completions, exemptions, and certificates.

Current UI elements:

- Searchable employee table
- Add Employee modal
- Open Profile modal
- Learning path table inside profile
- Manual status adjustment
- Certificate action inside profile

Expected future behavior:

- Search thousands of employees
- Open employee profile without leaving context
- Assign post, teacher, learning path, tests, or groups
- Record manual completions/exemptions
- Issue certificates from profile

## Teachers

Purpose:

Manage internal facilitators and the students/tests they may handle.

Current UI elements:

- Teacher table
- Contact
- Role/post
- Student count
- Permitted tests/groups
- Tests facilitated

Expected future behavior:

- Add/edit teachers
- Set teacher permissions
- Assign teachers to employees or posts

## Learning Paths

Purpose:

Manage structured training programmes that may contain many tests or groups.

Current UI elements:

- Table layout for large path sets
- Add Learning Path modal
- Searchable test/group selection
- Counts for tests, groups, employees, and completion

Expected future behavior:

- Create/edit/delete learning paths
- Add tests and groups in a controlled order
- Assign paths to posts or employees
- Scale to many paths with different lengths

## Results & Reporting

Purpose:

Placeholder for company-level training reporting.

Current UI elements:

- Metric strip
- Results table
- Common repeats
- Incomplete employees

Expected future behavior:

- Detailed reporting requirements still need to be defined.

