import type { ReactElement } from "react";
import { cn } from "@/lib/utils";
import { visualOpacity, visualRadius, visualStroke, visualStrokeColor } from "./visualTokens";

export type CaseStudyDiagramProps = {
  /** The case study slug to render the appropriate diagram for. */
  slug: string;
  /** Tailwind className applied to the root svg element. */
  className?: string;
  /** Render the outer frame around the schematic. */
  framed?: boolean;
  /** Size variant affects detail level. */
  size?: "sm" | "md" | "lg";
};

// Common SVG group styles
const frameStyles = cn(visualStrokeColor.frame);
const strongStyles = cn(visualStrokeColor.strong);
const mutedStyles = cn(visualStrokeColor.muted);

/**
 * Logistics Event Mesh - Shows event flow from sources through Kafka partitions to consumers
 */
function LogisticsEventMesh({ framed }: { framed: boolean }): ReactElement {
  return (
    <>
      {/* Frame */}
      {framed && (
        <g className={frameStyles} strokeWidth={visualStroke.hairline} opacity={visualOpacity.frame} fill="none">
          <rect x="10" y="10" width="400" height="160" rx={visualRadius.md} />
        </g>
      )}

      {/* Grid */}
      <g className={mutedStyles} strokeWidth={visualStroke.hairline} opacity={0.15}>
        {[60, 140, 220, 300, 380].map((x) => (
          <line key={x} x1={x} y1="20" x2={x} y2="160" strokeDasharray="2 4" />
        ))}
      </g>

      {/* Source nodes (Regional Hubs) */}
      <g>
        {/* Hub labels */}
        <text x="45" y="32" className="fill-gray-500 text-[8px] font-mono">HUB-1</text>
        <text x="45" y="92" className="fill-gray-500 text-[8px] font-mono">HUB-2</text>
        <text x="45" y="152" className="fill-gray-500 text-[8px] font-mono">HUB-N</text>
        
        {/* Hub nodes */}
        <g className={cn("fill-surface-2", strongStyles)} strokeWidth={visualStroke.thin}>
          <rect x="30" y="38" width="40" height="24" rx="4" />
          <rect x="30" y="98" width="40" height="24" rx="4" />
          <rect x="30" y="138" width="40" height="24" rx="4" />
        </g>
        
        {/* Dots indicating more hubs */}
        <g className="fill-gray-400">
          <circle cx="50" cy="75" r="1.5" />
          <circle cx="50" cy="82" r="1.5" />
          <circle cx="50" cy="89" r="1.5" />
        </g>
      </g>

      {/* Event flow arrows to Kafka */}
      <g className={strongStyles} strokeWidth={visualStroke.thin} fill="none" strokeLinecap="round">
        <path d="M 70 50 L 120 70" />
        <path d="M 70 110 L 120 90" />
        <path d="M 70 150 L 120 110" />
      </g>

      {/* Kafka cluster (partitions) */}
      <g>
        <text x="130" y="32" className="fill-gray-500 text-[8px] font-mono">KAFKA</text>
        
        {/* Partition bars */}
        <g className="fill-accent-electric/20 stroke-accent-electric" strokeWidth="1">
          <rect x="130" y="45" width="50" height="14" rx="2" />
          <rect x="130" y="65" width="50" height="14" rx="2" />
          <rect x="130" y="85" width="50" height="14" rx="2" />
          <rect x="130" y="105" width="50" height="14" rx="2" />
          <rect x="130" y="125" width="50" height="14" rx="2" />
        </g>
        
        {/* Partition labels */}
        <text x="155" y="55" className="fill-accent-electric text-[7px] font-mono" textAnchor="middle">P0</text>
        <text x="155" y="75" className="fill-accent-electric text-[7px] font-mono" textAnchor="middle">P1</text>
        <text x="155" y="95" className="fill-accent-electric text-[7px] font-mono" textAnchor="middle">P2</text>
        <text x="155" y="115" className="fill-accent-electric text-[7px] font-mono" textAnchor="middle">P3</text>
        <text x="155" y="135" className="fill-accent-electric text-[7px] font-mono" textAnchor="middle">P4</text>
      </g>

      {/* Consumer group arrows */}
      <g className="text-accent-electric" stroke="currentColor" strokeWidth={visualStroke.thin} fill="none" strokeLinecap="round">
        <path d="M 180 52 L 220 52" />
        <path d="M 180 72 L 220 72" />
        <path d="M 180 92 L 220 92" />
        <path d="M 180 112 L 220 112" />
        <path d="M 180 132 L 220 132" />
      </g>

      {/* Consumer pods */}
      <g>
        <text x="225" y="32" className="fill-gray-500 text-[8px] font-mono">CONSUMERS</text>
        
        <g className={cn("fill-surface-2", strongStyles)} strokeWidth={visualStroke.thin}>
          <rect x="220" y="42" width="35" height="20" rx="3" />
          <rect x="220" y="62" width="35" height="20" rx="3" />
          <rect x="220" y="82" width="35" height="20" rx="3" />
          <rect x="220" y="102" width="35" height="20" rx="3" />
          <rect x="220" y="122" width="35" height="20" rx="3" />
        </g>
        
        {/* Pod icons */}
        <g className="fill-gray-500">
          {[52, 72, 92, 112, 132].map((y) => (
            <circle key={y} cx="237" cy={y} r="4" />
          ))}
        </g>
      </g>

      {/* Circuit breaker / DLQ section */}
      <g>
        <text x="280" y="32" className="fill-gray-500 text-[8px] font-mono">RESILIENCE</text>
        
        {/* Circuit breaker */}
        <g className="fill-amber-100 stroke-amber-500" strokeWidth="1">
          <rect x="280" y="50" width="45" height="35" rx="4" />
        </g>
        <text x="302" y="72" className="fill-amber-600 text-[7px] font-mono" textAnchor="middle">CIRCUIT</text>
        
        {/* Dead letter queue */}
        <g className="fill-red-50 stroke-red-400" strokeWidth="1">
          <rect x="280" y="100" width="45" height="35" rx="4" />
        </g>
        <text x="302" y="122" className="fill-red-500 text-[7px] font-mono" textAnchor="middle">DLQ</text>
      </g>

      {/* Output flow */}
      <g className="text-accent-electric" stroke="currentColor" strokeWidth={visualStroke.accent} fill="none" strokeLinecap="round" opacity={visualOpacity.accent}>
        <path d="M 255 72 L 280 67" />
        <path d="M 325 67 L 360 67" />
        <path d="M 325 117 L 360 117 L 360 92" />
      </g>

      {/* Output */}
      <g>
        <text x="365" y="50" className="fill-gray-500 text-[8px] font-mono">OUTPUT</text>
        <g className="fill-accent-electric/15 stroke-accent-electric" strokeWidth="1.5">
          <rect x="360" y="58" width="40" height="45" rx="6" />
        </g>
        <text x="380" y="78" className="fill-accent-electric text-[8px] font-medium" textAnchor="middle">API</text>
        <text x="380" y="92" className="fill-accent-electric text-[7px] font-mono" textAnchor="middle">→ 180ms</text>
      </g>
    </>
  );
}

