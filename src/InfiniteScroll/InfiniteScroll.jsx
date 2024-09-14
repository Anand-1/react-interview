import React, { useCallback, useEffect, useRef, useState } from "react";
import "./styles.css";
import ContentPage from "./ContentPage";
import SectionHeader from "../Common/SectionHeader/SectionHeader";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  let limitNumber = useRef(30);

  const getData = useCallback(() => {
    return new Promise((res, rej) => {
      fetch(
        "https://jsonplaceholder.typicode.com/posts?" +
          new URLSearchParams({ _limit: limitNumber, _page: pageNumber })
      )
        .then((data) => data.json())
        .then((data) => {
          setData((prevData) => [...prevData, ...data]);
        });
    });
  }, []);

  const handleInfiniteScroll = async () => {
    // console.log("scrollheigt" + document.documentElement.scrollHeight);
    // console.log("Innerheight " + window.innerHeight);
    // console.log("scrolltop" + document.documentElement.scrollTop);
    if (
      window.innerHeight + document.documentElement.scrollTop + 10 >
      document.documentElement.scrollHeight
    ) {
      setPageNumber((prev) => prev + 1);
      getData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <>
      <div className="main-section">
        <SectionHeader data={"Infinite Scroll"} />
        <ContentPage getData={getData} data={data} />
      </div>
    </>
  );
};

export default InfiniteScroll;
