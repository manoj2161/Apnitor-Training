import "../App.css";
function BillForm({ bill, setBill }) {
  return (
    <>
    <div className="billing">

      <label>Enter Bill Amount</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => {
          setBill(e.target.value);
        }}
        />
        </div>
    </>
  );
}

export default BillForm;