/**
 * Telecom Edge Processing - Shows edge/cloud split with latency paths
 */
function TelecomEdgeProcessing({ framed }: { framed: boolean }): ReactElement {
  return (
    <>
      {framed && (
        <g className={frameStyles} strokeWidth={visualStroke.hairline} opacity={visualOpacity.frame} fill="none">
          <rect x="10" y="10" width="400" height="160" rx={visualRadius.md} />
        </g>
      )}

      {/* Grid */}
      <g className={mutedStyles} strokeWidth={visualStroke.hairline} opacity={0.15}>
        <line x1="210" y1="20" x2="210" y2="160" strokeDasharray="3 3" />
      </g>

      {/* Edge zone label */}
      <text x="100" y="25" className="fill-emerald-600 text-[9px] font-semibold" textAnchor="middle">EDGE ZONE</text>
      
      {/* Cloud zone label */}
      <text x="320" y="25" className="fill-blue-600 text-[9px] font-semibold" textAnchor="middle">CLOUD ZONE</text>

      {/* Vehicles (input) */}
      <g>
        <text x="35" y="50" className="fill-gray-500 text-[7px] font-mono">V2X</text>
        {[60, 90, 120].map((y, i) => (
          <g key={y}>
            <rect x="25" y={y} width="30" height="18" rx="3" className="fill-gray-100 stroke-gray-400" strokeWidth="1" />
            <text x="40" y={y + 12} className="fill-gray-600 text-[6px] font-mono" textAnchor="middle">CAR{i + 1}</text>
          </g>
        ))}
      </g>

      {/* Edge flow */}
      <g className="text-emerald-500" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round">
        <path d="M 55 69 L 85 69" />
        <path d="M 55 99 L 85 99" />
        <path d="M 55 129 L 85 129" />
      </g>

      {/* Edge compute node */}
      <g>
        <rect x="85" y="50" width="55" height="95" rx="6" className="fill-emerald-50 stroke-emerald-500" strokeWidth="1.5" />
        <text x="112" y="70" className="fill-emerald-700 text-[8px] font-semibold" textAnchor="middle">EDGE</text>
        <text x="112" y="82" className="fill-emerald-600 text-[7px] font-mono" textAnchor="middle">COMPUTE</text>
        
        {/* Latency indicator */}
        <rect x="92" y="95" width="40" height="18" rx="3" className="fill-emerald-100 stroke-emerald-400" strokeWidth="1" />
        <text x="112" y="107" className="fill-emerald-700 text-[7px] font-bold" textAnchor="middle">&lt;8ms</text>
        
        {/* Redis state */}
        <rect x="95" y="120" width="35" height="15" rx="2" className="fill-red-50 stroke-red-400" strokeWidth="1" />
        <text x="112" y="131" className="fill-red-600 text-[6px] font-mono" textAnchor="middle">REDIS</text>
      </g>

      {/* Critical path (stays at edge) */}
      <g className="text-emerald-500" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.8">
        <path d="M 140 75 L 175 75" />
        <polygon points="170,71 178,75 170,79" fill="currentColor" />
      </g>

      {/* Safety response */}
      <g>
        <rect x="175" y="55" width="30" height="40" rx="4" className="fill-emerald-100 stroke-emerald-600" strokeWidth="1.5" />
        <text x="190" y="72" className="fill-emerald-700 text-[6px] font-bold" textAnchor="middle">SAFE</text>
        <text x="190" y="82" className="fill-emerald-700 text-[6px] font-bold" textAnchor="middle">RSP</text>
      </g>

      {/* Async sync to cloud */}
      <g className={strongStyles} strokeWidth="1" fill="none" strokeLinecap="round" strokeDasharray="4 2">
        <path d="M 140 130 L 230 130" />
      </g>
      <text x="185" y="145" className="fill-gray-400 text-[6px] font-mono" textAnchor="middle">async sync</text>

      {/* Cloud processing */}
      <g>
        <rect x="230" y="45" width="80" height="110" rx="8" className="fill-blue-50 stroke-blue-400" strokeWidth="1" />
        <text x="270" y="65" className="fill-blue-700 text-[8px] font-semibold" textAnchor="middle">CLOUD</text>
        
        {/* Analytics box */}
        <rect x="240" y="75" width="60" height="25" rx="3" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
        <text x="270" y="91" className="fill-blue-600 text-[7px] font-mono" textAnchor="middle">ANALYTICS</text>
        
        {/* ML box */}
        <rect x="240" y="110" width="60" height="25" rx="3" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
        <text x="270" y="126" className="fill-purple-600 text-[7px] font-mono" textAnchor="middle">ML MODELS</text>
      </g>

      {/* Output */}
      <g>
        <rect x="340" y="70" width="55" height="45" rx="6" className="fill-accent-electric/15 stroke-accent-electric" strokeWidth="1.5" />
        <text x="367" y="90" className="fill-accent-electric text-[8px] font-semibold" textAnchor="middle">99.99%</text>
        <text x="367" y="103" className="fill-accent-electric text-[7px] font-mono" textAnchor="middle">UPTIME</text>
      </g>

      <g className="text-accent-electric" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6">
        <path d="M 310 92 L 340 92" />
      </g>
    </>
  );
}

