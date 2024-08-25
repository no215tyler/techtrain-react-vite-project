import { useEffect, useState } from "react";
import classes from "../styles/Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [threads, setThreads] = useState([{ title: "Loading..." }]);
  const [err, setErr] = useState(null);
  const fetchThreads = async () => {
    try {
      const response = await fetch(
        "https://railway.bulletinboard.techtrain.dev/threads"
      );
      if (!response.ok) {
        throw new Error(`HTTPエラー status: ${response.status}`);
      }
      setThreads(await response.json());
    } catch (error) {
      console.log(error.message);
      setErr([`サーバーレスポンスエラー: ${error.message}`]);
    }
  };

  useEffect(() => {
    fetchThreads();
  }, []);

  return (
    <>
      <div className={classes.main_container}>
        <div className={classes.threads_countainer}>
          <h2 className={classes.thread_title}>新着スレッド</h2>
          {err ? (
            <div>{err}</div>
          ) : (
            threads.map((thread, index) => {
              return (
                <div key={index} className={classes.thread}>
                  <Link
                    to={`/threads/${thread.id}`}
                    className={classes.threadTitleColor}
                    state={{ thread }}
                  >
                    {thread.title}
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
