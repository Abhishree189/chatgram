function login()
{
    user_name = document.getElementById("username").value;

    localStorage.setItem("user_n" , user_name);

    window.location = "kwitter_room.html" ;
}