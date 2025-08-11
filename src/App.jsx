import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./HomePage";
import QueryPage from "./QueryPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/query" element={<QueryPage />} />
      </Routes>
    </Router>
  );
}