import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <header>
        <nav>
          <ul>
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
          </ul>
        </nav>
      </header>
    </div>
  );
}
