import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <div className="NavBar">
      <header>
        <nav>
          <ul>
            <span>
              <img src="public\Icons\Logo-main.png" alt="" />
            </span>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/AboutUs"> AboutUs </Link>
            </li>
            <li>
              <Link to="/Courses"> Courses </Link>
            </li>
            <li>
              <Link to="/Shop"> Shop </Link>
            </li>
            <li>
              <Link to="/SignIn"> SignIn </Link>
            </li>
            <li>
              <Link to="/Cart">
                <img src={"../../../public/Icons/shopping-cart.png"} alt="" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
