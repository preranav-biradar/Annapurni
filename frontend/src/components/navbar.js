import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/">Recipes</Link>
      </div>
<div className="navbar-middle">
  <Link to="#" className="nav-link"><i class="fa-solid fa-crown"></i>Annapurni</Link>
</div>
      <div className="navbar-right">
      
      <Link to="/create-recipe">New</Link>
      <Link to="/saved-recipes">Wishlist</Link>
      {!cookies.access_token ? (
        <Link to="/auth">Signin/Signup</Link>
      ) : (
        <button onClick={logout}> Signout </button>
      )}
      </div>
    </div>
  );
};