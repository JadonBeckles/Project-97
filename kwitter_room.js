var firebaseConfig = {
      apiKey: "AIzaSyAn-2oXwl6E0ZyvMgQnIEeV0zOB4bXqdOw",
      authDomain: "kwitter-d64db.firebaseapp.com",
      databaseURL: "https://kwitter-d64db-default-rtdb.firebaseio.com",
      projectId: "kwitter-d64db",
      storageBucket: "kwitter-d64db.appspot.com",
      messagingSenderId: "310963694136",
      appId: "1:310963694136:web:4cfb9f36002e445f5414cd",
      measurementId: "G-1XHW661LM5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child("room_name").update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class = 'room_name' id = " + Room_names + "onclick = 'redirectToRoomName(this.id)' > #" + Room_names + "</div> <hr>";
       document.getElementById("output").innerHTML += row;
      //Start code

      //End code
      });});}
getData();

function redirectToRoomName()
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}