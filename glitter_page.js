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
  room_name = localStorage.getItem("room_name");
  
  function send()
  {
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });
  
  document.getElementById("msg").value = "";
  }

  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
    }
    

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
} });  }); }
getData();