var firebaseConfig = {
    apiKey: "AIzaSyC4cN5MDzTyar74Vz9bpOWcA46Id8HEyJ0",
    authDomain: "kwitteruno.firebaseapp.com",
    databaseURL: "https://kwitteruno-default-rtdb.firebaseio.com",
    projectId: "kwitteruno",
    storageBucket: "kwitteruno.appspot.com",
    messagingSenderId: "969596170338",
    appId: "1:969596170338:web:66e8f92fcd917d67ec213b",
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 user= localStorage.getItem("input_user");
document.getElementById("input_user").innerHTML = "Welcome,"+ user+ "!"

function addRoom(){
      room_name = document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"adding the room"
      });
      localStorage.setItem("roomname",room_name);
      window.location="kwitter_room.html";
}
function getData(){
      firebase.database().ref("/").on("value", function (snapshot){document.getElementById("output").innerHTML="";snapshot.forEach(function(childSnapshot){childKey=childSnapshot.key;
            ROOM_name = childKey;
            console.log("Room Name"+ROOM_name);
            row = "<div class='roomnamer' id="+ROOM_name+"onclick =redirectToRoomName(this.id)'>#"+ROOM_name+"</div> <hr>";
            document.getElementById("output").innerHTML+=row
      });});
}

getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location="letspage.html";
}

function logout(){
      localStorage.removeItem("input_user");
      localStorage.removeItem("roomname");
      window.location = "index.html";
}