

let current_user = JSON.parse(localStorage.getItem('current_user')) ;
document.getElementById('profil').innerHTML = "Hi, " + current_user.username;

//initiate array
myStorage = window.localStorage;

let books = [
    {title:"Perahu Kertas", rating:7.6 , price:150000, author:"Dee Lestari" , image_url:"../Image/Cover-Buku-Novel-Perahu-Kertas.jpg", in_cart:0
    },{
        title:"Koala Kumal", rating:8.5 , price:180000, author:"Raditya Dika" , image_url:"../Image/koala_kumal.jpg", in_cart:0
    },{
        title:"Laskar Pelangi", rating:5 ,  price:135000, author:"Andrea Hirata" , image_url:"../Image/Laskar_pelangi_sampul.jpg", in_cart:0
    },{
        title:"Surat Kecil Untuk Tuhan", rating:6.9 , price:200000, author:"Agnes Davonar" , image_url:"../Image/Surat_Kecil_Untuk_Tuhan.jpg", in_cart:0
    },{
        title:"Habibie & Ainun", rating:10 , price:280000, author:"Bacharuddin Jusuf Habibie" , image_url:"../Image/Habibie & Ainun.jpg", in_cart:0
    }
];

localStorage.setItem('array_books', JSON.stringify(books));
let booksStorage = (JSON.parse(localStorage.getItem('array_books')));

for(var i=0;i<booksStorage.length;i++){
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

function sortByTitle(){
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

function sortByAuthor(){

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

function sortByRatingHighLow(){

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


function addToCart0(){
    let currentUser = (JSON.parse(localStorage.getItem('current_user')));
    books[0].in_cart= books[0].in_cart + 1;
    currentUser.amount_to_pay = currentUser.amount_to_pay + parseInt(document.getElementById('price0').innerHTML.substring(3));
    localStorage.setItem('array_incart',JSON.stringify(books));
    localStorage.setItem('current_user',JSON.stringify(currentUser));
    console.log(currentUser.amount_to_pay);
    alert("A book has been added to your cart!");
}

function addToCart1(){
    let currentUser = (JSON.parse(localStorage.getItem('current_user')));
    books[1].in_cart= books[1].in_cart + 1;
    currentUser.amount_to_pay = currentUser.amount_to_pay + parseInt(document.getElementById('price0').innerHTML.substring(3));
    localStorage.setItem('array_incart',JSON.stringify(books));
    localStorage.setItem('current_user',JSON.stringify(currentUser));
    console.log(currentUser.amount_to_pay);
    alert("A book has been added to your cart!");
}

function addToCart2(){
    let currentUser = (JSON.parse(localStorage.getItem('current_user')));
    books[2].in_cart= books[2].in_cart + 1;
    currentUser.amount_to_pay = currentUser.amount_to_pay + parseInt(document.getElementById('price0').innerHTML.substring(3));
    localStorage.setItem('array_incart',JSON.stringify(books));
    localStorage.setItem('current_user',JSON.stringify(currentUser));
    console.log(currentUser.amount_to_pay);
    alert("A book has been added to your cart!");
}

function addToCart3(){
    let currentUser = (JSON.parse(localStorage.getItem('current_user')));
    books[3].in_cart= books[3].in_cart + 1;
    currentUser.amount_to_pay = currentUser.amount_to_pay + parseInt(document.getElementById('price0').innerHTML.substring(3));
    localStorage.setItem('array_incart',JSON.stringify(books));
    localStorage.setItem('current_user',JSON.stringify(currentUser));
    console.log(currentUser.amount_to_pay);
    alert("A book has been added to your cart!");
}

function addToCart4(){
    let currentUser = (JSON.parse(localStorage.getItem('current_user')));
    books[4].in_cart= books[4].in_cart + 1;
    currentUser.amount_to_pay = currentUser.amount_to_pay + parseInt(document.getElementById('price0').innerHTML.substring(3));
    localStorage.setItem('array_incart',JSON.stringify(books));
    localStorage.setItem('current_user',JSON.stringify(currentUser));
    console.log(currentUser.amount_to_pay);
    alert("A book has been added to your cart!");
}

function searchButton(){
    let input = document.getElementById('search_input').value;
    if(input == "Dracula" || input=="dracula" || "Bram Stoker" || "bram stoker"){
        window.location.href ="../Page/detailsBuku.html";
    }
    else{
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