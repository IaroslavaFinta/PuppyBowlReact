import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AllPlayers from "./components/AllPlayers";
import PlayerDetails from "./components/PlayerDetails";
import Teams from "./components/Teams";
import "./App.css";

function App() {
  return (
    <>
      <div id="container">
        <Navbar />
        <div id="main section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allPlayers" element={<AllPlayers />} />
            <Route path="/players/:id" element={<PlayerDetails />} />
            <Route path="/teams" element={<Teams />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
