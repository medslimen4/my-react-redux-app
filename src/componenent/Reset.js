import React from 'react';
import { connect } from 'react-redux';
import { reset } from '../redux/compteur/counter.actions';

function Reset(props) {
  return (
    <div>
      <button onClick={() => props.reset()}>Remettre à zéro</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    reset: () => dispatch(reset()),
  };
};

export default connect(null, mapDispatchToProps)(Reset);
