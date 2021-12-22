let current_user = JSON.parse(localStorage.getItem('current_user')) ;
document.getElementById('profil').innerHTML = "Hi, " + current_user.username;

//initiate array
myStorage = window.localStorage;

let books = [
    {title:"Book Cover Design Formula", rating:6 , price:120000, author:"Anita Nipane" , image_url:"../Image/61ZKNw0xixL.jpg", in_cart:0
    },{
        title:"Dracula", rating:8.5 , price:200000, author:"Bram Stoker" , image_url:"../Image/91wOUFZCE+L.jpg", in_cart:0
    },{
        title:"Alices Adventures in Wonderland", rating:9 ,  price:111000, author:"Barnes & Noble" , image_url:"../Image/9781435166240_p2_v3_s550x406.jpg", in_cart:0
    },{
        title:"Cats vs Dogs", rating:7 , price:150000, author:"Elizabeth Carney" , image_url:"../Image/maxresdefault.jpg", in_cart:0
    },{
        title:"Enchanted", rating:9 , price:250000, author:"Tennant Redbank" , image_url:"../Image/51WcTS6kyzL.jpg", in_cart:0
    }
];

localStorage.setItem('array_books', JSON.stringify(books));
let booksStorage = (JSON.parse(localStorage.getItem('array_books')));

for(var i=0;i<booksStorage.length;i++) {
    var img = document.getElementById("img"+i);
    var title = document.getElementById("title"+i);
    var author = document.getElementById("author"+i);
    var price = document.getElementById("price"+i);
    var rating = document.getElementById("rating"+i);
    img.src = booksStorage[i].image_url;
    title.innerHTML = booksStorage[i].title;
    author.innerHTML = booksStorage[i].author;
    rating.innerHTML = "Rating : "+booksStorage[i].rating;
    price.innerHTML = "Rp." + booksStorage[i].price;
}

function sortByTitle() {
    booksStorage.sort((a, b) => a.title.localeCompare(b.title));
        
    for(var i=0;i<books.length;i++){
        var img = document.getElementById("img"+i);
        var title = document.getElementById("title"+i);
        var author = document.getElementById("author"+i);
        var price = document.getElementById("price"+i);
        var rating = document.getElementById("rating"+i);
        img.src = booksStorage[i].image_url;
        title.innerHTML = booksStorage[i].title;
        author.innerHTML = booksStorage[i].author;
        rating.innerHTML = "Rating : "+booksStorage[i].rating;
        price.innerHTML = "Rp." + booksStorage[i].price;
    }
} 

function sortByAuthor() {
    booksStorage.sort((a, b) => a.author.localeCompare(b.author));
        
    for(var i=0;i<books.length;i++){
        var img = document.getElementById("img"+i);
        var title = document.getElementById("title"+i);
        var author = document.getElementById("author"+i);
        var price = document.getElementById("price"+i);
        var rating = document.getElementById("rating"+i);
        img.src = booksStorage[i].image_url;
        title.innerHTML = booksStorage[i].title;
        author.innerHTML = booksStorage[i].author;
        rating.innerHTML = "Rating : "+booksStorage[i].rating;
        price.innerHTML = "Rp." + booksStorage[i].price;
    }
} 

function sortByRatingHighLow() {
    booksStorage.sort(function(a, b){
        if(a.rating > b.rating) { return -1; }
        if(a.rating < b.rating) { return 1; }
        return 0;
    })
        
    for(var i=0;i<books.length;i++){
        var img = document.getElementById("img"+i);
        var title = document.getElementById("title"+i);
        var author = document.getElementById("author"+i);
        var price = document.getElementById("price"+i);
        var rating = document.getElementById("rating"+i);
        img.src = booksStorage[i].image_url;
        title.innerHTML = booksStorage[i].title;
        author.innerHTML = booksStorage[i].author;
        rating.innerHTML = "Rating : "+booksStorage[i].rating;
        price.innerHTML = "Rp." + booksStorage[i].price;
    }
} 

function sortByRatingLowHigh(){
    booksStorage.sort(function(a, b){
        if(a.rating < b.rating) { return -1; }
        if(a.rating > b.rating) { return 1; }
        return 0;
    })
        
    for(var i=0;i<books.length;i++){
        var img = document.getElementById("img"+i);
        var title = document.getElementById("title"+i);
        var author = document.getElementById("author"+i);
        var price = document.getElementById("price"+i);
        var rating = document.getElementById("rating"+i);
        img.src = booksStorage[i].image_url;
        title.innerHTML = booksStorage[i].title;
        author.innerHTML = booksStorage[i].author;
        rating.innerHTML = "Rating : "+booksStorage[i].rating;
        price.innerHTML = "Rp." + booksStorage[i].price;
    }
} 

