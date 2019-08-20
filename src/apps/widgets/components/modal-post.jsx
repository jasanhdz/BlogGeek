import React from 'react';
import './modal-post.css';

const ModalPost = props => {
  return (
    <div className="Overlay">
      
      <div className="Modal">
        
        <div className="post-container">
          <div className="post-col-one">
            <h2>Bienvenido al VideoBlog Geek</h2>
            <h3>Publica, aprende y conecta con otros por medio de videos Geek.</h3>
            <h4>Empieza ahora</h4>
          </div>

          <form onSubmit={props.handleSubmitRegistry} action="POST" className="post-col-two">
            {/* Titulos */}
            <div className="form-group">
              <label className={props.focusActive} htmlFor="Title">Titulo</label>
              <input ref={props.setRefNames} onFocus={props.handleFocus} onBlur={props.removeFocus} type="text" />
            </div>

            {/* Description */}
            <div className="form-group">
              <label className={props.focusActive} htmlFor="Description">Descripción</label>
              <input ref={props.setRefNames} onFocus={props.handleFocus} onBlur={props.removeFocus} type="text" />
            </div>

            {/* Enlace del video */}
            <div className="form-group">
              <label className={props.focusActive} htmlFor="Linkvideo">Enlace del video </label>
              <input ref={props.setRefNames} onFocus={props.handleFocus} onBlur={props.removeFocus} type="text" />
            </div>

            {/* Cargar Imagen */}
            <div className="form-group">
              <label className={props.focusActive} htmlFor="Payload">Cargar imagen</label>
              <input type="file"  id="btnUploadFile" />
            </div>
            
            <button onSubmit={props.handleSubmitRegistry} className="formButton" type="submit">Guardar</button>
          </form>
          
          <button onClick={props.closeModal} className="Modal-close"/>
        </div>

      </div>
    </div>
  )
}

export default ModalPost;