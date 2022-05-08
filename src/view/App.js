import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
