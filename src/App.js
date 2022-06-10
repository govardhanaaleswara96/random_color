import './App.css';
import Random from './Components/Random/Random';

function App() {
  const colorButtonComponent = (props)=>{
    return(
      <div>
         <button className="button" onClick={props.onClick}>Click Me (Button)</button>
         <h2 style={{background:props.color}}>{props.color}</h2>
      </div>
    )
  }
  const colorH1Component = (props)=>{
    return(
      <div>
         <h1 className="button"   onClick={props.onClick}>Click Me (h2)</h1>
         <h2 style={{background:props.color}}>{props.color}</h2>
      </div>
    )
  }
  const colorPComponent = (props)=>{
    return(
      <div>
         <p className="button"  onClick={props.onClick}>Click Me (p)</p>
         <p style={{background:props.color}}>{props.color}</p>
      </div>
    )
  }
  return (
    <div className="App">
      <Random comp={colorButtonComponent}></Random>
      <Random comp={colorH1Component}></Random>
      <Random comp={colorPComponent}></Random>
    </div>
  );
}

export default App;
