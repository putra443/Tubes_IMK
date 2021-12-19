let current_user = JSON.parse(localStorage.getItem('current_user')) ;
document.getElementById('profil').innerHTML = "Hi, " + current_user.username;