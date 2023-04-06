import { useEffect, useState } from "react";

const useCountdown = (countDownTime: number) => {
  const seconds = countDownTime * 1000;
  const [time, setTime] = useState(seconds);
  const [startCountdown, setStartCountdown] = useState(false);

  useEffect(() => {
    if (time > 0 && startCountdown) {
      const interval = setInterval(() => {
        setTime(() => time - 1000);
      }, 1000);
      return () => clearInterval(interval);
    }
    if (time === 0) {
      setStartCountdown(false);
    }
    if (!startCountdown) {
      setTime(seconds);
      setStartCountdown(false);
    }
    return () => {};
  }, [time, startCountdown]);

  return { time, setTime, setStartCountdown, startCountdown };
};

export default useCountdown;
