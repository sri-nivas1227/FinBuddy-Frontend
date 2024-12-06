import React from "react";
import { useEffect } from "react";
import { toTitleCase } from "../utils/utilityFunctions";
const Profile = () => {
  // get the query param id from the url
  const url = window.location.href;
  const [profileId, setProfileId] = React.useState("");
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("id");
    setProfileId(id);
  }, [url]);
  return (
    <div className="grid grid-cols-6 p-2">
      <div className="col-span-1">
        <h2 className="text-2xl font-bold my-5 border-b-2 border-slate-900">Your Profile</h2>
        <div className="w-full flex flex-col gap-4">
          <p
            onClick={() => {
              window.location.href = "?id=personal";
            }}
            className={`w-full text-lg p-2 ${
              profileId == "personal"
                ? "bg-slate-900 text-white  rounded-r-full"
                : "text-gray-500 hover:text-gray-800"
            } font-semibold cursor-pointer`}
          >
            Personal Details
          </p>
          <p
            onClick={() => {
              window.location.href = "?id=regional";
            }}
            className={`text-lg p-2 ${
              profileId == "regional"
                ? "bg-slate-900 text-white  rounded-r-full"
                : "text-gray-500 hover:text-gray-800"
            } font-semibold cursor-pointer`}
          >
            Regional Settings
          </p>
          <p
            onClick={() => {
              window.location.href = "?id=personalization";
            }}
            className={`text-lg p-2 ${
              profileId == "personalization"
                ? "bg-slate-900 text-white  rounded-r-full"
                : "text-gray-500 hover:text-gray-800"
            } font-semibold cursor-pointer`}
          >
            Personlization
          </p>
        </div>
      </div>
      <div className="col-span-4 w-full h-dvh p-3 text-gray-100 bg-slate-900  flex flex-col gap-5 rounded-lg m-auto">
        <div className="font-bold border-b-2 border-green-300 text-green-300 text-3xl">{toTitleCase(profileId)}</div>

        {profileId == "personal" && (
          <div className="w-full h-1/3 grid grid-cols-1 justify-center ">
            <div className="w-1/2 grid grid-cols-2 m-auto justify-center gap-3 text-lg font-semibold">
              <p className="">First Name </p>
              <input
                type="text"
                className="font-normal  shadow-inner disabled rounded-md outline-none text-slate-800 p-1 shadow-gray-300"
                value={"Srinivas"}
              />
            </div>
            <div className="w-1/2 grid grid-cols-2 m-auto justify-center gap-3 text-lg font-semibold">
              <p className="">Last Name </p>
              <input
                type="text"
                className="font-normal shadow-inner disabled rounded-md outline-none text-slate-800 p-1 shadow-gray-300"
                value={"Mekala"}
              />
            </div>
            <div className="w-1/2 grid grid-cols-2 m-auto justify-center gap-3 text-lg font-semibold">
              <p className="">Email </p>
              <input
                type="text"
                className="font-normal shadow-inner disabled rounded-md outline-none text-slate-800 p-1 shadow-gray-300"
                value={"srinivas@gmail.com"}
              />
            </div>
          </div>
        )}
        {profileId == "regional" && (
          <div className="w-full h-1/3 grid grid-cols-1 justify-center ">
            <div className="w-1/2 grid grid-cols-2 m-auto justify-center gap-3 text-lg font-semibold">
              <p className="">Currency</p>
              <input
                type="text"
                className="font-normal  shadow-inner disabled rounded-md outline-none text-slate-800 p-1 shadow-gray-300"
                value={"Srinivas"}
              />
            </div>
            <div className="w-1/2 grid grid-cols-2 m-auto justify-center gap-3 text-lg font-semibold">
              <p className="">Time Zone </p>
              <input
                type="text"
                className="font-normal shadow-inner disabled rounded-md outline-none text-slate-800 p-1 shadow-gray-300"
                value={"Mekala"}
              />
            </div>
          </div>
        )}
        {profileId == "personalization" && (
          <div className="w-full h-1/3 grid grid-cols-1 justify-center ">
            <div className="w-1/2 grid grid-cols-2 m-auto justify-center gap-3 text-lg font-semibold">
              <p className="">Expense Categories </p>
              <input
                type="text"
                className="font-normal  shadow-inner disabled rounded-md outline-none text-slate-800 p-1 shadow-gray-300"
                value={"Srinivas"}
              />
            </div>
            <div className="w-1/2 grid grid-cols-2 m-auto justify-center gap-3 text-lg font-semibold">
              <p className="">Income Categories </p>
              <input
                type="text"
                className="font-normal shadow-inner disabled rounded-md outline-none text-slate-800 p-1 shadow-gray-300"
                value={"Mekala"}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
