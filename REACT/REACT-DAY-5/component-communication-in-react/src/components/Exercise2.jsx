function SearchBox({message,setMessage}) {
  return (
    <>
      <input type="search" name="name" id="name" value={message} onChange={(e)=>{
        setMessage(e.target.value);
      }}/>
    </>
  );
}

export default SearchBox;