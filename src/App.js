import React , {useState} from "react"
import './App.css';

function App() {
  const [bgColor , setBgcolor] = useState ("white")

  
  return (
    <div className="App"  >
       <div className="color"
        style={{
          backgroundColor: bgColor,
        }}>

        <p> backgroundColor : {bgColor}</p>
      </div>
      <div className="button-div">
    <button className="btn" onClick={()=>setBgcolor('green')}>Green</button>
    <button className="btn" onClick={()=>setBgcolor('yellow')}>Yellow</button>
    <button className="btn" onClick={()=>setBgcolor('blue')}>Blue</button>
    </div>
      </div>
    
   
  );
}

export default App;
