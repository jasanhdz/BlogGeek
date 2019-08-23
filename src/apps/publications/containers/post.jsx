import React from 'react';
import './post.css';
import PostLayout from '../components/post-layout.jsx';
import Article from '../components/article.jsx';
import ModalContainer from '../../widgets/containers/modal.jsx';
import PostModal from '../../widgets/components/modal-post.jsx';
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
      title: null,
      description: null,
      linkVideo: null
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

  // Aquí vamos a validar cuando poner el ModalPost
  ModalPostPayload() {
    if(this.props.modalPostActive) {
      return (
        <ModalContainer>
          <PostModal 
            closeModal={this.closeModal}
            handleChange={this.handleChange}
            submitPost={this.submitPost}
            closeModal={this.props.closeModal}
          />
        </ModalContainer>
      )
    }
  }
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
    // console.log([e.target.name], e.target.value);
  }

  submitPost = event => {
    event.preventDefault();
    console.log(this.state.title);
    console.log(this.state.description);
    console.log(this.state.linkVideo);
  }

  registerPost = event => {
    console.log(this.state);
  }

  render() {
    return (
      <PostLayout>
        {
          this.props.modalVisibility && this.ModalPostPayload()
        }
        <Article 
          itemImg={this.state.itemImg}
          itemVideo={this.state.itemVideo}
        />
      </PostLayout>
    )
  }
}

export default Post;