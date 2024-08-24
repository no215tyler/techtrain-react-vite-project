import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewThreads from "./pages/NewThreads";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/threads/new" element={<NewThreads />} />
      </Routes>
    </>
  );
};

export default App;
