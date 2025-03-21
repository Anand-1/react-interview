import React, { useEffect, useRef, useState, useCallback } from "react";
import SectionHeader from "../Common/SectionHeader/SectionHeader";
const Test = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadMorePosts(page, 10);
  }, [page]);
  const observer = useRef();
  const lastPostElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        console.log(entries);
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1); // trigger loading of new posts by chaging page no
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading]
  );
  const fetchPosts = async (page, limit) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    );
    const data = await response.json();
    return data;
  };
  const loadMorePosts = async () => {
    setLoading(true);
    const newPosts = await fetchPosts(page, 10);
    setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    setLoading(false);
  };

  useEffect(() => {
    loadMorePosts();
  }, [page]);
  return (
    <div>
      <SectionHeader data={"Test"} />
      <div>Test</div>
      <div>
        {posts.map((item, index) => {
          return (
            <div
              key={index}
              ref={posts.length === index + 1 ? lastPostElementRef : null}
            >
              {item.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Test;
