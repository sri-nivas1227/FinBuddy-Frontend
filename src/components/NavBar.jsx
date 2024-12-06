import React, { useState } from "react";
import MiniLogo from "/src/assets/logo/mini-logo.png";
import ProfileDark from "/src/assets/icons/profile-dark.png";
import LoginIcon from "/src/assets/icons/login.png";
import ProfileMenu from "./ProfileMenu";
import calculatorIcon from "/src/assets/icons/calculator.png";
import Calculator from "./Calculator";
const NavBar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [openCalculator, setOpenCalculator] = useState(false);

  return (
    <nav className=" p-4 bg-green-50 grid grid-cols-4 items-center border-b">
      <div
        onClick={() => (window.location.href = "/")}
        className="col-span-3 flex items-center cursor-pointer"
      >
        <img
          src={MiniLogo}
          alt="Logo"
          className="pointer-events-none w-28 mr-2"
        />
      </div>
      <div className="flex w-full justify-between">
        <div className="relative cursor-pointer">
          <img
            onClick={() => {
              setOpenCalculator(!openCalculator);
            }}
            src={calculatorIcon}
            alt="calculator"
            className="w-8"
          />
          {openCalculator ? <Calculator /> : null}
        </div>
        {localStorage.getItem("token") ? (
          <div className="">
            <img
              src={ProfileDark}
              alt="Profile"
              className="h-8 w-8 rounded-full"
              onClick={() => setShowProfile(!showProfile)}
            />
            {showProfile ? <ProfileMenu /> : null}
          </div>
        ) : (
          <div
            onClick={() => {
              window.location.href = "/login";
            }}
            className="group grid grid-flow-row justify-center"
          >
            <img src={LoginIcon} alt="Login" className="w-8" />
            <div className="hidden group-hover:block fixed font-semibold right-2 top-14">
              Login
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
