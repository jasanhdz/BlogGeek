import React from 'react';

const VideoArticle = props => {
  // console.log('aca----', props.title);
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
        <iframe width="500" height="345"
          className="video" 
          src={props.videoLink} 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        ></iframe>
      </div>

      <div className="btn-container">
        <a 
          className="postbtn"
          href={props.videoLink}
          target="blank">Video
        </a>

      </div>
    </article>
  )
}

export default VideoArticle;