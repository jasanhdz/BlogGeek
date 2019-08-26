// import iconNotification from '../assets/bell-solid.svg';

importScripts('https://www.gstatic.com/firebasejs/6.4.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/5.10.1/firebase-messaging.js')

firebase.initializeApp({
  projectId: "bloggeekplatzi-66a71",
  messagingSenderId: "245353554437"
})

const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(payload => {
  const titleNotification = `${payload.data.author} ha publicado un nuevo post: ${payload.data.title}`;
  const optionesNotificatios = {
    body: `acerca de: ${payload.data.description}`,
    icon: '../assets/notification.png',
    click_action: 'https://jasanhdz.github.io/BlogGeek/src/htmls/',
  }

  return self.registration.showNotification(titleNotification, optionesNotificatios)
})

