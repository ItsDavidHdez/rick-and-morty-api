import React from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Header = () => {
  const closeSesion = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("name", { path: "/" });
    cookies.remove("username", { path: "/" });
    window.location.href = "/";
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand text-uppercase" href="/">
          Rick and Morty API
        </a>
        <a className="navbar-brand" href="/login">
          {cookies.get("name") ? `Welcome ${cookies.get("name")}` : "Login"}
        </a>
        {cookies.get("name") ? (
          <button onClick={closeSesion}>Exit</button>
        ) : null}
      </div>
    </nav>
  );
};

export { Header };
