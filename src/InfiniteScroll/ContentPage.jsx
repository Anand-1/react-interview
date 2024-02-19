import React, { useEffect, useRef, useState } from "react";

const ContentPage = (props) => {
  const { getData, data } = props;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getData().finally(() => {
      setLoading(true);
    });
  }, [getData]);

  return (
    <>
      <h3>Items Page</h3>
      {data &&
        data.map((Item) => {
          return <div key={Item.id}>{Item.title}</div>;
        })}
    </>
  );
};

export default ContentPage;