/**
 * Analytics Pipeline - Shows staged transforms with incremental processing
 */
function AnalyticsPipeline({ framed }: { framed: boolean }): ReactElement {
  return (
    <>
      {framed && (
        <g className={frameStyles} strokeWidth={visualStroke.hairline} opacity={visualOpacity.frame} fill="none">
          <rect x="10" y="10" width="400" height="160" rx={visualRadius.md} />
        </g>
      )}

      {/* Time axis */}
      <g className={mutedStyles} strokeWidth="1" opacity="0.3">
        <line x1="30" y1="155" x2="390" y2="155" />
        <text x="210" y="168" className="fill-gray-400 text-[7px] font-mono" textAnchor="middle">TIME →</text>
      </g>

      {/* Before label */}
      <text x="90" y="25" className="fill-red-500 text-[8px] font-semibold" textAnchor="middle">BEFORE: ~4h</text>
      
      {/* After label */}
      <text x="310" y="25" className="fill-emerald-600 text-[8px] font-semibold" textAnchor="middle">AFTER: ~35min</text>

      {/* Divider */}
      <line x1="200" y1="30" x2="200" y2="145" className="stroke-gray-300" strokeWidth="1" strokeDasharray="4 4" />

      {/* Before: monolithic nested query */}
      <g>
        <rect x="30" y="40" width="150" height="100" rx="6" className="fill-red-50 stroke-red-300" strokeWidth="1" />
        <text x="105" y="58" className="fill-red-600 text-[7px] font-mono" textAnchor="middle">MONOLITHIC QUERY</text>
        
        {/* Nested structure */}
        <rect x="40" y="65" width="130" height="65" rx="3" className="fill-red-100 stroke-red-300" strokeWidth="1" strokeDasharray="2 2" />
        <rect x="50" y="75" width="110" height="45" rx="3" className="fill-red-100 stroke-red-300" strokeWidth="1" strokeDasharray="2 2" />
        <rect x="60" y="85" width="90" height="25" rx="3" className="fill-red-200 stroke-red-400" strokeWidth="1" />
        <text x="105" y="101" className="fill-red-600 text-[6px] font-mono" textAnchor="middle">NESTED JOINS</text>
      </g>

      {/* After: staged transforms */}
      <g>
        {/* Stage 1: Ingest */}
        <rect x="220" y="40" width="50" height="30" rx="4" className="fill-emerald-100 stroke-emerald-500" strokeWidth="1" />
        <text x="245" y="58" className="fill-emerald-700 text-[7px] font-mono" textAnchor="middle">INGEST</text>

        {/* Stage 2: Transform */}
        <rect x="220" y="80" width="50" height="30" rx="4" className="fill-emerald-100 stroke-emerald-500" strokeWidth="1" />
        <text x="245" y="98" className="fill-emerald-700 text-[7px] font-mono" textAnchor="middle">STAGE 1</text>

        {/* Stage 3: Materialize */}
        <rect x="220" y="120" width="50" height="30" rx="4" className="fill-emerald-100 stroke-emerald-500" strokeWidth="1" />
        <text x="245" y="138" className="fill-emerald-700 text-[7px] font-mono" textAnchor="middle">STAGE 2</text>

        {/* Arrows between stages */}
        <g className="text-emerald-500" stroke="currentColor" strokeWidth="1.5" fill="none">
          <path d="M 245 70 L 245 80" />
          <path d="M 245 110 L 245 120" />
        </g>

        {/* Incremental indicator */}
        <g className="text-accent-electric">
          <rect x="280" y="75" width="45" height="40" rx="4" className="fill-accent-electric/10 stroke-accent-electric" strokeWidth="1" />
          <text x="302" y="92" className="fill-accent-electric text-[6px] font-bold" textAnchor="middle">INCR</text>
          <text x="302" y="103" className="fill-accent-electric text-[6px] font-mono" textAnchor="middle">Δ ONLY</text>
        </g>

        {/* Output */}
        <rect x="340" y="55" width="55" height="50" rx="6" className="fill-accent-electric/15 stroke-accent-electric" strokeWidth="1.5" />
        <text x="367" y="75" className="fill-accent-electric text-[8px] font-semibold" textAnchor="middle">&lt;5s</text>
        <text x="367" y="88" className="fill-accent-electric text-[7px] font-mono" textAnchor="middle">queries</text>
      </g>

      {/* Flow arrows */}
      <g className="text-accent-electric" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7">
        <path d="M 270 95 L 280 95" />
        <path d="M 325 95 L 340 80" />
      </g>
    </>
  );
}

