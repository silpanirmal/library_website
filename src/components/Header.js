import React from "react";
import Library from "../assets/images/library.png";

const Header = () => {
  return (
    <>
      <div className="Library">
        <img src={Library} alt="Book Stall Logo" className="logo" />{" "}
        <h1>National Library</h1>
      </div>
    </>
  );
};

export default Header;
