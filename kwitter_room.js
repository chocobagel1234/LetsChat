
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBHZl7Pj8So2ZPEyH9jsRivJDsQ7bbx_W8",
      authDomain: "letschat-8c26d.firebaseapp.com",
      databaseURL: "https://letschat-8c26d-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "letschat-8c26d",
      storageBucket: "letschat-8c26d.appspot.com",
      messagingSenderId: "265671920099",
      appId: "1:265671920099:web:a3ac14335ef75ad07cb8d6"
}

import { initializeApp } from "firebase/app";

    firebase.initializeApp(firebaseConfig); 

    // Initialize Firebase
   const app = initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE ↑

//get username
localStorage.getItem("user_name");

// gets data
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+Room_names);
      
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>"
      //End code
      });});}
getData();

//logs out
function Logout() {
      window.location("index.html");
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      redirectToRoomName(); 
}