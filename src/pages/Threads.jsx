import { useEffect, useState } from "react";
import classes from "../styles/Threads.module.css";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Threads = () => {
  const location = useLocation();
  const [comment, setComment] = useState({ posts: ["Loading..."] });
  const [addComment, setAddComment] = useState("");
  const fetchTread = async () => {
    const response = await fetch(
      `https://railway.bulletinboard.techtrain.dev/threads/${location.state.thread.id}/posts`
    );
    const threadData = await response.json();
    setComment(threadData);
  };

  const postComment = async () => {
    if (addComment == "") {
      alert("送信するには文字の入力が必要です。");
      return;
    }
    try {
      const response = await fetch(
        `https://railway.bulletinboard.techtrain.dev/threads/${location.state.thread.id}/posts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ post: addComment }),
        }
      );
      if (!response.ok) {
        throw new Error("レスポンスエラー");
      }

      setAddComment("");
      fetchTread();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchTread();
  }, []);
  return (
    <>
      <Helmet>
        <title>{`Railway React掲示板｜${location.state.thread.title}`}</title>
      </Helmet>
      <div className={classes.threadWrapper}>
        <div className={classes.commentWrapper}>
          <div className={classes.threadTitle}>
            {location.state.thread.title}
          </div>
          {comment.posts.map((post, index) => {
            return (
              <div key={index} className={classes.comment}>
                {`> ${post.post}`}
              </div>
            );
          })}
        </div>
        <div className={classes.postComment}>
          <textarea
            placeholder="投稿しよう！"
            value={addComment}
            id="textarea"
            onChange={(e) => setAddComment(e.target.value)}
          />
          <button
            className={classes.submitButton}
            onClick={() => postComment()}
          >
            投稿
          </button>
        </div>
      </div>
    </>
  );
};

export default Threads;