/**
 * Demand Forecasting - Shows ML pipeline with feature store
 */
function DemandForecasting({ framed }: { framed: boolean }): ReactElement {
  return (
    <>
      {framed && (
        <g className={frameStyles} strokeWidth={visualStroke.hairline} opacity={visualOpacity.frame} fill="none">
          <rect x="10" y="10" width="400" height="160" rx={visualRadius.md} />
        </g>
      )}

      {/* Data sources */}
      <g>
        <text x="45" y="30" className="fill-gray-500 text-[7px] font-mono">DATA SOURCES</text>
        
        <rect x="25" y="40" width="45" height="25" rx="3" className="fill-gray-100 stroke-gray-400" strokeWidth="1" />
        <text x="47" y="56" className="fill-gray-600 text-[6px] font-mono" textAnchor="middle">SALES</text>
        
        <rect x="25" y="75" width="45" height="25" rx="3" className="fill-gray-100 stroke-gray-400" strokeWidth="1" />
        <text x="47" y="91" className="fill-gray-600 text-[6px] font-mono" textAnchor="middle">INVENTORY</text>
        
        <rect x="25" y="110" width="45" height="25" rx="3" className="fill-gray-100 stroke-gray-400" strokeWidth="1" />
        <text x="47" y="126" className="fill-gray-600 text-[6px] font-mono" textAnchor="middle">SEASONAL</text>
      </g>

      {/* Flow to feature store */}
      <g className={strongStyles} strokeWidth="1" fill="none" strokeLinecap="round">
        <path d="M 70 52 L 100 70" />
        <path d="M 70 87 L 100 87" />
        <path d="M 70 122 L 100 105" />
      </g>

      {/* Feature Store */}
      <g>
        <rect x="100" y="50" width="65" height="75" rx="6" className="fill-purple-50 stroke-purple-400" strokeWidth="1.5" />
        <text x="132" y="70" className="fill-purple-700 text-[8px] font-semibold" textAnchor="middle">FEATURE</text>
        <text x="132" y="82" className="fill-purple-700 text-[8px] font-semibold" textAnchor="middle">STORE</text>
        
        {/* Feature rows */}
        <rect x="108" y="90" width="50" height="10" rx="2" className="fill-purple-100 stroke-purple-300" strokeWidth="1" />
        <rect x="108" y="105" width="50" height="10" rx="2" className="fill-purple-100 stroke-purple-300" strokeWidth="1" />
      </g>

      {/* ML Model */}
      <g>
        <rect x="185" y="45" width="70" height="85" rx="8" className="fill-amber-50 stroke-amber-500" strokeWidth="1.5" />
        <text x="220" y="65" className="fill-amber-700 text-[8px] font-semibold" textAnchor="middle">ML MODEL</text>
        
        {/* XGBoost indicator */}
        <rect x="195" y="75" width="50" height="20" rx="3" className="fill-amber-100 stroke-amber-400" strokeWidth="1" />
        <text x="220" y="89" className="fill-amber-600 text-[7px] font-mono" textAnchor="middle">XGBoost</text>
        
        {/* Retraining */}
        <rect x="195" y="100" width="50" height="20" rx="3" className="fill-green-100 stroke-green-400" strokeWidth="1" />
        <text x="220" y="114" className="fill-green-600 text-[6px] font-mono" textAnchor="middle">AUTO-TRAIN</text>
      </g>

      {/* Arrow to model */}
      <g className="text-purple-500" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round">
        <path d="M 165 87 L 185 87" />
      </g>

      {/* Explainability */}
      <g>
        <rect x="275" y="50" width="55" height="40" rx="5" className="fill-blue-50 stroke-blue-400" strokeWidth="1" />
        <text x="302" y="68" className="fill-blue-600 text-[7px] font-semibold" textAnchor="middle">EXPLAIN</text>
        <text x="302" y="80" className="fill-blue-500 text-[6px] font-mono" textAnchor="middle">WHY?</text>
      </g>

      {/* Arrow to explainability */}
      <g className="text-amber-500" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round">
        <path d="M 255 70 L 275 70" />
      </g>

      {/* Output metrics */}
      <g>
        <rect x="345" y="35" width="55" height="55" rx="6" className="fill-accent-electric/15 stroke-accent-electric" strokeWidth="1.5" />
        <text x="372" y="55" className="fill-accent-electric text-[9px] font-bold" textAnchor="middle">-15%</text>
        <text x="372" y="68" className="fill-accent-electric text-[6px] font-mono" textAnchor="middle">overstock</text>
        <text x="372" y="82" className="fill-emerald-600 text-[8px] font-bold" textAnchor="middle">+8%</text>
      </g>

      {/* Arrow to output */}
      <g className="text-accent-electric" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7">
        <path d="M 330 70 L 345 62" />
      </g>

      {/* Buyer dashboard */}
      <g>
        <rect x="275" y="105" width="80" height="40" rx="5" className="fill-gray-100 stroke-gray-400" strokeWidth="1" />
        <text x="315" y="122" className="fill-gray-600 text-[7px] font-mono" textAnchor="middle">BUYER DASHBOARD</text>
        <text x="315" y="136" className="fill-emerald-600 text-[8px] font-bold" textAnchor="middle">92% adoption</text>
      </g>

      <g className="text-amber-500" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeDasharray="3 2">
        <path d="M 255 100 L 275 115" />
      </g>
    </>
  );
}

