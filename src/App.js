import "./App.css";
import "./components/styles/card.css";
import HeaderBar from "./components/HeaderBar";
import "./components/styles/Header.css";
import AddForm from "./pages/AddForm/AddForm";
import CardsForm from "./pages/Cards/CardsForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardDetails from "./components/CardDetails";
import { Counter } from "./components/Card2";
import VideoPlayer from "./pages/VideosPage/vedio";
import TubePlayer from "./pages/Youtube/Youtube";

function App() {
  return (
    <Router>
      <div className="Container">
        <HeaderBar></HeaderBar>

        <Routes>
          <Route path="/" element={<CardsForm />} />
          <Route path="/Add" element={<AddForm />} />
          <Route path="/details" element={<CardDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
