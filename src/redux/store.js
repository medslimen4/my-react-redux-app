import { createStore, combineReducers } from "redux";
import counterReducer from "./compteur/counter.reducer";
import personReducer from "./personnes/person.reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  personnes: personReducer,
});

const store = createStore(rootReducer);

export default store;
