import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer.js";
import { Auth } from "./pages/auth";
import { CreateRecipe } from "./pages/create-recipe";
import { Home } from "./pages/home";
import { SavedRecipes } from "./pages/saved-recipes";
import { Privacy } from "./pages/privacy.js";
import { Terms } from "./pages/terms.js";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-recipe" element={<CreateRecipe />} />
            <Route path="/saved-recipes" element={<SavedRecipes />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
