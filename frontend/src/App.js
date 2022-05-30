import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PersonPage from "./pages/PersonPage";
import AddPersonPage from "./pages/AddPersonPage";
import DeletePersonPage from "./pages/DeletePersonPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="peoples/:id" element={<PersonPage />} />
          <Route path="peoples/add" element={<AddPersonPage />} />
          <Route path="peoples/:id/delete" element={<DeletePersonPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
