import { motion } from 'framer-motion';

interface DonutChartProps {
  percentage: number;
  startAnimation: boolean;
}

export const DonutChart = ({ percentage, startAnimation }: DonutChartProps) => {
  const radius = 50;
  const strokeWidth = 12;
  const innerRadius = radius - strokeWidth;
  const circumference = 2 * Math.PI * innerRadius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-32 h-32">
      <svg className="w-full h-full" viewBox="0 0 120 120">
        <circle
          className="text-bar-track"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={innerRadius}
          cx={radius + strokeWidth/2}
          cy={radius + strokeWidth/2}
        />
        <motion.circle
          className="text-grad-purple-from"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="transparent"
          r={innerRadius}
          cx={radius + strokeWidth/2}
          cy={radius + strokeWidth/2}
          style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: startAnimation ? offset : circumference }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-text-primary">{percentage}%</span>
      </div>
    </div>
  );
};