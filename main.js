function adduser(){
    user=document.getElementById("input_user").value;
    localStorage.setItem("input_user", user);
    window.location = "letsroom.html";
    
}