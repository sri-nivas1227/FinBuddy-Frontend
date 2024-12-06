import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";

const ProfileMenu = () => {
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  return (
    <div className="absolute bg-white shadow-md rounded-lg top-16 right-2 font-semibold w-40  p-2">
      <div className="text-center">
        <p className="font-bold text-gray-600">{decodedToken.fullName}</p>
        <p className="font-semibold text-gray-500">@{decodedToken.username}</p>
      </div>
      <hr />
      <div className="m-2">
        <div
          onClick={() => {
            window.location.href = "/profile";
          }}
          className="cursor-pointer hover:underline"
        >
          Profile
        </div>
        <div
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
          className="cursor-pointer hover:underline"
        >
          Logout
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
