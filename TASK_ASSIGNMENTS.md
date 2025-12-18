# Task Assignments

Assigned: 2025-10-06

Notes: deadlines below range from 0.5 day (4 hours) to 1 day (8 hours). All tasks are set to "Not started" by default. Each task lists a short acceptance criteria and expected deliverable.

---

## 1) UI cleanup & remove unnecessary pages
- Assignees: Arnav, Ayush Negi
- Deadline: 1 day (8 hours) from assignment
- Priority: High
- Scope:
  - Improve general UI consistency (spacing, typography, color tokens).
  - Remove unused/duplicate pages and routes.
  - Fix obviously broken pages and leftover debug UI.
- Acceptance criteria / Deliverables:
  - List of removed pages (git commit + changelog entry).
  - PR with UI polish changes and resolved broken-page fixes.
- Status: Not started

---

## 2) ✅Trains / Rakes / Consumer stations research (catalog + listing)
- Assignee: Anurag Singh
- Deadline (Anurag Singh - assistance): 1 day (8 hours) from assignment
- Priority: Medium
- Scope:
  - Research and document all trains, rake types, consumer stations, and related domain entities used by the app.
  - Produce a consolidated list and suggested canonical names / fields for each entity.
- Acceptance criteria / Deliverables:
  - A markdown list (or spreadsheet attachment) with entities, short descriptions, sample data fields, and recommended keys.
  - Notes about data sources and any follow-up questions for domain experts.
- Status: started, 5000 datasets obtained ;
- It includes fields:
starting_location
destination_name
location_type
state
rail_connectivity
daily_loading_capacity_ton
available_infrastructure
weather_sensitivity
geo_latitude
geo_longitude
no_of_wagons
max_speed_loaded_kmph
customer_id
material_name
---

## 3) Rake 3D — interactivity enhancement
- Assignee: Anurag Singh Bittu
- Deadline: 1 day (8 hours) from assignment
- Priority: High
- Scope:
  - Make the Rake 3D visualization interactive (basic interactions: hover info, click to inspect, simple controls for view/animation playback).
  - Ensure performance remains acceptable and add basic accessibility notes.
- Acceptance criteria / Deliverables:
  - Demo (GIF or short recording) showing interactivity.
  - PR implementing interactive controls with tests or manual test checklist.
- Status: Not started

---

## 4) Map functionality — proper implementation
- Assignee: Ayush Kumar
- Deadline: 0.5 day (4 hours) from assignment
- Priority: High
- Scope:
  - Fix/implement core map features (map centering, markers, layer toggles, basic pan / zoom behavior, and mobile responsiveness).
  - Verify integration with existing location data and routing if applicable.
- Acceptance criteria / Deliverables:
  - Working map in main demo/dashboard page with markers and basic controls.
  - Short test notes and accompanying PR.
- Status: Not started

---

If anything needs to be split into smaller tickets or adjusted for scope, update this file and create corresponding issues/PRs. Keep PR descriptions linked to the relevant entries above.
