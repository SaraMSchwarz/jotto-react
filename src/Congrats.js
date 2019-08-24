import React from 'react';
import propTypes from 'prop-types';
/**
 *Functional React component for congratulatory message.
 *@Function
 *@param {object} props - react props
 *@returns {JSX.element} - rendered component if true
*/


const Congrats = (props) => {
    if (props.success) {
      return (
        <div data-test="component-congrats">
          <span data-test="congrats-message">
            Congratulations! You guessed the word.
          </span>
        </div>
      )
  } else {
    return (
      <div data-test="component-congrats" />
    )
  }
}

Congrats.propTypes = {
  success: propTypes.bool.isRequired
}

export default Congrats
