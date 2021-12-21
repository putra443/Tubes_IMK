let current_user = JSON.parse(localStorage.getItem('current_user')) ;
document.getElementById('profil').innerHTML = "Hi, " + current_user.username;
document.getElementById('username').innerHTML = "Username : " + current_user.username;
document.getElementById('pwprofil').innerHTML = "Password : " + current_user.password;
document.getElementById('email').innerHTML = "Email : " + current_user.username + "@gmail.com";