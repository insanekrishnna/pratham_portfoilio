"use client";

import { useEffect, useState } from "react";

interface TimeCounterProps {
  className?: string;
}

export function TimeCounter({ className }: TimeCounterProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return <span className={className} suppressHydrationWarning>{formatTime(time)}</span>;
}
