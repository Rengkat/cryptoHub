import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaMoneyCheckAlt,
  FaUserAlt,
  FaLightbulb,
} from "react-icons/fa";
import { SiBitcoin } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assset/PngItem_2019571.png";
function NavBar() {
  return (
    <nav className="nav__container w-72 px-6 py-5 bg-[#0b0b45] fixed top-0 bottom-0 left-0">
      <div className="nav__logo__container w-12 h-5">
        <Link className="flex" to="/">
          <img src={logo} alt="Logo" className="" />
          <h1 className="text-4xl font-bold pt-1 text-blue-500 pl-3">
            CryptoHub
          </h1>
        </Link>
      </div>
      <ul className="main__nav mt-16 text-white">
        <li>
          <Link to="/" className=" links   ">
            <FaHome fontSize={30} className="nav-icon " />
            Home
          </Link>
        </li>
        <li>
          <Link to="/cryptocurrencies" className=" links">
            <SiBitcoin fontSize={30} className="nav-icon " /> Cryptocurrencies
          </Link>
        </li>
        <li>
          <Link to="/exchanges" className=" links">
            <FaMoneyCheckAlt fontSize={30} className="nav-icon " />
            Exchanges
          </Link>
        </li>
        <li>
          <Link to="/news" className=" links">
            <FaLightbulb fontSize={30} className="nav-icon " />
            News
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
