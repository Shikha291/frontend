import "./App.css";
import Landingpage from "./components/Landingpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Logout from "./components/Logout";
import AlertState from "./context/alert/AlertState";
import Navbar from './components/Navbar';
import Feedback from "./components/Feedback";
import PersonalizedRecommendations from "./components/PersonalizedRecommendations";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <AlertState>
          <Routes>
            <Route
              exact
              activeClassName="active"
              path="/"
              element={<Landingpage />}
            />
            <Route
              exact
              activeClassName="active"
              path="/about"
              element={<About />}
            />
            <Route
              exact
              activeClassName="active"
              path="/register"
              element={<Register />}
            />
            <Route
              exact
              activeClassName="active"
              path="/login"
              element={<Login />}
            />
            <Route
              exact
              activeClassName="active"
              path="/home"
              element={<Home />}
            />
            <Route
              exact
              activeClassName="active"
              path="/profile"
              element={<Profile />}
            />
            <Route
              exact
              activeClassName="active"
              path="/logout"
              element={<Logout />}
            />
            <Route
              exact
              activeClassName="active"
              path="/feedback"
              element={<Feedback />}
            />
            <Route
              exact
              activeClassName="active"
              path="/personalized_recommendations"
              element={<PersonalizedRecommendations />}
            />
          </Routes>
        </AlertState>
      </BrowserRouter>
    </div>
  );
}

export default App;
