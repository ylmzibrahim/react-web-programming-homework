import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import LectureDetails from "./LectureDetails";
import NotFound from "./NotFound";
import TestPage from "./TestPage";


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/konu-anlatim" element={<LectureDetails />} />
        <Route exact path="/test" element={<TestPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
