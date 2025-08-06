import { useState, useEffect, useRef } from 'react';

const easeOutExpo = (t: number) => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

const useCountUp = (end: number, duration: number, startAnimation: boolean) => {
  const [count, setCount] = useState(0);
  const frameRate = 1000 / 60;
  const totalFrames = Math.round(duration / frameRate);
  const counterRef = useRef<number | null>(null);

  useEffect(() => {
    if (startAnimation) {
      let frame = 0;
      const counter = () => {
        frame++;
        const progress = easeOutExpo(frame / totalFrames);
        const currentCount = Math.round(end * progress);
        setCount(currentCount);

        if (frame < totalFrames) {
          counterRef.current = requestAnimationFrame(counter);
        }
      };
      counterRef.current = requestAnimationFrame(counter);
    }

    return () => {
      if (counterRef.current) {
        cancelAnimationFrame(counterRef.current);
      }
    };
  }, [end, duration, startAnimation, totalFrames]);

  return count;
};

interface CountUpNumberProps {
  end: number;
  duration: number;
  startAnimation: boolean;
  className?: string;
  suffix?: string;
  prefix?: string;
}

export const CountUpNumber = ({ end, duration, startAnimation, className, suffix = '', prefix = '' }: CountUpNumberProps) => {
  const count = useCountUp(end, duration, startAnimation);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      const thousands = num / 1000;
      return thousands.toFixed(thousands < 10 ? 1 : 0) + 'K';
    }
    return num.toString();
  };

  const finalValue = end >= 1000 ? formatNumber(end) : `${prefix}${end.toLocaleString()}${suffix}`;
  const animatedValue = count >= 1000 ? formatNumber(count) : `${prefix}${count.toLocaleString()}${suffix}`;

  if (end < 1000 && end.toString().includes('.')) {
    const decimalCount = useCountUp(end * 100, duration, startAnimation) / 100;
    return <span className={className}>{`${prefix}${decimalCount.toFixed(2)}${suffix}`}</span>;
  }
  
  if (end >= 50000){
      return <span className={className}>{`+${formatNumber(count)}`}</span>
  }

  return <span className={className}>{animatedValue}</span>;
};