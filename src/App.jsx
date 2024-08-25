import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewThreads from "./pages/NewThreads";
import NotFound from "./pages/NotFound";
import Threads from "./pages/Threads";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/threads/new" element={<NewThreads />} />
        <Route path="threads/:thread_id" element={<Threads />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
