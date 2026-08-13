import {  useState } from "react";

// import SearchBox from "./components/Exercise2";
// import ChildButton from "./components/Exercise1"
// import TemperatureInput from "./components/Exercise3";

// import ColorPreview from "./components/Exercise4/ColorPreview";
// import ColorPicker from "./components/Exercise4/ColorPicker";
import UserCard from "./components/Exercise5/UserCard";
function App() {
  // function handleChild(){
  //   console.log("Child says hello")
  // }
  // const [search, setSearch] = useState("");
  //   const [temp, setTemp] = useState("");
// const [color,setColor]=useState("#ffffff")

  const [username, setUsername] = useState("Guest");

  return (
    <>
      {/* <ChildButton onClick={handleChild}></ChildButton>
      <SearchBox message={search} setMessage={setSearch}></SearchBox>
      <p>You searched for : {search}</p>
      <div>
        <TemperatureInput label="Celsius" temp={temp} setTemp={setTemp} />
        <TemperatureInput label="Fahrenheit" temp={temp} setTemp={setTemp} />
      </div> */}
      {/* <ColorPicker color={color} setColor={setColor}></ColorPicker>
      <ColorPreview color={color}></ColorPreview> */}

      <div>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <UserCard username={username}/>
      </div>
    </>
  );
}

export default App;
