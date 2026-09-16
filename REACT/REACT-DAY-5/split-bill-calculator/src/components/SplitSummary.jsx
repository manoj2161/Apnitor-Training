import "../App.css"
function SplitSummary({bill,people}) {
  return (
    <>
      {people.length > 0 && bill > 0 ? (
        <p className="share">Each person's share : {bill / people.length}</p>
      ) : (
        <p className="covered">🎉 Fully covered!</p>
      )}
    </>
  );
}

export default SplitSummary;