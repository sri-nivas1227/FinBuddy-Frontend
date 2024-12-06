import { useState } from "react";

function TrackTable({ data, type }) {
  return (
    <div className="min-h-72 bg-slate-400 rounded-lg">
      <div className="grid grid-cols-4 p-3 font-bold text-xl">
        <div className="">Date</div>
        <div className="">Category</div>
        <div className="">Description</div>
        <div className="">Amount</div>
      </div>
      <hr />
      {data.map((track, index) => (
        <div
          key={index}
          className={`grid grid-cols-4 p-3 ${
            index % 2 === 0 ? "bg-slate-300" : "bg-slate-200"
          }`}
        >
          <div className="">{track.date}</div>
          <div className="">{track.category}</div>
          <div className="">{track.description}</div>
          <div className="">{track.amount}</div>
        </div>
      ))}
    </div>
  );
}
export default TrackTable;
