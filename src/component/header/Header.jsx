import React from "react";
import "./header.css";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">Edteck</div>

      <div className="link">
        <a >Home</a>
        <a >Courses</a>
        <a >About</a>
        <a >Account</a>
        {/* <Link to={"/courses"}>Courses</Link>
        <Link to={"/about"}>About</Link> */}
        {/* {isAuth ? (
           <Link to={"/account"}>Account</Link>
        ) : (
          <Link to={"/login"}>Login</Link>
        )} */}
      </div>
    </header>
  );
};

export default Header;
