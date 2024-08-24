import { Link } from "react-router-dom";
import "/src/index.css";
import classes from "../styles/NewThreads.module.css";
const NewThreads = () => {
  return (
    <div className={classes.threadsWrapper}>
      <h1 className={classes.threads_title}>スレッド新規作成</h1>
      <div className={classes.formContainer}>
        <form>
          <input type="text" required className={classes.input} />
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
