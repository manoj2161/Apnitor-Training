function TemperatureInput({label,temp,setTemp}) {

  return (
    <div>
      <label>{label}</label>
      <input value={temp} onChange={(e) => setTemp(e.target.value)} />
    </div>
  );
}

export default TemperatureInput;
