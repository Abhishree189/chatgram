//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCwlcl_SZjmhwalMesZgUiFAP_ych3jbfY",
      authDomain: "kwitter-7ba72.firebaseapp.com",
      databaseURL: "https://kwitter-7ba72-default-rtdb.firebaseio.com",
      projectId: "kwitter-7ba72",
      storageBucket: "kwitter-7ba72.appspot.com",
      messagingSenderId: "306109776776",
      appId: "1:306109776776:web:4203c3335abacb610ef03d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_n");
room_name = localStorage.getItem("room_name");
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });


document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
