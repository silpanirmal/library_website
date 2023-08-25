import React from "react";

const Navigation = ({ navigate }) => {
  return (
    <nav>
      <ul className="navigation">
        <li onClick={() => navigate("home")}>Home</li>
        <li onClick={() => navigate("all books")}> Books</li>
        <li onClick={() => navigate("about")}>About</li>
        <li onClick={() => navigate("login")}>Login</li>
      </ul>
    </nav>
  );
};

export default Navigation;
