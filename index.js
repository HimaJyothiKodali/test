function login()
{
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    if(user == 'hima' && pass == '123')
    {
        location.assign("file:///C:/Users/Meghanath%20Kodali/Desktop/Development/page.html");
    }
    else{
        window.alert("login failed");
    }
}