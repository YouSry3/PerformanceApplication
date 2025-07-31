import React from "react";

interface ChartCycleProps {
  value: number; // من 0 لـ 100
}

const ChartCycle: React.FC<ChartCycleProps> = ({ value }) => {
  const radius = 90;
  const stroke = 12;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2} style={{ display: "block", margin: "auto" }}>
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4facfe" />
          <stop offset="100%" stopColor="#00f2fe" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0d6efd" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* خلفية الدائرة */}
      <circle
        stroke="#e6e6e6"
        fill="none"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />

      {/* دايرة التعبئة */}
      <circle
        stroke="url(#grad)"
        fill="none"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={strokeDashoffset}
        style={{
          transition: "stroke-dashoffset 0.7s ease-out",
          filter: "url(#shadow)",
          transform: "rotate(-90deg)",
          transformOrigin: "50% 50%",
        }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />

      {/* الرقم في الوسط */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="36"
        fill="#0d6efd"
        fontWeight="700"
        fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      >
        {value}%
      </text>

      {/* خط رفيع تحت الرقم */}
      <line
        x1="50%"
        y1={radius + 20}
        x2="50%"
        y2={radius + 30}
        stroke="#0d6efd"
        strokeWidth="3"
        style={{ transform: "translateX(-50%)" }}
      />
    </svg>
  );
};

export default ChartCycle;
