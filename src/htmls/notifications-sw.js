// import iconNotification from '../assets/bell-solid.svg';

importScripts('https://www.gstatic.com/firebasejs/6.4.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/5.10.1/firebase-messaging.js')

firebase.initializeApp({
  projectId: "bloggeekplatzi-66a71",
  messagingSenderId: "245353554437"
})

const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(payload => {
  const titleNotification = 'Ya tenemos un nuevo Post';
  const optionesNotificatios = {
    body: payload.data.title,
    icon: '../../assets/bell.png',
    click_action: "https://jasanhdz.github.io/BlogGeek/src/htmls/"
  }

  return self.registration.showNotification(titleNotification, optionesNotificatios)
})