/**
 * Constrained Generation - Shows RAG pipeline with constraints
 */
function ConstrainedGeneration({ framed }: { framed: boolean }): ReactElement {
  return (
    <>
      {framed && (
        <g className={frameStyles} strokeWidth={visualStroke.hairline} opacity={visualOpacity.frame} fill="none">
          <rect x="10" y="10" width="400" height="160" rx={visualRadius.md} />
        </g>
      )}

      {/* User input */}
      <g>
        <text x="40" y="30" className="fill-gray-500 text-[7px] font-mono">INPUT</text>
        <rect x="25" y="40" width="40" height="50" rx="6" className="fill-gray-100 stroke-gray-400" strokeWidth="1" />
        <text x="45" y="60" className="fill-gray-600 text-[8px]" textAnchor="middle">👤</text>
        <text x="45" y="78" className="fill-gray-600 text-[6px] font-mono" textAnchor="middle">USER</text>
      </g>

      {/* Query flow */}
      <g className={strongStyles} strokeWidth="1.5" fill="none" strokeLinecap="round">
        <path d="M 65 65 L 90 65" />
      </g>

      {/* Retrieval */}
      <g>
        <rect x="90" y="35" width="60" height="60" rx="6" className="fill-purple-50 stroke-purple-400" strokeWidth="1.5" />
        <text x="120" y="55" className="fill-purple-700 text-[8px] font-semibold" textAnchor="middle">RETRIEVE</text>
        
        {/* Vector DB */}
        <rect x="100" y="62" width="40" height="22" rx="3" className="fill-purple-100 stroke-purple-300" strokeWidth="1" />
        <text x="120" y="76" className="fill-purple-600 text-[6px] font-mono" textAnchor="middle">Pinecone</text>
      </g>

      {/* Corpus */}
      <g>
        <rect x="95" y="105" width="50" height="35" rx="4" className="fill-blue-50 stroke-blue-400" strokeWidth="1" />
        <text x="120" y="120" className="fill-blue-600 text-[7px] font-mono" textAnchor="middle">CORPUS</text>
        <text x="120" y="132" className="fill-blue-500 text-[6px] font-mono" textAnchor="middle">curated</text>
      </g>

      <g className="text-purple-400" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="2 2">
        <path d="M 120 95 L 120 105" />
      </g>

      {/* LLM */}
      <g>
        <rect x="170" y="30" width="70" height="70" rx="8" className="fill-emerald-50 stroke-emerald-500" strokeWidth="1.5" />
        <text x="205" y="52" className="fill-emerald-700 text-[9px] font-bold" textAnchor="middle">LLM</text>
        <text x="205" y="65" className="fill-emerald-600 text-[7px] font-mono" textAnchor="middle">Vertex AI</text>
        
        {/* Context window indicator */}
        <rect x="180" y="72" width="50" height="18" rx="2" className="fill-emerald-100 stroke-emerald-300" strokeWidth="1" />
        <text x="205" y="84" className="fill-emerald-600 text-[6px] font-mono" textAnchor="middle">+ context</text>
      </g>

      {/* Arrow to LLM */}
      <g className="text-purple-500" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round">
        <path d="M 150 65 L 170 65" />
      </g>

      {/* Constraint layer */}
      <g>
        <rect x="260" y="25" width="65" height="80" rx="6" className="fill-red-50 stroke-red-400" strokeWidth="1.5" />
        <text x="292" y="42" className="fill-red-600 text-[7px] font-bold" textAnchor="middle">CONSTRAINTS</text>
        
        {/* Constraint rules */}
        <rect x="268" y="50" width="50" height="15" rx="2" className="fill-red-100 stroke-red-300" strokeWidth="1" />
        <text x="293" y="61" className="fill-red-600 text-[6px] font-mono" textAnchor="middle">RULES ✓</text>
        
        <rect x="268" y="70" width="50" height="15" rx="2" className="fill-red-100 stroke-red-300" strokeWidth="1" />
        <text x="293" y="81" className="fill-red-600 text-[6px] font-mono" textAnchor="middle">SAFE ✓</text>
        
        <rect x="268" y="90" width="50" height="15" rx="2" className="fill-red-100 stroke-red-300" strokeWidth="1" />
        <text x="293" y="101" className="fill-red-600 text-[6px] font-mono" textAnchor="middle">STRUCT ✓</text>
      </g>

      {/* Arrow to constraints */}
      <g className="text-emerald-500" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round">
        <path d="M 240 65 L 260 65" />
      </g>

      {/* Output */}
      <g>
        <rect x="345" y="35" width="55" height="60" rx="6" className="fill-accent-electric/15 stroke-accent-electric" strokeWidth="1.5" />
        <text x="372" y="55" className="fill-accent-electric text-[8px] font-bold" textAnchor="middle">-80%</text>
        <text x="372" y="68" className="fill-accent-electric text-[6px] font-mono" textAnchor="middle">failures</text>
        <text x="372" y="85" className="fill-emerald-600 text-[7px] font-semibold" textAnchor="middle">&lt;3s</text>
      </g>

      {/* Arrow to output */}
      <g className="text-accent-electric" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8">
        <path d="M 325 65 L 345 55" />
      </g>

      {/* Feedback loop */}
      <g className={mutedStyles} strokeWidth="1" fill="none" strokeDasharray="3 2" opacity="0.4">
        <path d="M 372 95 L 372 145 L 45 145 L 45 90" />
      </g>
      <text x="210" y="155" className="fill-gray-400 text-[6px] font-mono" textAnchor="middle">feedback loop</text>
    </>
  );
}

