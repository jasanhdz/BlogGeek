import React from 'react';
import './footer.css'

const Footer = props => {
  return (
    <section className="FooterContainer">
      <form className="Footer">
        <div className="Item Developer">
          <p>Developend by Jasan Hernández</p>
          <p>GDE Firebase</p>

          <div className="redes-sociales">
            <a href="" className="logo-facebook"></a>
            <a href="" className="logo-twitter"></a>
            <a href="" className="logo-github"></a>
          </div>
        </div>
        <div className="Item Form">
          <div className="Form-group">
            <label htmlFor="nameContact">Nombres:</label>
            <input type="text" name="name" id=""/>
          </div>
          <div className="Form-group">
            <label htmlFor="emailContact">Email:</label>
            <input type="text" name="email" id=""/>
          </div>

          <div className="Checklist-form">
            <label htmlFor="comentarioTipo">Comentarios</label>
            <input type="checkbox" value="Comentarios" name="comentarios"/>

            <label htmlFor="reclamosTipo">Reclamos</label>
            <input type="checkbox" value="Reclamos" name="reclamos"/>
          
            <label htmlFor="mejoraTipo">Mejora</label>
            <input type="checkbox" value="Mejora" name="mejora"/>
    
            <label htmlFor="Otro">Otro</label>
            <input type="checkbox" value="Otro" name="otro"/>
          </div>

        </div>
        <div className="Item Comentarios">
          <label htmlFor="Comentarios">Comentarios:</label>
          <textarea placeholder="Escribe Aquí tu comentario!" 
          name="comentariosContacto" id="" cols="30" rows="6"></textarea>

          <a className="btnPrimary">Enviar</a>

        </div>
      </form>
    </section>
  )
}

export default Footer;