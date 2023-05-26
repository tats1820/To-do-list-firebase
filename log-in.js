import '../global.scss'
import { logInUser } from '../firebase.js'

const buttonLogIn = document.querySelector('#button-log-in')
buttonLogIn.addEventListener('click', () => logIn())

async function logIn() {
    const email = document.getElementById('email-input').value
    const pass = document.getElementById('pass-input').value


    const userCreated = await logInUser(email, pass)
    if (userCreated.status) {
        alert('Sesion iniciada, uid: ' + userCreated.info)
    } else {
        alert(userCreated.info)
    }


}