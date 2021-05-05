import React, {useState} from "react"
import Tweet from "./Tweet"
function App(){
  return(
  <div className="app">
    <Tweet name="A" message="1" />
    <Tweet name="B" message="2"  />
    <Tweet name="C" message="3" />
  </div>
  );
}


export default App;