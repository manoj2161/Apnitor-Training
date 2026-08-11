import { useState } from "react";
import BillForm from "./components/BillForm";
import PeopleManager from "./components/PeopleManager";
import SplitSummary from "./components/SplitSummary";
function App() {
  const [bill, setBill] = useState(0);
  return (
    <>
      <BillForm bill={bill} setBill={setBill}></BillForm>
      <p>Bill Ammount : {bill}</p>
      <PeopleManager ></PeopleManager>
      <SplitSummary></SplitSummary>
    </>
  );
}

export default App;
