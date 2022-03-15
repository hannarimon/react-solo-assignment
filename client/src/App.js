import "./App.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import CreateAccount from "./components/CreateAccount";
import ErrorPage from "./components/ErrorPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateAccount />} />
        <Route
          path="/profile"
          element={<ProtectedRoute component={Profile} />}
        />
        <Route path="/errorpage" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
