

let user = [
    {username:"martin", password:"martin123", amount_to_pay:0},
    {username:"putra", password:"putra123", amount_to_pay:0},
    {username:"ruben pepeu", password:"ruben123", amount_to_pay:0},
    {username:"michael", password:"michael123", amount_to_pay:0},
];


user.push({username:"oogway", password:"dewasakura", amount_to_pay:0});
localStorage.setItem("array_user",JSON.stringify(user));
let arrayUser = (JSON.parse(localStorage.getItem('array_user')));

function loginValidation(){
    // window.location.href = "../Page/katalog.html";
    let usernameInput = document.getElementById('username').value;
    let passwordInput = document.getElementById('pass').value;


    for(let i=0; i<arrayUser.length;i++){
        let usernameData = arrayUser[i].username;
        let passwordData = arrayUser[i].password;
        
        if(usernameInput=="" || passwordInput=="" || usernameInput!=usernameData || passwordInput!= passwordData){
            if(i==3){
                alert("Username atau Password Salah");
            }
        }
        else{
            window.location.href = "../Page/katalog.html";
            localStorage.setItem('current_user', JSON.stringify(usernameData));
            break;
        }
    }

}