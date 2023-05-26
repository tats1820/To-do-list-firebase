// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzEJV3j7WHTYXODug838fua986XeRRssY",
  authDomain: "to-do-list-7edee.firebaseapp.com",
  projectId: "to-do-list-7edee",
  storageBucket: "to-do-list-7edee.appspot.com",
  messagingSenderId: "408718670570",
  appId: "1:408718670570:web:ad0f7cc315640a40417593",
  measurementId: "G-ESPTG7CHNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Obtiene una referencia al formulario de inicio de sesión
var loginForm = document.getElementById("loginForm");
  
// Agrega un listener al formulario de inicio de sesión
loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío del formulario

  // Obtiene los valores de los campos de correo electrónico y contraseña
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Inicia sesión con Firebase
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(userCredential) {
      // Inicio de sesión exitoso
      var user = userCredential.user;
      console.log("Inicio de sesión exitoso:", user);
      // Aquí puedes redirigir al usuario a otra página o realizar otras acciones
    })
    .catch(function(error) {
      // Error en el inicio de sesión
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error("Error en el inicio de sesión:", errorCode, errorMessage);
      // Aquí puedes mostrar un mensaje de error al usuario
    });
});