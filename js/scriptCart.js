let storageBookCart = (JSON.parse(localStorage.getItem('array_incart')));
let current_user_navbar = JSON.parse(localStorage.getItem('current_user')) ;
document.getElementById('profil').innerHTML = "Hi, " + current_user_navbar.username;
for(i=0;i<storageBookCart.length;i++) {
    if(storageBookCart[i].in_cart=1){
        var display = document.getElementById("item"+i);
        var img = document.getElementById("img"+i);
        var title = document.getElementById("title"+i);
        var author = document.getElementById("author"+i);
        var price = document.getElementById("price"+i);
        var rating = document.getElementById("rating"+i);
        display.style.display = "flex";
        img.src = storageBookCart[i].image_url;
        title.innerHTML = storageBookCart[i].title;
        author.innerHTML = storageBookCart[i].author;
        rating.innerHTML = "Rating : "+storageBookCart[i].rating;
        price.innerHTML = "Rp." + storageBookCart[i].price;
        price.style.color = "#990000";
    }
}

function checkbox0() {
    let checkbox = document.getElementById("checkbox0");
    let checkValue = 0;
    if(checkbox.checked) {
        checkValue=1;
        if(checkValue==1) {
            document.getElementById('item0').style.backgroundColor = "#33cc66";
        }
    }
    else {
        checkValue = 0;
        document.getElementById('item0').style.backgroundColor = "#999999";
    }
}

function checkbox1() {
    let checkbox = document.getElementById("checkbox1");
    let checkValue = 0;
    if(checkbox.checked) {
        checkValue=1;
        if(checkValue==1) {
            document.getElementById('item1').style.backgroundColor = "#33cc66";
        }
    }
    else {
        checkValue = 0;
        document.getElementById('item1').style.backgroundColor = "#999999";
    }
}

function deleteCart0() {
    alert("A book has been removed from your cart!");
    document.getElementById("item0").style.display = "none";
    updateStorage();
}

function updateStorage0() {
    let currentUser = (JSON.parse(localStorage.getItem('current_user')));
    currentUser.amount_to_pay = currentUser.amount_to_pay - storageBookCart[0].price;
    storageBookCart[0].in_cart= 0;
    localStorage.setItem('array_incart',JSON.stringify(storageBookCart));
    localStorage.setItem('current_user',JSON.stringify(currentUser));
    window.location.href="../Page/cart.html"
}

function deleteCart1() {
    alert("A book has been removed from your cart!");
    document.getElementById("item1").style.display = "none";
    updateStorage();
}

function updateStorage1() {
    let currentUser = (JSON.parse(localStorage.getItem('current_user')));
    currentUser.amount_to_pay = currentUser.amount_to_pay - storageBookCart[1].price;
    storageBookCart[1].in_cart= 0;
    localStorage.setItem('array_incart',JSON.stringify(storageBookCart));
    localStorage.setItem('current_user',JSON.stringify(currentUser));
    window.location.href="../Page/cart.html"
}
let currentUser = (JSON.parse(localStorage.getItem('current_user')));
document.getElementById('sub_total').innerHTML = " Subtotal : Rp " + currentUser.amount_to_pay;
    document.getElementById('total_price').innerHTML = " Total : Rp. " + ((currentUser.amount_to_pay/10)+currentUser.amount_to_pay);
    console.log(currentUser.amount_to_pay);
