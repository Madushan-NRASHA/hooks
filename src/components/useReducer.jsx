import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === 'setImage') {
    return { ...state, image: action.data };
  } else if (action.type === 'setName') {
    return { ...state, name: action.data };
  } else if (action.type === 'setCity') {
    return { ...state, city: action.data };
  } else if (action.type === 'setPosition') {
    return { ...state, position: action.data };
  } else if (action.type === 'dataArray') {
    return { ...state, dataArray: [...state.dataArray, action.data] };
  } else {
    return state;
  }
}

function MyCustomComponent() {
  const [state, setState] = useReducer(reducer, {
    name: '',
    image: '',
    city: '',
    position: '',
    dataArray: [] // Initialize as an empty array
  });

  console.log(state); // Log the state to see the changes

  return (
    <div>
      <input type="text" value={state.image} onChange={(e) => setState({ type: 'setImage', data: e.target.value })} placeholder="enter image url" /><br /><br />
      <input type="text" value={state.name} onChange={(e) => setState({ type: 'setName', data: e.target.value })} placeholder="enter name" /><br /><br />
      <input type="text" value={state.city} onChange={(e) => setState({ type: 'setCity', data: e.target.value })} placeholder="enter your city" /><br /><br />
      <input type="text" value={state.position} onChange={(e) => setState({ type: 'setPosition', data: e.target.value })} placeholder="enter your position" /><br /><br />
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
