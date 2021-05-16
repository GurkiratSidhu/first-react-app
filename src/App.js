import React, {useState} from "react"
import Tweet from "./Tweet"
function App(){

  const [isRed, setRed ] = useState(false);
  const [count, setCount] = useState(0);

  const  increment = () => {
    setCount(count +1);
  }
  
  return(
  <div className="app">
    <Tweet name="A" message="1" />
    <Tweet name="B" message="2"  />
    <Tweet name="C" message="3" />
    <button onClick={increment}>Increment</button>
    <h1>{count}</h1>
  </div>
  );
}


export default App;