import React from 'react';
import { connect } from 'react-redux';
import { incrementer, decrementer } from '../redux/compteur/counter.actions';

function Compteur(props) {
  return (
    <div>
      <h1>Compteur</h1>
      <div>Count: {props.count}</div>
      <button onClick={() => props.incrementer()}>Incrementer</button>
      <button onClick={() => props.decrementer()}>Decrementer</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementer: () => dispatch(incrementer()),
    decrementer: () => dispatch(decrementer()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Compteur);
