import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPerson } from '../redux/personnes/person.actions';

function PersonForm(props) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addPerson(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nom de la personne"
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPerson: (name) => dispatch(addPerson(name)),
  };
};

export default connect(null, mapDispatchToProps)(PersonForm);
