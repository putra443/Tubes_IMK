
let user = [
    {username:"martin", password:"martin123", amount_to_pay:0, address:"Jl Kemangi no 25"},
    {username:"putra", password:"putra123", amount_to_pay:0, address:"Jl Dipatiukur no 34"},
    {username:"ruben", password:"ruben123", amount_to_pay:0, address:"Jl Salendro no 55"},
    {username:"michael", password:"michael123", amount_to_pay:0,address:"Jl Cihampelas no 66"},
];

user.push({username:"oogway", password:"dewasakura", amount_to_pay:0, address:"Jl Kuil Panda no 01"});
localStorage.setItem("array_user",JSON.stringify(user));
let arrayUser = (JSON.parse(localStorage.getItem('array_user')));

function loginValidation() {
    let usernameInput = document.getElementById('username').value;
    let passwordInput = document.getElementById('pass').value;

    for(let i=0; i<arrayUser.length;i++) {
        let usernameData = arrayUser[i].username;
        let passwordData = arrayUser[i].password;
        let userCompleteData = arrayUser[i];
        
        if(usernameInput=="" || passwordInput=="" || usernameInput!=usernameData || passwordInput!= passwordData) {
            if(i==3) {
                Swal.fire("Alert","Wrong Password or Username","warning");
            }
        }
        else {
            window.location.href = "../Page/katalog.html";
            localStorage.setItem('current_user', JSON.stringify(userCompleteData));
            break;
        }
    }
}