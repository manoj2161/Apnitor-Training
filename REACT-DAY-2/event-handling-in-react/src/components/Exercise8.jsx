function Exercise8(){
  function handleCardClick() {
    console.log("Card clicked");
  }
  function handleDeleteClick(e) {
    e.stopPropagation();
    console.log("Delete clicked");
  }


  return (
    <div onClick={handleCardClick} style={{ border: "1px solid black", padding: "10px" }}>
      Card content
      <button onClick={handleDeleteClick}>×</button>
    </div>
  );

}

export default Exercise8