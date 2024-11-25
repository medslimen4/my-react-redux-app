import React from 'react';
import { connect } from 'react-redux';
import { removePerson } from '../redux/personnes/person.actions';

function ListePersonnes(props) {
  return (
    <div>
      <h2>Liste des personnes</h2>
      <ul>
        {props.personnes.map((personne, index) => (
          <li key={index}>
            {personne}
            <button onClick={() => props.removePerson(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    personnes: state.personnes.personnes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removePerson: (index) => dispatch(removePerson(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListePersonnes);
