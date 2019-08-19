class Autentication {
  autEmailPass(email, password) {

  }

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
}

export default Autentication;