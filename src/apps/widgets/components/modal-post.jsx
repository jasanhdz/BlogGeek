import React from 'react';
import './modal-post.css';

const ModalPost = props => {
  return (
    <div className="Overlay">
     
      <div className="Modal">
        
        <div className="post-container">
          <div className="post-col-one">
            <h2>Realiza un Post</h2>
            <h3>Comparte un video interesante para la comunidad</h3>
            <h4>Comparte ahora</h4>
          </div>

          <form onSubmit={props.submitPost} action="POST" className="post-col-two">
            {/* Titulos */}
            <div className="form-group">
              <label className={props.focusActive} htmlFor="Title">Titulo</label>
              <input name="title" onChange={props.handleChange} onFocus={props.handleFocus} onBlur={props.removeFocus} type="text" />
            </div>

            {/* Description */}
            <div className="form-group">
              <label className={props.focusActive} htmlFor="Description">Descripción</label>
              <textarea name="description" onChange={props.handleChange} className="Textarea-description" name="description" onBlur={props.removeFocus} cols="30" rows="10"></textarea>
            </div>

            {/* Enlace del video */}
            <div className="form-group">
              <label className={props.focusActive} htmlFor="Linkvideo">Enlace del video </label>
              <input name="linkVideo" onChange={props.handleChange} onFocus={props.handleFocus} onBlur={props.removeFocus} type="text" />
            </div>

            {/* Cargar Imagen */}
            <div className="form-group">
              <label className={props.focusActive} htmlFor="Payload">Cargar imagen</label>
              <input type="file" onChange={props.loadingFile} 
                className='btnUploadFile' ref={props.refLoading}
                style={props.styleLoadImgPost}
              />
            </div>
            
            <button onSubmit={props.submitPost} className="formButton" type="submit">Guardar</button>
          </form>
          
          <button onClick={props.closeModal} className="Modal-close"/>
        </div>

      </div>
    </div>
  )
}

export default ModalPost;