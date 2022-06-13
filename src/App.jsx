import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/home";
import About from "./components/about";
import Details from "./components/details";
import Login from "./components/login";
import NavBar from "./components/navbar";
import NotFound from "./components/notFound";

function App() {
  const [recipeLabel, setLabel] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const fetchRecipeLabel = (label) => {
    setLabel(label);
  };
  const checkIfLoggedIn = (e) => {
    setLoggedIn(e);
  };
  return (
    <div className="container">
      <Router>
        <NavBar loggedIn={loggedIn} checkIfLoggedIn={checkIfLoggedIn} />
        <Routes>
          <Route
            path="/"
            element={<Home fetchRecipeLabel={fetchRecipeLabel} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/details/:detailsRecipe"
            element={<Details recipeLabel={recipeLabel} />}
          />
          <Route
            path="/login"
            element={<Login checkIfLoggedIn={checkIfLoggedIn} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
