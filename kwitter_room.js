
//ADD YOUR FIREBASE LINKS HERE
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
document.getElementById("welcom_user").innerHTML="welcome " + user_name +"!";
    function addroom(){
     room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "adding9 room name"
});
localStorage.setItem("room_name" , room_name);

window.location = "kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -" + Room_names) ;
row = "<div class ='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "<div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
} 
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";

}    