/**
 * Clinical Workflow - Shows unified intake with EMR integration
 */
function ClinicalWorkflow({ framed }: { framed: boolean }): ReactElement {
  return (
    <>
      {framed && (
        <g className={frameStyles} strokeWidth={visualStroke.hairline} opacity={visualOpacity.frame} fill="none">
          <rect x="10" y="10" width="400" height="160" rx={visualRadius.md} />
        </g>
      )}

      {/* Before section */}
      <text x="75" y="25" className="fill-red-500 text-[8px] font-semibold" textAnchor="middle">BEFORE: 25 min</text>
      
      {/* After section */}
      <text x="305" y="25" className="fill-emerald-600 text-[8px] font-semibold" textAnchor="middle">AFTER: 10 min</text>

      {/* Divider */}
      <line x1="175" y1="30" x2="175" y2="155" className="stroke-gray-300" strokeWidth="1" strokeDasharray="4 4" />

      {/* Before: Fragmented systems */}
      <g>
        <rect x="25" y="40" width="45" height="30" rx="4" className="fill-red-50 stroke-red-300" strokeWidth="1" />
        <text x="47" y="58" className="fill-red-600 text-[6px] font-mono" textAnchor="middle">PAPER</text>

        <rect x="80" y="40" width="45" height="30" rx="4" className="fill-red-50 stroke-red-300" strokeWidth="1" />
        <text x="102" y="58" className="fill-red-600 text-[6px] font-mono" textAnchor="middle">EMR</text>

        <rect x="135" y="40" width="35" height="30" rx="4" className="fill-red-50 stroke-red-300" strokeWidth="1" />
        <text x="152" y="58" className="fill-red-600 text-[6px] font-mono" textAnchor="middle">XLS</text>

        {/* Manual data entry person */}
        <rect x="55" y="90" width="70" height="40" rx="6" className="fill-gray-100 stroke-gray-400" strokeWidth="1" />
        <text x="90" y="108" className="fill-gray-600 text-[8px]" textAnchor="middle">👩‍💼</text>
        <text x="90" y="122" className="fill-gray-600 text-[6px] font-mono" textAnchor="middle">MANUAL ENTRY</text>

        {/* Arrows showing manual work */}
        <g className="stroke-red-300" strokeWidth="1" fill="none" strokeDasharray="2 2">
          <path d="M 47 70 L 70 90" />
          <path d="M 102 70 L 90 90" />
          <path d="M 152 70 L 110 90" />
        </g>
      </g>

      {/* After: Unified platform */}
      <g>
        {/* Data sources */}
        <g>
          <rect x="195" y="35" width="40" height="25" rx="3" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
          <text x="215" y="51" className="fill-blue-600 text-[6px] font-mono" textAnchor="middle">FHIR</text>

          <rect x="195" y="65" width="40" height="25" rx="3" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
          <text x="215" y="81" className="fill-blue-600 text-[6px] font-mono" textAnchor="middle">EMR</text>

          <rect x="195" y="95" width="40" height="25" rx="3" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
          <text x="215" y="111" className="fill-blue-600 text-[6px] font-mono" textAnchor="middle">HISTORY</text>
        </g>

        {/* Unified platform */}
        <rect x="255" y="40" width="75" height="90" rx="8" className="fill-emerald-50 stroke-emerald-500" strokeWidth="1.5" />
        <text x="292" y="60" className="fill-emerald-700 text-[8px] font-semibold" textAnchor="middle">UNIFIED</text>
        <text x="292" y="72" className="fill-emerald-700 text-[8px] font-semibold" textAnchor="middle">INTAKE</text>

        {/* Features */}
        <rect x="263" y="80" width="60" height="15" rx="2" className="fill-emerald-100 stroke-emerald-300" strokeWidth="1" />
        <text x="293" y="91" className="fill-emerald-600 text-[6px] font-mono" textAnchor="middle">PRE-FILL ✓</text>

        <rect x="263" y="100" width="60" height="15" rx="2" className="fill-emerald-100 stroke-emerald-300" strokeWidth="1" />
        <text x="293" y="111" className="fill-emerald-600 text-[6px] font-mono" textAnchor="middle">AUDIT ✓</text>

        {/* Arrows to platform */}
        <g className="text-blue-400" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round">
          <path d="M 235 47 L 255 55" />
          <path d="M 235 77 L 255 77" />
          <path d="M 235 107 L 255 100" />
        </g>
      </g>

      {/* Output metrics */}
      <g>
        <rect x="350" y="50" width="50" height="55" rx="6" className="fill-accent-electric/15 stroke-accent-electric" strokeWidth="1.5" />
        <text x="375" y="68" className="fill-accent-electric text-[8px] font-bold" textAnchor="middle">-60%</text>
        <text x="375" y="80" className="fill-accent-electric text-[6px] font-mono" textAnchor="middle">time</text>
        <text x="375" y="95" className="fill-emerald-600 text-[7px] font-semibold" textAnchor="middle">-70% err</text>
      </g>

      {/* Arrow to output */}
      <g className="text-accent-electric" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8">
        <path d="M 330 77 L 350 77" />
      </g>

      {/* Staff adoption */}
      <g>
        <rect x="275" y="140" width="80" height="20" rx="4" className="fill-gray-100 stroke-gray-300" strokeWidth="1" />
        <text x="315" y="154" className="fill-emerald-600 text-[7px] font-semibold" textAnchor="middle">95% adoption in 2 wks</text>
      </g>
    </>
  );
}

