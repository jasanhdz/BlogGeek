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

  authAccoundGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth().signInWithPopup(provider)
    .then(result => {
        this.setState({
          uriProfile: result.user.photoURL,
          modalVisibility: false,
          user: result.user.displayName
        })
        
        console.log(result.user.displayName, 'usuarioLogin');
    })
    .catch(error => {
      console.error(error);
      alert('Error al authenticarce con Google');
    })
  }

  // Auntenticación con Facebook 
  authAccoundFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(result => {
      this.setState({
        uriProfile: result.user.photoURL,
        modalVisibility: false,
        user: result.user.displayName
      })

      console.log(result.user, 'usuarioLogin');
    })

    .catch(error => {
      console.error(error);
      alert('Error al authenticarce con Facebook');
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

  // Observador del cambio de Sesión en el browser
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        console.log('existe un usuario');
        console.log(user.photoURL, 'aqui.....');
        if(user.photoURL) {
            this.setState({
              uriProfile: user.photoURL,
              user: user.displayName
            })
        } 
      }
    })
  }

  // Llamamos a la función Salir de sesión desde el botón SignOut que se carga al hacer Login.
  Signout = event => {
    const user = firebase.auth().currentUser;
    if(user) {
      return firebase.auth().signOut().then(() => {
        this.setState({
          ImgProfile: false,
          uriProfile: null,
          user: null
        })
        alert(`Salimos de la sesión correctamente!`);
      })
    } else {
      alert('No tenemos niguna sesión actualmente!');
    }
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
    const user = firebase.auth().currentUser;
    if(user) {
      firebase.auth().signOut()
      .then(result => {
        alert(`Saliste de la aplicación sin ninguna problema`);
        this.setState({
          ImgProfile: false,
          uriProfile: null,
          user: null
        })
        console.log(this.state.user);
      })
      .catch(error => {
        alert(`Error al intentar salir de la aplicación ${error}`);
      })
    } else {
      alert('No haz iniciado sesión!');
    }
  }

  loginWithGoogle = event => {
    this.authAccoundGoogle()
    console.log('vamos')
  }

  loginWithFacebook = event => {
    this.authAccoundFacebook();
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
              loginwhitGoogle={this.loginWithGoogle}
              loginWithFacebook={this.loginWithFacebook}
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
          ImgProfile={this.state.uriProfile}
          user={this.state.user}
          Signout={this.Signout}
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