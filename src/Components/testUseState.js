function akUseState(initialValue) {
  let data = initialValue;
 
  function setValue(newValue)  {
    data = newValue;
  }
  return [data, setValue]
}

let [count, setCount] = akUseState(10);