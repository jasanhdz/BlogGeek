import React from 'react';
import './article.css';
import Img from '../../../assets/espalda.jpg';
import VideoArticle from './video-article.jsx';
import ImgArticle from './img-article.jsx';
import PersonalVideo from './video-personal.jsx';

function fetchArticles(item, index) {
  if(item.imageLink != null) {
    console.log('imageLink existe?', item.imageLink , item.imageLink != null);
    if(item.imageLink.includes('mp4')) {
      return <PersonalVideo key={index} {...item} />
    } else {
      return <ImgArticle key={index} {...item} />
    }
  } else {
    return <VideoArticle key={index} {...item} />
  }
}

const Article = props => {
  return (
    <div className="Publications-Container">
      {
        props.data.map((item, index) => {
          return fetchArticles(item, index);
        })
      }
    </div>
  ) 
}

export default Article;
