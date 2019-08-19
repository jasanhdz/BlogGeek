import React from 'react';
import './modal.css';

function ModalLogin(props) {
  return (
    <div className="Overlay">
      <div className="Modal">
        <div className="Wrapper">
          <div className="col">
            <h2>Bienvenido al VideoBlog Geek</h2>
            <h3>Publica, aprende y conecta con otros por medio de videos Geek.</h3>
            <h4>Empieza ahora</h4>
          </div>

          <form onSubmit={props.handleSubmitRegistry} action="POST" className="col">
            <div className="modal-form-group">
              <label className={props.focusActive} htmlFor="Nombres">Nombres</label>
              <input ref={props.setRefNames} onFocus={props.handleFocus} onBlur={props.removeFocus} type="text" />

              <label className={props.focusActive} htmlFor="Email">Email</label>
              <input ref={props.setRefEmail} onFocus={props.handleFocus} onBlur={props.removeFocus} type="email" />

              <label className={props.focusActive} htmlFor="Password">Password</label>
              <input ref={props.setRefPass} onFocus={props.handleFocus} onBlur={props.removeFocus} type="password" name="password" id="" />
              
              <button onSubmit={props.handleSubmitRegistry} className="formButton" type="submit">Guardar</button>
            </div>
          </form>

          <div className="col">
            <button onClick={props.handleLogin} className="formButton btncenter">Iniciar Sesión</button>
          </div>
          <button
            onClick={props.closeModal}
            className="Modal-close"
          />
        </div>
      </div>
    </div>
  )
}

export default ModalLogin;