import React, { useState, useEffect } from "react";

export default function ImproperStateManagement() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data));

    // Missing cleanup
    return () => setData(null);
  }, []);

  return (
    <div>
      {data
        ? data.map((item) => <div key={item.id}>{item.title}</div>)
        : "Loading..."}
    </div>
  );
}
