import { useEffect, useState } from "react";

function Logger() {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Component rendered",text);
  },[text]);

  return <input value={text} onChange={(e) => setText(e.target.value)} />;

}

export default Logger;