import React, { useEffect, useState } from "react";

function improperClosure() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const logCount = () => {
      console.log(`Count: ${count}`);
    };

    window.addEventListener("click", logCount);

    // Missing cleanup
    return () => window.removeEventListener("click", logCount);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default improperClosure;