function sortByPriceLowHigh(){
    booksStorage.sort(function(a, b){
        if(a.price < b.price) { return -1; }
        if(a.price > b.price) { return 1; }
        return 0;
    })
        
    for(var i=0;i<books.length;i++){
        var img = document.getElementById("img"+i);
        var title = document.getElementById("title"+i);
        var author = document.getElementById("author"+i);
        var price = document.getElementById("price"+i);
        var rating = document.getElementById("rating"+i);
        img.src = booksStorage[i].image_url;
        title.innerHTML = booksStorage[i].title;
        author.innerHTML = booksStorage[i].author;
        rating.innerHTML = "Rating : "+booksStorage[i].rating;
        price.innerHTML = "Rp." + booksStorage[i].price;
    }
} 

function addToCart0() {
    let currentUser = (JSON.parse(localStorage.getItem('current_user')));
    books[0].in_cart= books[0].in_cart + 1;
    currentUser.amount_to_pay = currentUser.amount_to_pay + parseInt(document.getElementById('price0').innerHTML.substring(3));
    localStorage.setItem('array_incart',JSON.stringify(books));
    localStorage.setItem('current_user',JSON.stringify(currentUser));
    console.log(currentUser.amount_to_pay);
}

function addToCart1() {
    let currentUser = (JSON.parse(localStorage.getItem('current_user')));
    books[1].in_cart= books[1].in_cart + 1;
    currentUser.amount_to_pay = currentUser.amount_to_pay + parseInt(document.getElementById('price1').innerHTML.substring(3));
    localStorage.setItem('array_incart',JSON.stringify(books));
    localStorage.setItem('current_user',JSON.stringify(currentUser));
    console.log(currentUser.amount_to_pay);
}

function addToCart2() {
    let currentUser = (JSON.parse(localStorage.getItem('current_user')));
    books[2].in_cart= books[2].in_cart + 1;
    currentUser.amount_to_pay = currentUser.amount_to_pay + parseInt(document.getElementById('price2').innerHTML.substring(3));
    localStorage.setItem('array_incart',JSON.stringify(books));
    localStorage.setItem('current_user',JSON.stringify(currentUser));
    console.log(currentUser.amount_to_pay);
    alert("A book has been added to your cart!");
}

function addToCart3() {
    let currentUser = (JSON.parse(localStorage.getItem('current_user')));
    books[3].in_cart= books[3].in_cart + 1;
    currentUser.amount_to_pay = currentUser.amount_to_pay + parseInt(document.getElementById('price3').innerHTML.substring(3));
    localStorage.setItem('array_incart',JSON.stringify(books));
    localStorage.setItem('current_user',JSON.stringify(currentUser));
    console.log(currentUser.amount_to_pay);
    alert("A book has been added to your cart!");
}

function addToCart4() {
    let currentUser = (JSON.parse(localStorage.getItem('current_user')));
    books[4].in_cart= books[4].in_cart + 1;
    currentUser.amount_to_pay = currentUser.amount_to_pay + parseInt(document.getElementById('price4').innerHTML.substring(3));
    localStorage.setItem('array_incart',JSON.stringify(books));
    localStorage.setItem('current_user',JSON.stringify(currentUser));
    console.log(currentUser.amount_to_pay);
    alert("A book has been added to your cart!");
}

function searchButton() {
    let input = document.getElementById('search_input').value;
    if(input == "Dracula" || input == "dracula" || input == "Bram Stoker" || input == "bram stoker" || input == "1561385158" || input == "9781561385157"){
        window.location.href ="../Page/detailsBuku2.html";
    }
    else {
        alert("no books were found, try searching another title");
    }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function buyNow0(){
    let currentUser = (JSON.parse(localStorage.getItem('current_user')));
    currentUser.amount_to_pay = currentUser.amount_to_pay + parseInt(document.getElementById('price0').innerHTML.substring(3));
    localStorage.setItem('current_user',JSON.stringify(currentUser));
    console.log(currentUser.amount_to_pay);
}

const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

