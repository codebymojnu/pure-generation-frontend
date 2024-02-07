import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import FinishedChallenges from "./components/FinishedChallenges";
import GiftForm from "./components/GiftForm";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Team from "./components/Team";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gift-form" element={<GiftForm />} />
        <Route path="/finished-challenges" element={<FinishedChallenges />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
