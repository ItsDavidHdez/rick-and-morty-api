import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        Made with love by{" "}
        <Link to="https://github.com/ItsDavidHdez">David</Link> ❤️
      </div>
    </footer>
  );
};

export { Footer };
