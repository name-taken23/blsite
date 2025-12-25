"use client";

export default function DiagramLegend({ items }: { items: Array<{ label: string; color?: string; description?: string }> }) {
  return (
    <div className="mt-6 flex flex-wrap gap-4 items-center justify-center text-sm text-ink-3">
      {items.map((it, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full" style={{ background: it.color ?? 'rgba(0,124,255,0.6)' }} aria-hidden="true" />
          <div className="text-left">
            <div className="font-semibold text-ink-1 text-xs">{it.label}</div>
            {it.description && <div className="text-xs text-ink-3">{it.description}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}
