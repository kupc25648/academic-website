# CK Academic Website V5 — Full Top Tabs

This version removes the remaining left-side selectors.

There are now **no side tabs** in Research or Teaching.

## Structure

### Main website navigation

A horizontal top tab bar:

`Home | Research | Publications | Teaching | Resources | People | News | About`

### Research

A second horizontal tab row:

`Arc 01 | Arc 02 | Arc 03 | Arc 04`

Below it is one full-width research display.

```text
┌───────────────────────────────────────────────────────┐
│ Research                                              │
│ Arc 01 | Arc 02 | Arc 03 | Arc 04  → horizontally    │
├───────────────────────────────────────────────────────┤
│                                                       │
│              FULL-WIDTH ARC DISPLAY                   │
│                                                       │
│      figure                    description            │
│                                questions              │
│                                skills                 │
│                                                       │
└───────────────────────────────────────────────────────┘
```

### Teaching

Same interaction:

`Course A | Course B | Course C | Course D`

Then one full-width course display below.

### Mobile

Both navigation levels become horizontally swipeable.

No left sidebar is used.

## Normal editing

Only edit:

`data.js`

The content structure is unchanged from V4.

## Preview

```bash
cd ck_academic_website_v5_full_top_tabs
python3 -m http.server 8000
```

Open:

`http://localhost:8000`


## V7 visual theme

Inspired by the research-slide visual language:

- white canvas
- Helvetica / Arial typography
- black primary text
- light / medium grey secondary text and rules
- bright red `#f01218` as the sole accent
- red reserved for active tabs, research indices, links and emphasis
- no large red background panels


## V8 research image layout

Research Arc pages now use:

`large full-width image -> research title/text -> questions -> skills`

Research images use `object-fit: contain`, so wide diagrams are shown completely rather than cropped.
