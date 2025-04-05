import React, { useEffect } from "react";

export default function DueToTimer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    // Missing cleanup
    return () => clearInterval(interval);
  }, []);

  return <div>Time: {time}</div>;
}
