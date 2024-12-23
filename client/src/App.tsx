import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Applications from "./pages/applications";
import ApplyJob from "./pages/applyjob";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apply-job/:id" element={<ApplyJob />} />
      <Route path="/applications" element={<Applications />} />
    </Routes>
  );
}

export default App;
