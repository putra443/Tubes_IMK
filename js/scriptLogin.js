let booksStorage = (JSON.parse(localStorage.getItem('array_books')));
let user = [
    {username:"martin", password:"martin123"},
    {username:"putra", password:"putra123"},
    {username:"ruben pepeu", password:"ruben123"},
    {username:"michael", password:"michael123"},
];
localStorage.setItem("array_user",JSON.stringify(user));
let arrayUser = (JSON.parse(localStorage.getItem('array_user')));
function loginValidation(){
    // window.location.href = "../Page/katalog.html";
    let usernameInput = document.getElementById('username').value;
    let passwordInput = document.getElementById('pass').value;


    for(let i=0; i<arrayUser.length;i++){
        let usernameData = arrayUser[i].username;
        let passwordData = arrayUser[i].password;
        
        if(usernameInput=="" || passwordInput==""){
            alert("Username atau Password Salah");
            break;
        }
        else if(usernameData == usernameInput && passwordData == passwordInput){
            window.location.href = "../Page/katalog.html";
            localStorage.setItem('current_user', JSON.stringify(usernameData));
            break;
        }
        else if((usernameData != usernameInput || passwordData != passwordInput)&& i==4){
            alert("Username atau Password Salah");  
        }

        
    }

}