let currentUserPaymentInfo = JSON.parse(localStorage.getItem('user_payment_info'));
let current_user = JSON.parse(localStorage.getItem('current_user')) ;
document.getElementById('profil').innerHTML = "Hi, " + current_user.username;
function loadPaymentInfo(){
    document.getElementById('fname').innerHTML = "Fullname: "+currentUserPaymentInfo.fullName;
    document.getElementById('email').innerHTML = "Email: "+currentUserPaymentInfo.email;
    document.getElementById('address').innerHTML = "Address: "+currentUserPaymentInfo.address;
    document.getElementById('payment_method').innerHTML = "Payment Method: "+currentUserPaymentInfo.payment_method;
}
loadPaymentInfo();