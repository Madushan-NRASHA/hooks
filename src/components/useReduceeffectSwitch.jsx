import React, { useReducer } from "react";

const reducer = (state, action) => {
  const { type, data } = action; // Destructure action to get type and data
  
  const reducerActiontype = {
    setImage: "setImage",
    setName: "setName",
    setCity: "setCity",
    setPosition: "setPosition",
    dataArray: "dataArray"
  };

  switch (type) {
    case reducerActiontype.setImage:
      return { ...state, image: data };
    case reducerActiontype.setName:
      return { ...state, name: data };
    case reducerActiontype.setCity:
      return { ...state, city: data };
    case reducerActiontype.setPosition:
      return { ...state, position: data };
    case reducerActiontype.dataArray:
      return { ...state, dataArray: [...state.dataArray, data] };
    default:
      return state;
  }
};

function MyCustomComponent() {
  const [state, setState] = useReducer(reducer, {
    name: '',
    image: '',
    city: '',
    position: '',
    dataArray: [] // Initialize as an empty array
  });

  console.log(state); // Log the state to see the changes

  const handleChange = (field, value) => {
    setState({ type: field, data: value });
  };

  return (
    <div>
      <input 
        type="text" 
        value={state.image} 
        onChange={(e) => handleChange('setImage', e.target.value)} 
        placeholder="enter image url" 
      /><br /><br />
      <input 
        type="text" 
        value={state.name} 
        onChange={(e) => handleChange('setName', e.target.value)} 
        placeholder="enter name" 
      /><br /><br />
      <input 
        type="text" 
        value={state.city} 
        onChange={(e) => handleChange('setCity', e.target.value)} 
        placeholder="enter your city" 
      /><br /><br />
      <input 
        type="text" 
        value={state.position} 
        onChange={(e) => handleChange('setPosition', e.target.value)} 
        placeholder="enter your position" 
      /><br /><br />
      <button onClick={() => {
        setState({
          type: 'dataArray',
          data: {
            image: state.image,
            name: state.name,
            city: state.city,
            position: state.position
          }
        })
      }}>Set Data</button>
      <div></div>
    </div>
  );
}

export default MyCustomComponent;
