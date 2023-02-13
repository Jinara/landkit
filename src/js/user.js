// 
// user.js
// Use this to write your custom JS
//

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, set, ref } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkSsGV-oGx11Ra7Xkws-JLKttB0s4NfT4",
  authDomain: "bakingdevslanding.firebaseapp.com",
  projectId: "bakingdevslanding",
  storageBucket: "bakingdevslanding.appspot.com",
  messagingSenderId: "1004306351264",
  appId: "1:1004306351264:web:3b1ca7e9ac59e2ed2275c5",
  measurementId: "G-BZBZ6LNZJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)

const database = getDatabase(app);

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

function pushDataBdev(){

	var firstName = document.getElementById("BdevFirstNameModal").value;
	var lastName = document.getElementById("BdevLastNameModal").value;
	var email = document.getElementById("BdevEmailModal").value;
  var randomId = makeid(25);

  set(ref(database, 'bdevs/' + randomId), {
    first_name: firstName,
    email: email,
    last_name : lastName
  });
}

function changeElements() {

  var bdevForm = document.getElementById("BdevForm");
  var earlyAccessBdevText = document.getElementById("EarlyAccessBdevText");
  var BdevSucsess = document.getElementById("BdevSuccess");
  
  bdevForm.style.display = 'none';
  earlyAccessBdevText.style.display = 'none';
  BdevSucsess.style.display = 'block';
}


//Le damos la funcionalidad al form
var element = document.getElementById("BdevForm");

element.addEventListener("submit", function(evt) {
  evt.preventDefault();
  pushDataBdev();
  changeElements();
}, true);

