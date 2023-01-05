import "./App.css";
import "./components/styles/card.css";
import HeaderBar from "./components/HeaderBar";
import "./components/styles/Header.css";
import AddForm from "./pages/AddForm/AddForm";
import CardsForm from "./pages/Cards/CardsForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="Container">
        <HeaderBar></HeaderBar>
        <Routes>
          <Route path="/" element={<CardsForm />} />
          <Route path="/Add" element={<AddForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
