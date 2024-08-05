import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [threads, setThreads] = useState([]);
  const fetchThreads = async () => {
    const response = await fetch(
      "https://railway.bulletinboard.techtrain.dev/threads"
    );
    setThreads(await response.json());
  };

  useEffect(() => {
    fetchThreads();
  }, []);

  return (
    <>
      <div className="main_container">
        <div className="threads_countainer">
          <h2 className="thread_title">新着スレッド</h2>
          {threads.map((thread, index) => {
            return (
              <div key={index} className="thread">
                {thread.title}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
