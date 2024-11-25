const INITIAL_STATE = {
    personnes: [],
  };
  
  const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'ADD_PERSON':
        return {
          ...state,
          personnes: [...state.personnes, action.payload],
        };
      case 'REMOVE_PERSON':
        return {
          ...state,
          personnes: state.personnes.filter((_, index) => index !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  