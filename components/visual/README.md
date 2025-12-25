# Blueprint Visual System (Visual Kit)

All assets in this folder are:
- Inline SVG React components (small, tree-shakeable)
- Token-colored via Tailwind classes (no new hard-coded colors)
- Consistent stroke + radius conventions via `visualTokens.ts`

## Components
- `SystemMapMotif`: nodes/edges schematic motif
- `ConstraintIcon`: latency/cost/reliability/security/compliance/risk icon set
- `BlueprintTimelineMotif`: Blueprint → Build → Calibrate timeline motif
- `OutcomeStripMotif`: before/after bar strip motif
- `SectionSeparatorMotif`: rule + annotation motif
- `ArtifactTileBackground`: background for Work/case study tiles

All components accept `className` and default to decorative (`aria-hidden`).
