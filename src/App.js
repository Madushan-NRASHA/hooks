import React from 'react';
import AllCollapseExample from './components/Reactuseeffect'; // Assuming the component file is named correctly
import UserState from './components/userState'; // Assuming it's a default export
import ReducerComponent from './components/useReducer'; 
import ReducerSwitch from './components/useReduceeffectSwitch';
import { click } from '@testing-library/user-event/dist/click';
function buttonClick() {
  console.log("Button clicked");
  alert("Button is Clicked")
}
let name="amila";
const clickHandle=()=>{
  name="kamal";
  console.log(name);
}
function App() {
  return (
    <div>
     
      <h1>React Event Handling</h1><br></br><hr></hr>
      <h1>{name}</h1>
     <us />
      <button style={{
        width:"100px",backgroundColor:"red"
      }} onClick={buttonClick}>Click here</button><br/>
      <AllCollapseExample /><br></br> 
      <AllCollapseExample  />
      <ReducerSwitch />
     
       <UserState/> 
    
     <ReducerComponent /> 
 <button onClick={clickHandle}>click me</button> 
    </div> 
  );
}

export default App;