/**
 * Fallback generic diagram
 */
function GenericDiagram({ framed }: { framed: boolean }): ReactElement {
  return (
    <>
      {framed && (
        <g className={frameStyles} strokeWidth={visualStroke.hairline} opacity={visualOpacity.frame} fill="none">
          <rect x="10" y="10" width="400" height="160" rx={visualRadius.md} />
        </g>
      )}

      {/* Simple flow */}
      <g className={strongStyles} strokeWidth={visualStroke.thin} fill="none" strokeLinecap="round">
        <path d="M 50 90 L 150 90 L 200 60 L 300 60 L 350 90" />
        <path d="M 200 60 L 200 120 L 300 120 L 350 90" />
      </g>

      {/* Nodes */}
      <g className={cn("fill-white", strongStyles)} strokeWidth={visualStroke.thin}>
        <circle cx="50" cy="90" r="8" />
        <circle cx="150" cy="90" r="8" />
        <circle cx="200" cy="60" r="10" />
        <circle cx="300" cy="60" r="8" />
        <circle cx="200" cy="120" r="8" />
        <circle cx="300" cy="120" r="8" />
        <circle cx="350" cy="90" r="10" />
      </g>

      {/* Accent highlights */}
      <g className="fill-accent-electric" opacity={visualOpacity.accentStrong}>
        <circle cx="200" cy="60" r="4" />
        <circle cx="350" cy="90" r="4" />
      </g>
    </>
  );
}

/**
 * CaseStudyDiagram
 * Renders a case-study-specific system architecture diagram.
 */
export function CaseStudyDiagram({
  slug,
  className,
  framed = true,
}: CaseStudyDiagramProps): ReactElement {
  const DiagramComponent = {
    "logistics-event-mesh": LogisticsEventMesh,
    "telecom-edge-processing": TelecomEdgeProcessing,
    "analytics-pipeline-modernisation": AnalyticsPipeline,
    "demand-forecasting-system": DemandForecasting,
    "constrained-generation-product": ConstrainedGeneration,
    "clinical-workflow-platform": ClinicalWorkflow,
  }[slug] ?? GenericDiagram;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 420 180"
      className={cn("h-full w-full", className)}
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
    >
      <DiagramComponent framed={framed} />
    </svg>
  );
}
