import React, {Component} from 'react';
import HomeLayout from '../components/home-layout.jsx';
import Header from '../header/components/header.jsx';
import Publications from '../publications/containers/publications.jsx';
import Footer from '../footer/components/footer.jsx';
import ModalContainer from '../widgets/containers/modal.jsx';
import Modal from '../widgets/components/modal.jsx';
import Autentication from '../../Firebase/auth/authentication';
import ModaRegistry from '../widgets/components/modal-registry.jsx';

class Home extends Component {
  state = {
    modalVisibility: false,
    focusActive: null,
    registry: false,
    login: true
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
  handleFocus = event => {
    this.setState({
      focusActive: 'Labelactive'
    })
  }
  removeFocus = event => {
    this.setState({
      focusActive: null,
    })
  }
  clickOverlay = event => {
    this.closeModal();
  }
  refInputValueEmailLogin = event => {
    this.inputLoginEmail = event;
  }
  refInputValueNamesLogin = event => {
    this.inputLoginNames = event;
  }
  refInputValuePasswordLogin = event => {
    this.inputLoginPassword = event;
  }
  onSubmit = event => {
    event.preventDefault();
    this.email = this.inputLoginEmail.value;
    this.password = this.inputLoginPassword.value;
    console.log(this.password, 'encriptado!');
    const auth = new Autentication();
    auth.crearAcountEmailPass(this.email, this.password, 'Jasanhdz');
  }
  handleSubmitRegistry = event => {
    event.preventDefault();
    this.email = this.inputLoginEmail.value;
    this.names = this.inputLoginNames.value;
    this.password = this.inputLoginPassword.value;
  }

  handleClickRegistry = event => {
    this.setState({
      registry: true,
      login: false
    })
  }

  handleClickLogin = event => {
    this.setState({
      registry: false,
      login: true
    })
  }

  login = () => {
    if(this.state.login) {
      return (
        <ModalContainer>
            <Modal
              handleSubmit={this.onSubmit} 
              closeModal={this.closeModal}
              handleFocus={this.handleFocus}
              focusActive={this.state.focusActive}
              removeFocus={this.removeFocus}
              handleClick={this.clickOverlay}
              setRefEmail={this.refInputValueEmailLogin}
              setRefPass={this.refInputValuePasswordLogin}
              handleModalRegistry={this.handleClickRegistry}
            />
        </ModalContainer>
      )
    }
    if(this.state.registry) {
      return (
        <ModalContainer>
            <ModaRegistry
              handleSubmitRegistry={this.handleSubmitRegistry} 
              closeModal={this.closeModal}
              handleFocus={this.handleFocus}
              focusActive={this.state.focusActive}
              removeFocus={this.removeFocus}
              handleClick={this.clickOverlay}
              setRefEmail={this.refInputValueEmailLogin}
              setRefPass={this.refInputValuePasswordLogin}
              setRefPass={this.refInputValueNamesLogin}
              handleLogin={this.handleClickLogin}
            />
        </ModalContainer>
      )
    }
  }
  render() {
    return (
      <HomeLayout>
        <Header 
          handleClick={this.handleClick}
        />
        {
          this.state.modalVisibility && this.login()
        }
        <Publications />
        <Footer />
      </HomeLayout>
    )
  }
}

export default Home;