import React from 'react';
import marca from '../../../assets/logo.png';
import avatarLogout from '../../../assets/usuario.png';
import avatarLogin from '../../../assets/perfil.jpg';
import Welcome from './welcome.jsx';
import './menu.css';

function PayloadImageProfile(uri, user) {
  if (uri) {
    return<img src={uri} alt=""/>
  }
  else if (!uri && user) {
    return <img src={avatarLogin} alt=""/>
  }
  else {
    return <img src={avatarLogout} alt=""/>
  }
}

const Header = props => {
  console.log(props.user)
  return (
    <div className="Header-container">
      <div className="Header">
        <figure className="Header-logotipo">
          <img src={marca} alt=""/>
        </figure>
        <div className="Header-info">
          <h2>VideoBlog Geek</h2>
          <h3>Encuentra los Videos mas poderosos de los geeks</h3>
          {
            !props.user ? <a 
              className="btnPrimary" 
              onClick={props.handleClick} 
              id="btnLogin"
            >Iniciar Sesión
            </a> : <Welcome Signout={props.Signout} user={props.user} />
          }
        </div>
        <figure onClick={props.signOutClick} className="Header-avatar">
          {PayloadImageProfile(props.ImgProfile, props.user)}
        </figure>
      </div>
      <div className="Menu-container">
        <nav className="Menu">
          <ul>
            <li>Todos los post</li>
          </ul>
          <ul>
            <li>Mis Post</li>
          </ul>
          <ul>
            <li onClick={props.modalPostOnChange} >Realizar un Post</li>
          </ul>
          <ul>
            <li>Contactenos</li>
          </ul>
        </nav>  
      </div>
    </div>
  )
}

export default Header;