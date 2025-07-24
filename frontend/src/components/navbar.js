import React from "react";
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
        <Link to="/"><i class="fa-solid fa-crown"></i>DesiDelights</Link>
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