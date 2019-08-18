import React from 'react';
import './modal.css';

function Modal(props) {
  return (
    <div className="Overlay">
      <div className="Modal">
        <div className="col1">
          <h1>Bienvenido al VideoBlog Geek</h1>
          <h2>Publica, aprende y conecta con otros por medio de videos Geek.</h2>
          <h2>Empieza ahora</h2>
        </div>
        <form className="col2">
          <label htmlFor="Email">Email</label>
          <input type="email"/>
          <label htmlFor="Password">Password</label>
          <input type="password" name="password" id=""/>
          <button>Enviar</button>
          <div className="social"></div>
        </form>
        <div className="col3"></div>
        <button 
          onClick={props.closeModal}
          className="Modal-close"
        />
      </div>
    </div>
  )
}

export default Modal;