import React from 'react';
import SignOut from './sign-out.jsx';
const Welcome = props => {
  return (
    <div>
      <h2>Bienvenido {props.user}</h2>
      <h3>¿Qué tal si publicamos algó??</h3>
      <SignOut Signout={props.Signout} />
    </div>
  )
}

export default Welcome