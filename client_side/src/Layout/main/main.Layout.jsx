import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
export const MainLayout = (props) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <h1>
          <Link className="link" to="/">
            Home
          </Link>
        </h1>

        <h1>
          <Link className="link" to="/api/insetStudet">
            Add Student
          </Link>
        </h1>
      </nav>
    </div>
  );
};
