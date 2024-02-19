import React, { useEffect, useState } from "react";
//https://www.youtube.com/watch?v=cBsB7hhOzQI
const Pagination = () => {
  const [data, setData] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=100`)
      .then((res) => res.json())
      .then((apiData) => setData(apiData.products));
  }, []);

  const selectPagehandler = (selectedPage) => {
    console.log(selectedPage);
    setPage(selectedPage);
  };
  return (
    <>
      <h1>Pagination Page</h1>
      <div style={{ margin: 50 }}>
        {data &&
          data.slice(page * 10 - 10, page * 10).map((item) => {
            return (
              <div
                style={{ padding: 20, margin: 10, backgroundColor: "gray" }}
                key={item.id}
              >
                {item.description}
              </div>
            );
          })}
      </div>
      {data.length > 0 && (
        <div className="pagination" style={{ textAlign: "center" }}>
          <span onClick={(page) => page + 1}>⬅️</span>
          {[...Array(data.length / 10)].map((_, i) => {
            return (
              <span key={i} onClick={() => selectPagehandler(i + 1)}>
                {i + 1}
              </span>
            );
          })}
          <span onClick={(page) => page - 1}>➡️</span>
          {/* Will be done later */}
        </div>
      )}
    </>
  );
};

export default Pagination;
