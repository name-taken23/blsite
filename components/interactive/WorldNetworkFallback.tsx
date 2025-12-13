"use client";

export default function WorldNetworkFallback() {
  // Strategic global city locations - more geographically accurate
  const cities = [
    { name: "London", cx: 720, cy: 260 },
    { name: "New York", cx: 380, cy: 285 },
    { name: "San Francisco", cx: 220, cy: 290 },
    { name: "Tokyo", cx: 1180, cy: 290 },
    { name: "Singapore", cx: 1080, cy: 400 },
    { name: "Sydney", cx: 1220, cy: 520 },
    { name: "Dubai", cx: 850, cy: 330 },
    { name: "São Paulo", cx: 450, cy: 470 },
  ];

  // Strategic network routes
  const routes = [
    { id: "lon-nyc", from: 0, to: 1, offset: -80 },
    { id: "nyc-sf", from: 1, to: 2, offset: -60 },
    { id: "lon-dubai", from: 0, to: 6, offset: -40 },
    { id: "dubai-sin", from: 6, to: 4, offset: 50 },
    { id: "sin-tok", from: 4, to: 3, offset: -50 },
    { id: "tok-sf", from: 3, to: 2, offset: -120 },
    { id: "sin-syd", from: 4, to: 5, offset: 50 },
    { id: "nyc-sao", from: 1, to: 7, offset: 70 },
  ];

  // Generate smooth bezier curve
  const generatePath = (route: typeof routes[0]) => {
    const from = cities[route.from];
    const to = cities[route.to];
    const midX = (from.cx + to.cx) / 2;
    const midY = (from.cy + to.cy) / 2;
    const dx = to.cx - from.cx;
    const dy = to.cy - from.cy;
    
    const controlX = midX + (-dy * route.offset / 300);
    const controlY = midY + (dx * route.offset / 300);

    return `M ${from.cx} ${from.cy} Q ${controlX} ${controlY} ${to.cx} ${to.cy}`;
  };

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      <svg
        viewBox="100 50 1200 600"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Electric Blue Gradient for Continents */}
          <linearGradient id="continentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4AA6FF" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#4AA6FF" stopOpacity="0.15" />
          </linearGradient>

          {/* Stronger Gradient for Active Elements */}
          <linearGradient id="electricGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4AA6FF" />
            <stop offset="100%" stopColor="#0066CC" />
          </linearGradient>

          {/* Clean Glow Filter */}
          <filter id="cleanGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* World Map Group - Removed as requested */}
        
        {/* Network Lines */}
        {routes.map((route) => (
          <g key={`line-group-${route.id}`}>
            {/* Base Line */}
            <path
              d={generatePath(route)}
              fill="none"
              stroke="#4AA6FF"
              strokeWidth="1"
              strokeOpacity="0.2"
            />
            
            {/* Animated Pulse */}
            <circle r="3" fill="#4AA6FF" filter="url(#cleanGlow)">
              <animateMotion
                dur="4s"
                repeatCount="indefinite"
                path={generatePath(route)}
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
              />
            </circle>
          </g>
        ))}

        {/* Cities */}
        {cities.map((city) => (
          <g key={city.name}>
            {/* Outer Ring */}
            <circle
              cx={city.cx}
              cy={city.cy}
              r="6"
              fill="none"
              stroke="#4AA6FF"
              strokeWidth="1.5"
              opacity="0.6"
            />
            
            {/* Inner Dot */}
            <circle
              cx={city.cx}
              cy={city.cy}
              r="3"
              fill="#4AA6FF"
            />

            {/* Label */}
            <text
              x={city.cx}
              y={city.cy + 20}
              fill="#4AA6FF"
              fontSize="12"
              fontFamily="system-ui, sans-serif"
              fontWeight="500"
              textAnchor="middle"
              opacity="0.8"
            >
              {city.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}