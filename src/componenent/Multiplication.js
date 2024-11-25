import React from 'react';
import { connect } from 'react-redux';

function Multiplication(props) {
  return (
    <div>
      <h2>Table de multiplication</h2>
      <table>
        <tbody>
          {[...Array(9).keys()].map((i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>x</td>
              <td>{props.count}</td>
              <td>=</td>
              <td>{(i + 1) * props.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

export default connect(mapStateToProps)(Multiplication);
