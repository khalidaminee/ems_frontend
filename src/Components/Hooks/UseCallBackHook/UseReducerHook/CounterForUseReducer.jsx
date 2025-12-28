import React, { useReducer } from 'react'


const reducer = (state, action) => {
    console.log(state, action);
    switch(action.type){
      case "INCREMENT":
        return {count: state.count + 1};
      case "DECREMENT":
        return {count: state.count - 1};
      default:
        return state;
    }

    
}
export default function CounterForUseReducer() {
    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      {/* Example 2 */}
      <h2>Count: { state.count }</h2>
      <button onClick={() => dispatch({ type: "INCREMENT"})}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT"})}>Decrement</button>

      
     
    </>
  )
}
