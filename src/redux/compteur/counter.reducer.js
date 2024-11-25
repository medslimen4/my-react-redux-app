const INITIAL_STATE = {
    count: 0,
  };
  
  const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "INCREMENTER":
        return {
          ...state,
          count: state.count + 1,
        };
      case "DECREMENTER":
        return {
          ...state,
          count: state.count - 1,
        };
      case "RESET":
        return {
          ...state,
          count: 0,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  