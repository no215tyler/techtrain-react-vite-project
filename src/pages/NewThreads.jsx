import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "/src/index.css";
import classes from "../styles/NewThreads.module.css";
const NewThreads = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const createThreads = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://railway.bulletinboard.techtrain.dev/threads",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      }
    );
    if (response.ok) {
      console.log("スレッド作成完了");
      navigate("/");
    }
  };

  return (
    <div className={classes.threadsWrapper}>
      <h1 className={classes.threads_title}>スレッド新規作成</h1>
      <div className={classes.formContainer}>
        <form onSubmit={createThreads}>
          <input
            type="text"
            required
            className={classes.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="スレッドタイトルを入力してください"
          />
          <div className={classes.buttonContainer}>
            <Link to="/" className={classes.backToButton}>
              Topへ戻る
            </Link>
            <button className={classes.submit}>作成</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewThreads;
