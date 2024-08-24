import { useEffect, useState } from "react";
import "../App.css";

const Home = () => {
  const [threads, setThreads] = useState([]);
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
      <div className="main_container">
        <div className="threads_countainer">
          <h2 className="thread_title">新着スレッド</h2>
          {err ? (
            <div>{err}</div>
          ) : (
            threads.map((thread, index) => {
              return (
                <div key={index} className="thread">
                  {thread.title}
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
