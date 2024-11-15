import React from "react";
import logo from "../../public/assets/logo.png";
import moment from "moment/moment";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-11/2 mx-auto flex-col text-center">
      <div className=" flex justify-center items-center p-4">
        <img className="w-80" src={logo} alt="" />
      </div>
      <p className="text-xl mb-2 text-gray-400">
        Journalism Without fear or Favour
      </p>
      <p className="font-semibold mb-2">
        {moment().format("dddd MMMM Do YYYY")}
      </p>
    </div>
  );
};

export default Header;
