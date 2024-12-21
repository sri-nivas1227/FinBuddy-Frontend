import { useState } from "react";
import CloseIcon from "/src/assets/icons/close.png";
import axios from "axios";
import Select from "react-select";
import { toTitleCase } from "../utils/utilityFunctions";

function AddIncomeExpenseModal({ type, showModal, setShowModal }) {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const [categoryOptions, setCategoryOptions] = useState([
    { value: "salary", label: "Salary" },
    { value: "rent", label: "Rent" },
    { value: "grocery", label: "Grocery" },
    { value: "entertainment", label: "Entertainment" },
    { value: "transport", label: "Transport" },
    { value: "medical", label: "Medical" },
    { value: "education", label: "Education" },
    { value: "investment", label: "Investment" },
    { value: "addNewCategory", label: "+ Add New Category" },
  ]);
  const currencySymbol = "$";

  const addNewCategory = (category) => {
    // moving the "+ add new category" to the end of the list
    const newCategoryOptions = categoryOptions.filter(
      (option) => option.value !== "addNewCategory"
    );
    setCategoryOptions([
      ...newCategoryOptions,
      { value: category, label: toTitleCase(category) },
      { value: "+ add new category", label: "+ add new category" },
    ]);
  };

  const empytForm = () => {
    setDate("");
    setCategory("");
    setDescription("");
    setAmount(0);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ date, category, description, amount });
    // calling the api to add the transaction
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/ledger/addTransaction`,
        {
          amount,
          category,
          date,
          description,
          type,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        empytForm();
        setShowModal(false);
      })
      .catch((error) => {
        console.log(error);
      });
    empytForm();
    setShowModal(false);
  };
  const handleCategoryChange = (e) => {
    if (e.value == "addNewCategory") {
      const newCategory = prompt("Enter new category");
      if (newCategory) {
        addNewCategory(newCategory);
        setCategory(newCategory);
      }
    } else setCategory(e.value);
  };
  return (
    <>
      {showModal ? (
        <>
          {/* overlay */}
          <div
            id="overlay"
            className={`fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity duration-300 ease-in-out ${
              showModal ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={(e) => {
              if (e.target.id == "overlay") setShowModal(false);
            }}
          ></div>

          <div
            className={`fixed z-50 inset-0  bg-black bg-opacity-50 flex justify-center items-center ${
              showModal
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90 pointer-events-none"
            }`}
          >
            <div className="bg-white p-4 rounded-lg w-96">
              <div className="flex justify-between mb-4">
                <div className="text-2xl text-gray-700 font-semibold">
                  {`Add ${type}`}
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    empytForm();
                    setShowModal(false);
                  }}
                >
                  {" "}
                  <img src={CloseIcon} alt="" className="w-8" />{" "}
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-2">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Date"
                    className="p-2 rounded-lg border border-gray-300"
                  />
                  <Select
                    options={categoryOptions}
                    value={categoryOptions.find(
                      (option) => option.value === category
                    )}
                    onChange={(e) => {
                      handleCategoryChange(e);
                    }}
                  />
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    className="p-2 rounded-lg border border-gray-300"
                  />
                  <div className="w-full border flex items-center rounded-lg justify-center">
                    <span className="p-2 ">{currencySymbol}</span>
                    <input
                      type="text"
                      value={amount}
                      onChange={(e) => `$${setAmount(e.target.value)}`}
                      placeholder="Amount"
                      className="w-full p-2 outline-none  border-gray-300"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-green-400 font-semibold p-2 rounded-lg text-white"
                  >
                    {toTitleCase(`Add ${type}`)}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default AddIncomeExpenseModal;
