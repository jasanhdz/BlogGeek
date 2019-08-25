import React from 'react';
import { obtenerFecha } from '../../../util/date-format.js';

const VideoPersonal = props => {
    return (
        <article className="ItemPost">
          <p className="title">{props.title}</p>
          <div className="start">
            <a className="post-estrellita-llena">*</a>
            <a className="post-estrellita-llena">*</a>
            <a className="post-estrellita-llena">*</a>
            <a className="post-estrellita-llena">*</a>
            <a className="post-estrellita-vacia">*</a>
          </div>
          
          <div className="container-video">
            <video 
              src={props.imageLink} 
              alt="Imagen" 
              width="500" height="345"
              controls={true}
            />
          </div>
    
          <div className="btn-container">
            <a 
              className="postbtn"
              href={props.linkVideo} 
              target="blank">Ver más...
            </a>
          
          <div className="PostDescription" >
            <p><strong>Description:</strong> {props.description}</p>
          </div>
          
          <div className="Article-footer">
            {/* <p>Fecha: {obtenerFecha(props.date.toDate())}</p> */}
            <p>Author: {props.author}</p>
          </div>

          </div>
        </article>
      )
}

export default VideoPersonal;