
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC19PmA3aKZ2xlG1IugDw2G6EDBFFAqsqM",
    authDomain: "medichat-4-1c0fa.firebaseapp.com",
    databaseURL: "https://medichat-4-1c0fa-default-rtdb.firebaseio.com",
    projectId: "medichat-4-1c0fa",
    storageBucket: "medichat-4-1c0fa.appspot.com",
    messagingSenderId: "100466377410",
    appId: "1:100466377410:web:cfe57b36b4c073f5fff15b",
    measurementId: "G-G06176EL84"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
    
  
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome "+user_name+" ! ";
   
  
   function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Room Name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="glitter_page.html";
   }
  
  
   function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                console.log("Room Name - " + Room_names);
                row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                document.getElementById("output").innerHTML += row;
          });
    });

}

getData();
  
function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "glitter_page.html";
  }
  
  
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
  
  }
  
  function logOut() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
    
  }
    