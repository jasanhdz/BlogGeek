import React from 'react';
import './article.css';
import Img from '../../../assets/espalda.jpg';

function ponerVideo() {
  return (
    <article className="ItemPost">
      <p className="title">Item 1</p>
      <div className="start">
        <a className="post-estrellita-llena">*</a>
        <a className="post-estrellita-llena">*</a>
        <a className="post-estrellita-llena">*</a>
        <a className="post-estrellita-llena">*</a>
        <a className="post-estrellita-vacia">*</a>
      </div>

      <div className="container-video">
        <iframe width="500" height="345"
          className="video" 
          src="https://www.youtube.com/embed/gN9e40PE8VI" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        ></iframe>
      </div>

      <div className="btn-container">
        <a 
          className="postbtn"
          href="https://www.youtube.com/embed/gN9e40PE8VI" 
          target="blank">Video
        </a>

      </div>
    </article>
  )
}

function ponerImg() {
  return (
    <article className="ItemPost">
      <p className="title">Item 1</p>
      <div className="start">
        <a className="post-estrellita-llena">*</a>
        <a className="post-estrellita-llena">*</a>
        <a className="post-estrellita-llena">*</a>
        <a className="post-estrellita-llena">*</a>
        <a className="post-estrellita-vacia">*</a>
      </div>
      
      <div className="container-video">
        <img 
        src={Img} 
        alt="Imagen" 
        width="500" height="345"
        />
      </div>

      <div className="btn-container">
        <a 
          className="postbtn"
          href="https://www.youtube.com/embed/gN9e40PE8VI" 
          target="blank">Ver más...
        </a>

      </div>
    </article>
  )
}

const Article = props => {
  return (
    <div className="Publications-Container">
      {props.itemImg && ponerImg()}
      {props.itemVideo && ponerVideo()}
    </div>
  ) 
}

export default Article;