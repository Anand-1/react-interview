// 2 sections , 1 for data display , 2nd for our pagination bar
// Get Data , display it
// set page state to 1
// slice (page*10-10, page*10)
import React, { useEffect, useState } from "react";
import SectionHeader from "../Common/SectionHeader/SectionHeader";
import ProductCard from "./ProductCard";
const Pagination = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=50`)
      .then((res) => res.json())
      .then((apiData) => setData(apiData.products));
  }, []);

  const selectPagehandler = (selectedPage) => {
    setPage(selectedPage);
  };

  const selectNextPage = () => {
    setPage((page) => page + 1);
  };
  const selectPrevPage = () => {
    setPage((page) => page - 1);
  };
  return !data.length ? (
    <>
      <h1>No pages to display</h1>
    </>
  ) : (
    <>
      <SectionHeader data={"Pagination Page"} />
      {data.length > 0 && (
        <div className="pagination" style={{ textAlign: "center" }}>
          <span onClick={() => selectPrevPage()}>⬅️</span>

          {[...Array(Math.ceil(data.length / 10))].map((_, i) => {
            // _ is throwaway
            return (
              <>
                <span key={i} onClick={() => selectPagehandler(i + 1)}>
                  {i + 1}
                </span>
              </>
            );
          })}
          <span onClick={() => selectNextPage()}>➡️</span>
          <span>Page No.{page}</span>
        </div>
      )}
      <div style={{ margin: 50 }}>
        {data &&
          data.slice(page * 10 - 10, page * 10).map((item) => {
            return <ProductCard item={item} />;
          })}
      </div>
    </>
  );
};

export default Pagination;
