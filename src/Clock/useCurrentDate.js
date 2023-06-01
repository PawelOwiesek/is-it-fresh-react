import { useState, useEffect } from "react";

export const useCurrentDate = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intevalID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intevalID);
    };
  }, []);
  return time;
};
