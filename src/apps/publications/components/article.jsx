import React from 'react';
import './article.css';
import Img from '../../../assets/espalda.jpg';
import VideoArticle from './video-article.jsx';
import ImgArticle from './img-article.jsx';

function fetchArticles(item) {
  if(item.imageLink) {
    return <VideoArticle key={item.uid+1} {...item} />
  }
  if(!item.videoLink) {
    return <ImgArticle key={item.uid+1} {...item} />
  }
}

const Article = props => {
  return (
    <div className="Publications-Container">
      {
        props.data.map(item => {
          return fetchArticles(item);
        })
      }
    </div>
  ) 
}

export default Article;
