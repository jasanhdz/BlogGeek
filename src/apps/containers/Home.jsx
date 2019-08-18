import React, {Component} from 'react';
import HomeLayout from '../components/home-layout.jsx';
import Header from '../header/components/header.jsx';
import Publications from '../publications/containers/publications.jsx';
import Footer from '../footer/components/footer.jsx';
import ModalContainer from '../widgets/containers/modal.jsx';
import Modal from '../widgets/components/modal.jsx';

class Home extends Component {
  state = {
    modalVisibility: false,
  }
  handleClick = event => {
    this.setState({
      modalVisibility: true
    })
    console.log('click', this.state.modalVisibility);
  }
  closeModal = event => {
    this.setState({
      modalVisibility: false
    })
  }
  componentDidMount() {
    console.log('modal', this.state.modalVisibility);
  }
  render() {
    return (
      <HomeLayout>
        <Header 
          handleClick={this.handleClick}
        />
        {
          this.state.modalVisibility && 
          <ModalContainer>
            <Modal 
              closeModal={this.closeModal}
            />
          </ModalContainer>
        }
        <Publications />
        <Footer />
      </HomeLayout>
    )
  }
}

export default Home;