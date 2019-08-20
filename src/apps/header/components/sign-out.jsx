import React from 'react';
import './sign-out.css';
const Signout = props => {
  return (
    <div className="Signout">
      <button onClick={props.Signout} type="button">SigOut</button>
    </div>
  )
}

export default Signout;