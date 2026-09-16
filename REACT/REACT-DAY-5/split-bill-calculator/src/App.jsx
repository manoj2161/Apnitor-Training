import { MdOutlineFastfood } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";

import { useState } from "react";
import BillForm from "./components/BillForm";
import PeopleManager from "./components/PeopleManager";
import SplitSummary from "./components/SplitSummary";
import "./App.css";
function App() {
  const [bill, setBill] = useState();
  const [people, setPeople] = useState([]);
  function handleRemove(index) {
    setPeople((prev) => prev.filter((i, user) => index !== user));
  }
  return (
    <>
      <div className="mainBody">
        <h1 className="heading">
          <MdOutlineFastfood />
          SPLIT BILL
        </h1>
        <div className="personBody">
          <div className="peopleDiv">
            <PeopleManager setPeople={setPeople}></PeopleManager>
            <div className="addedPeople">
              Added People
              <ul>
                {people.map((user, index) => (
                  <li key={index}>
                    {user}
                    <button
                      className="removeBtn"
                      onClick={() => handleRemove(index)}
                    >
                      X
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="billDiv">
              <BillForm bill={bill} setBill={setBill}></BillForm>{" "}
            </div>
          </div>
          <div className="totalBillDiv">
            <p className="tBill">
              Total Bill :<br></br> <FaRupeeSign />
              {bill}
            </p>
            <SplitSummary bill={bill} people={people}></SplitSummary>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
