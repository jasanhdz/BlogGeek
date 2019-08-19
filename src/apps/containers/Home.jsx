import React, {Component} from 'react';
import HomeLayout from '../components/home-layout.jsx';
import Header from '../header/components/header.jsx';
import Publications from '../publications/containers/publications.jsx';
import Footer from '../footer/components/footer.jsx';
import ModalContainer from '../widgets/containers/modal.jsx';
import Modal from '../widgets/components/modal.jsx';
// import Autentication from '../../Firebase/auth/authentication';
import ModaRegistry from '../widgets/components/modal-registry.jsx';

class Home extends Component {
  state = {
    modalVisibility: false,
    focusActive: null,
    registry: false,
    login: true,
    ImgProfile: false,
    user: null,
    uriProfile: null 
  }

// Métodos para acceder a los Servicios de Firebase
  // **** Servicios de Autenticación ****
  // Autentication for Google

  authAcoundGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(result => {
        this.setState({
          uriProfile: result.user.photoURL,
          modalVisibility: false,
          user: result.displayName
        })
        alert(`Welcome ${this.state.user}, usamos el servicio de google`);
    })
    .catch(error => {
      console.error(error);
      alert('Error al authenticarce con Google');
    })
  }
  // Autenticación con Email y Password
  autEmailPass(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(result => {
      if(result.user.emailVerified) {
        // alert(`Bienvenido ${result.user.displayName}`);
        this.setState({
          ImgProfile: true,
          user: result.user.displayName,
          modalVisibility: false
        })
      } else {
        firebase.auth().signOut();
        alert(`Por favor realiza la verificación de la cuenta`)
      }
    })
  }
  /******* Crear Cuenta con Email y Password *******/
  crearAcountEmailPass(email, passsword, names) {
    firebase.auth().createUserWithEmailAndPassword(email, passsword) 
    .then(result => {
      result.user.updateProfile({
        displayName: names
      })

      const configuration = {
        url : 'http://localhost:9000/'
      }

      result.user.sendEmailVerification(configuration)
      .catch(error => {
        console.error(error);
        alert(error.message, 4000);
      })
      
      firebase.auth().signOut();

      alert(`Bienvenido ${names} debes realizar el proceso de verification.`);

    })
    .catch(error => {
      console.error(error);
      alert(error.message, 4000);
    })
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
  handleSubmitRegistry = event => {
    event.preventDefault();
    this.email = this.inputLoginEmail.value;
    this.names = this.inputLoginNames.value;
    this.password = this.inputLoginPassword.value;
    console.log(this.password, 'encriptado!');
    this.crearAcountEmailPass(this.email, this.password, this.names);
  }
  onSubmit = event => {
    event.preventDefault();
    this.email = this.inputLoginEmail.value;
    this.password = this.inputLoginPassword.value;
    this.autEmailPass(this.email, this.password);
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

  signOutClick = event => {
    firebase.auth().signOut()
    .then(result => {
      alert(`Saliste de la aplicación sin ninguna problema`);
      this.setState({
        ImgProfile: false,
      })
    })
    .catch(error => {
      alert(`Error al intentar salir de la aplicación ${error}`);
    })
  }

  loginWhitGoogle = event => {
    this.authAcoundGoogle()
    console.log('vamos')
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
              loginwhitGoogle={this.loginWhitGoogle}
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
              setRefNames={this.refInputValueNamesLogin}
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
          signOutClick={this.signOutClick}
          imgProfile={this.state.ImgProfile}
          user={this.state.user}
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