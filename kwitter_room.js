// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBHZl7Pj8So2ZPEyH9jsRivJDsQ7bbx_W8",
      authDomain: "letschat-8c26d.firebaseapp.com",
      databaseURL: "https://letschat-8c26d-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "letschat-8c26d",
      storageBucket: "letschat-8c26d.appspot.com",
      messagingSenderId: "265671920099",
      appId: "1:265671920099:web:a3ac14335ef75ad07cb8d6"
    };
    
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function Logout() {
      window.location("index.html");
}
