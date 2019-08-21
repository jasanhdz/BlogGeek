import React from 'react';
import './post.css';
import PostLayout from '../components/post-layout.jsx';
import Article from '../components/article.jsx';
class Post extends React.Component {
  constructor() {
    super()
    this.db = firebase.firestore();
    const settings = { timestampsInSnapshots: true }
    this.db.settings(settings);

    this.state = {
      user: firebase.auth().currentUser,
      itemImg: true,
      itemVideo: true,
    }
  }
  createPost(uid, emailUser, title, description, imageLink, videoLink) {
    return this.db.collection('posts').add({
      uid: uid,
      author: emailUser,
      title: title,
      description: description,
      imageLink: imageLink,
      videoLink: videoLink,
      date: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(refDoc => {
      console.log(`Id del post => ${refDoc.id}`)
    })
    .catch(error => {
      console.log(error);
    })
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  registerPost = event => {
    console.log(this.state);
  }
  render() {
    return (
      <PostLayout>
        <Article 
          itemImg={this.state.itemImg}
          itemVideo={this.state.itemVideo}
        />
      </PostLayout>
    )
  }
}

export default Post;