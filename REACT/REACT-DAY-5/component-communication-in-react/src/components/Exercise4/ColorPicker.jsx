function ColorPicker({color,setColor}) {
  return (
    <>
      <input type="color" name="color" id="color" value={color} onChange={(e)=>setColor(e.target.value)}/>
    </>
  );
}

export default ColorPicker;