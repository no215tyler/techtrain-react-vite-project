import { useEffect, useState } from "react";
import classes from "../styles/Threads.module.css";
import { useLocation } from "react-router-dom";

const Threads = () => {
  const location = useLocation();
  console.log(`スレタイ: ${location.state.thread.title}`);
  console.log(location);
  const [comment, setComment] = useState({ posts: ["Loading..."] });
  const fetchTread = async () => {
    const response = await fetch(
      `https://railway.bulletinboard.techtrain.dev/threads/${location.state.thread.id}/posts`
    );
    const threadData = await response.json();
    setComment(threadData);
    console.log(threadData);
  };

  useEffect(() => {
    fetchTread();
  }, []);
  return (
    <>
      <div className={classes.header_title}>Threads</div>
      <div className={classes.threadWrapper}>{location.state.thread.title}</div>
      {comment.posts.map((post, index) => {
        return <div key={index}>{post.post}</div>;
      })}
    </>
  );
};

export default Threads;
