import { useState, useEffect } from "react";
import TrackTable from "./TrackTable";
import AddIncomeExpenseModal from "./AddIncomeExpenseModal";
import axios from "axios";

function MoneyTracker() {
  const [expenses, setExpenses] = useState([]);
  const [type, setType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [incomes, setIncomes] = useState([]);
  const fetchTransactions = async () => {
    await axios
      .get(`${import.meta.env.VITE_API_URL}/ledger`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setExpenses(response.data.data.expenseData);
        setIncomes(response.data.data.incomeData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchTransactions();
  }, [showModal]);
  if (!expenses && !incomes) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold text-center">No Transactions</h2>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="p-10 min-h-screen bg-slate-100">
        {/* Action Buttons for transactions */}
        <div className="grid grid-cols-2 gap-6 py-4">
          <div className="flex justify-end">
            <div
              onClick={() => {
                setType("expense");
                setShowModal((prev) => !prev);
              }}
              className="p-2 w-fit  cursor-pointer  rounded-lg bg-red-400 text-xl font-bold"
            >
              Add Expense
            </div>
          </div>
          <div className="flex justify-start">
            <div
              onClick={() => {
                setType("income");
                setShowModal((prev) => !prev);
              }}
              className="p-2 cursor-pointer w-fit rounded-lg bg-green-400 text-xl font-bold"
            >
              Add Income
            </div>
          </div>
        </div>
        {/* Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TrackTable data={expenses} type={"expense"} />
          <TrackTable data={incomes} type={"income"} />
        </div>
      </div>
      <AddIncomeExpenseModal
        type={type}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
}

export default MoneyTracker;
