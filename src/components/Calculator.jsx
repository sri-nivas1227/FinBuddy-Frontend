import React from "react";
import { useEffect, useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("0");
  // const [result, setResult] = useState("");
  // const [operator, setOperator] = useState("");

  const handleClick = (value) => {
    console.log("value", value);
    console.log("input", input);
    if (value === "=") {
      setInput(String(eval(input)));
    } else if (value === "AC") {
      setInput("0");
    } else if (value === "X") {
      setInput(input.slice(0, -1));
    } else {
      // handling the case when the input is 0 as the first digit
      if (input === "0") {
        if (value === "0") {
          return;
        }
        setInput(value);
        return;
      }
      // handling the case when the input is an operator
      if (
        value === "+" ||
        value === "-" ||
        value === "*" ||
        value === "/" ||
        value === "%"
      ) {
        console.log("input", input);
        if (value === "%") {
          setInput(String(input / 100));
          return;
        }
        if (
          (input.length > 1 && input.slice(-1) === "+") ||
          input.slice(-1) === "-" ||
          input.slice(-1) === "*" ||
          input.slice(-1) === "/"
        ) {
          console.log("removing the trailing value");
          setInput(input.slice(0, -1) + value);
          return;
        }
        console.log("operator used");
        console.log("input", eval(input));
        const prevResult = eval(input);
        console.log("prevResult", prevResult + value);
        setInput(prevResult + value);
        return;
      }
      // handling the case when the input is a 0 after an operator
      if (["+", "-", "*", "/"].includes(input.charAt(input.length - 1))) {
        if (value === "0") {
          return;
        }
      }
      // handling the case when the input is a decimal
      if (value === "." && input.includes(".")) {
        return;
      }
      if ((input === "0" || input === "") && value === ".") {
        console.log(". used");
        setInput(input + value);
        return;
      }
      setInput(input + value);
      return;
    }
    // console.log(input, "=", eval(input));
  };

  return (
    <div className="absolute top-14 right-0 bg-white p-6 rounded-lg shadow-lg">
      <div className="flex flex-col gap-2">
        <div className="w-full">
          <input
            type="text"
            value={input}
            disabled
            className="p-2 border-2 text-2xl border-green-200 text-end bg-green-100 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2 text-lg font-semibold">
          {/* buttons for 0-9 digits and buttons for +, -, *, /, =, % and . */}
          <div className="grid grid-cols-4 gap-2 ">
            <button
              onClick={(e) => {
                handleClick(e.target.innerHTML);
              }}
              className=" p-2 rounded-2xl bg-red-300 hover:bg-red-400"
            >
              X
            </button>
            <button
              onClick={(e) => {
                handleClick(e.target.innerHTML);
              }}
              className=" p-2 rounded-2xl bg-red-300 hover:bg-red-400"
            >
              AC
            </button>
            {/* <button onClick={(e)=>{handleClick(e.target.innerHTML)}} className="p-2 rounded-2xl bg-red-300 hover:bg-red-400">CE</button> */}
            <button
              onClick={(e) => {
                handleClick(e.target.innerHTML);
              }}
              className="p-2 rounded-2xl bg-blue-300 hover:bg-blue-400"
            >
              %
            </button>
            <button
              onClick={(e) => {
                handleClick(e.target.innerHTML);
              }}
              className="p-2 rounded-2xl bg-blue-300 hover:bg-blue-400"
            >
              /
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <button
              onClick={(e) => {
                handleClick(e.target.innerHTML);
              }}
              className="p-2 rounded-2xl bg-gray-300 hover:bg-black hover:text-white"
            >
              7
            </button>
            <button
              onClick={(e) => {
                handleClick(e.target.innerHTML);
              }}
              className="p-2 rounded-2xl bg-gray-300 hover:bg-black hover:text-white"
            >
              8
            </button>
            <button
              onClick={(e) => {
                handleClick(e.target.innerHTML);
              }}
              className="p-2 rounded-2xl bg-gray-300 hover:bg-black hover:text-white"
            >
              9
            </button>
            <button
              onClick={(e) => {
                handleClick(e.target.innerHTML);
              }}
              className="p-2 rounded-2xl bg-blue-300 hover:bg-blue-400"
            >
              *
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <button
              onClick={(e) => {
                handleClick(e.target.innerHTML);
              }}
              className="p-2 rounded-2xl bg-gray-300 hover:bg-black hover:text-white"
            >
              4
            </button>
            <button
              onClick={(e) => {
                handleClick(e.target.innerHTML);
              }}
              className="p-2 rounded-2xl bg-gray-300 hover:bg-black hover:text-white"
            >
              5
            </button>
            <button
              onClick={(e) => {
                handleClick(e.target.innerHTML);
              }}
              className="p-2 rounded-2xl bg-gray-300 hover:bg-black hover:text-white"
            >
              6
            </button>
            <button
              onClick={(e) => {
                handleClick(e.target.innerHTML);
              }}
              className="p-2 rounded-2xl bg-blue-300 hover:bg-blue-400"
            >
              -
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <button
              onClick={(e) => {
                handleClick(e.target.innerHTML);
              }}
              className="p-2 rounded-2xl bg-gray-300 hover:bg-black hover:text-white"
            >
              1
            </button>
            <button
              onClick={(e) => {
                handleClick(e.target.innerHTML);
              }}
              className="p-2 rounded-2xl bg-gray-300 hover:bg-black hover:text-white"
            >
              2
            </button>
            <button
              onClick={(e) => {
                handleClick(e.target.innerHTML);
              }}
              className="p-2 rounded-2xl bg-gray-300 hover:bg-black hover:text-white"
            >
              3
            </button>
            <button
              onClick={(e) => {
                handleClick(e.target.innerHTML);
              }}
              className="p-2 rounded-2xl bg-blue-300 hover:bg-blue-400"
            >
              +
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <button
              onClick={(e) => {
                handleClick(e.target.innerHTML);
              }}
              className="p-2 rounded-2xl col-span-2 bg-gray-300 hover:bg-black hover:text-white"
            >
              0
            </button>
            <button
              onClick={(e) => {
                handleClick(e.target.innerHTML);
              }}
              className="p-2 rounded-2xl bg-gray-300 hover:bg-black hover:text-white"
            >
              .
            </button>
            <button
              onClick={(e) => {
                handleClick(e.target.innerHTML);
              }}
              className="p-2 rounded-2xl bg-blue-300 hover:bg-blue-400"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
