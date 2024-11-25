export const addPerson = (name) => {
    return {
      type: 'ADD_PERSON',
      payload: name,
    };
  };
  
  export const removePerson = (index) => {
    return {
      type: 'REMOVE_PERSON',
      payload: index,
    };
  };
  