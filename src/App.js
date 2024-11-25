import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Compteur from './componenent/Compteur';
import Reset from './componenent/Reset';
import Multiplication from './componenent/Multiplication';
import PersonForm from './componenent/PersonForm';
import ListePersonnes from './componenent/ListePersonnes';


function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Mon application avec React et Redux</h1>
        <Compteur />
        <Reset />
        <Multiplication />
        <PersonForm />
        <ListePersonnes />
      </div>
    </Provider>
  );
}

export default App;
