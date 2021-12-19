// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }
  
// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }

let currentUser = JSON.parse(localStorage.getItem('current_user'));
document.getElementById('profil').innerHTML = "Hi, " + current_user.username;
function insertAmountToPay(){
    let total = currentUser.amount_to_pay;
    let sub_total = currentUser.amount_to_pay - (currentUser.amount_to_pay/10);
    document.getElementById('total').innerHTML = "Rp. "+total;   
    document.getElementById('sub-total').innerHTML = "Rp. "+sub_total;
}
insertAmountToPay();

function warning(){
    if(confirm("Are you sure you want to pay?")){
        // window.location.href = "../Page/payment_success.html";
        addPaymentInfo(); 
    }
    else{
        alert("Your payment has been canceled.");
    }
}

function addPaymentInfo(){
    let fullName = document.getElementById('fname').value;
    let email = document.getElementById('email').value;
    let adress = document.getElementById('adr').value;
    let payment_method = document.getElementById('select_virtual_account').value;
    console.log(fullName);
    console.log(email);
    console.log(adress);
    console.log(payment_method);
    let currentUserInfo = {fullName: fullName, email: email, address:adress, payment_method:payment_method}
    localStorage.setItem('user_payment_info',JSON.stringify(currentUserInfo));
    window.location.href ="../Page/payment_success.html";
}
