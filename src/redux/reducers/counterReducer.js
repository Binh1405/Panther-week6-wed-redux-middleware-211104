const initialState = {
    count: 5, //if this is 5 which means
  };
  
  const counterReducer = (state = initialState, action) => {
    console.log("action", action); //{ type: "increase", payload: 5 }
    // state = {count:5}
    const {type, payload} = action
    switch(type){
      case "increase":
        return {count: state.count + 1}
      case "decrease":
        return {count: state.count - 1}
      default:
        return state;
  }
  };

  export default counterReducer
  // 1 render: state = {count:5}