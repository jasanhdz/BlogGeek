import React from 'react';
import PublicationsLayout from '../components/publications-layout.jsx';
import Post from '../components/post.jsx';

class Publications extends React.Component {
  render() {
    return (
      <PublicationsLayout> 
        <Post />
      </PublicationsLayout>
    )
  }
}

export default Publications;