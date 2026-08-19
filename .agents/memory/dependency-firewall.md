---
name: Dependency firewall
description: Replit package firewall behavior for imported JavaScript projects
---

When a pinned dependency release is blocked by the package firewall, retry the same dependency at its latest safe release before considering a replacement.

**Why:** Imported projects may pin versions that later receive a security block even though the framework remains appropriate.

**How to apply:** Preserve the requested framework and architecture, update only the blocked dependency versions, then rebuild to catch compatibility changes.
