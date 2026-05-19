import { useEffect, useState } from "react";

export default function Counter({ end, duration = 2500, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Smooth easing (slow start → smooth finish)
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(easedProgress * end);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}