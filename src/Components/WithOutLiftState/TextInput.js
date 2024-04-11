const { useState } = require("react");

function TextInput({label}) {
  const [value, setValue] = useState("");

  return (
    <>
    <h1>{label}</h1>
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
    </>
  );
}

export default TextInput;