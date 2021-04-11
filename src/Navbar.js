import {
  faFile,
  faMoneyBill,
  faMoneyCheckAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Navbar = () => {
  return (
    <nav className="topnav">
      <span className="title"> CB </span>{" "}
      <ul className="toolbar">
        <li>
          <button className="menubtn">
            <FontAwesomeIcon icon={faMoneyBill} /> Income{" "}
          </button>{" "}
        </li>{" "}
        <li>
          <button className="menubtn">
            <FontAwesomeIcon icon={faMoneyCheckAlt} /> Expenditure{" "}
          </button>{" "}
        </li>{" "}
      </ul>{" "}
    </nav>
  );
};

export default Navbar;
