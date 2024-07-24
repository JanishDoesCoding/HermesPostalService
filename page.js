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
//YOUR FIREBASE LINKS

user= localStorage.getItem("input_user");
room= localStorage.getItem("roomname");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag ="<h4 class='message_h4'>"+"</h4>";
like_button="<button onclick='Updatelike()' class='btn btn-warning' id="+firebase_message_id+" value="+like+"onclick='like(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
    } });  }); }
getData();

function send()
{
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user,
          message:msg,
          like:0,
    });

    document.getElementById("msg").value=""
}

function Updatelike(message_id)
{
    console.log("clicked on like button woohoo -" + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);
