
function BillForm({bill,setBill}) {
  return (
    <><label htmlFor="bill">Enter Bill Ammount</label>
      <input
        type="number"
        name="bill"
        id="bill"
        value={bill}
        onChange={(e) => {
          setBill(e.target.value);
        }}
      />
    </>
  );
}

export default BillForm;
