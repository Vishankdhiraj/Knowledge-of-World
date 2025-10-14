import "./App.css";
import Nav from "./component/nav/nav.js";
import Main from "./component/main/main.js";
import About from "./component/About/about.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Nav />
   
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
