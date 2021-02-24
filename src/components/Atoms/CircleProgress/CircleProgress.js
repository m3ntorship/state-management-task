import React, { useEffect, useState, useRef } from "react";

const CircleProgress = (props) => {
  const {
    size = 72,
    progress = 30,
    strokeWidth = 7,
    backgroundColor = "#fff",
    circleColor = "#FE544A",
  } = props;

  const [offset, setOffset] = useState(0);
  const [offset2, setOffset2] = useState(0);
  const circleRef1 = useRef(null);
  const circleRef2 = useRef(null);
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
    const progressOffset2 = ((100 - (100 - progress)) / 100) * circumference;
    setOffset2(progressOffset2);
    if (circleRef1.current) {
      circleRef1.current.style.transition =
        "stroke-dashoffset 850ms ease-in-out";
      circleRef1.current.style.fill = `${backgroundColor}`;
    }
    if (circleRef2.current) {
      circleRef2.current.style.transition =
        "stroke-dashoffset 850ms ease-in-out";
      circleRef2.current.style.fill = `${backgroundColor}`;
    }
  }, [progress, backgroundColor, circumference]);

  return (
    <div className="absolute bottom-4 right-4 flex">
      <div className="relative mr-m">
        <svg className={`inline-block `} width={size} height={size}>
          <circle
            stroke="none"
            fill="#FE544A"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={4}
          />
          <circle
            ref={circleRef1}
            stroke={circleColor}
            fill="none"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>

        <div className="flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span>👎</span>
          <span>{progress}%</span>
        </div>
      </div>
      <div className="relative">
        <svg className={`inline-block `} width={size} height={size}>
          <circle cx="36" cy="36" r="29" fill="white" />
          <circle
            stroke="none"
            fill="#FE544A"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={4}
          />
          <circle
            ref={circleRef2}
            stroke="#7048E8"
            fill="none"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset2}
          />
        </svg>
        <div className="flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span>👍</span>
          <span>{100 - progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default CircleProgress;
