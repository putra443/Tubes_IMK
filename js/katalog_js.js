
//initiate array

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
for(var i=0;i<books.length;i++){
    var img = document.getElementById("img"+i);
    var title = document.getElementById("title"+i);
    var author = document.getElementById("author"+i);
    var price = document.getElementById("price"+i);
    var rating = document.getElementById("rating"+i);
    img.src = books[i].image_url;
    title.innerHTML = books[i].title;
    author.innerHTML = books[i].author;
    rating.innerHTML = "Rating : "+books[i].rating;
    price.innerHTML = "Rp." + books[i].price;
    
}

function sortByTitle(){
    books.sort((a, b) => a.title.localeCompare(b.title));
        
    for(var i=0;i<books.length;i++){
        var img = document.getElementById("img"+i);
        var title = document.getElementById("title"+i);
        var author = document.getElementById("author"+i);
        var price = document.getElementById("price"+i);
        var rating = document.getElementById("rating"+i);
        img.src = books[i].image_url;
        title.innerHTML = books[i].title;
        author.innerHTML = books[i].author;
        rating.innerHTML = "Rating : "+books[i].rating;
        price.innerHTML = "Rp." + books[i].price;
        
    }
} 

function sortByAuthor(){

    books.sort((a, b) => a.author.localeCompare(b.author));
        
    for(var i=0;i<books.length;i++){
        var img = document.getElementById("img"+i);
        var title = document.getElementById("title"+i);
        var author = document.getElementById("author"+i);
        var price = document.getElementById("price"+i);
        var rating = document.getElementById("rating"+i);
        img.src = books[i].image_url;
        title.innerHTML = books[i].title;
        author.innerHTML = books[i].author;
        rating.innerHTML = "Rating : "+books[i].rating;
        price.innerHTML = "Rp." + books[i].price;
        
    }
} 

function sortByRatingHighLow(){

    books.sort(function(a, b){
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
        img.src = books[i].image_url;
        title.innerHTML = books[i].title;
        author.innerHTML = books[i].author;
        rating.innerHTML = "Rating : "+books[i].rating;
        price.innerHTML = "Rp." + books[i].price;
        
    }
} 
function sortByRatingLowHigh(){

    books.sort(function(a, b){
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
        img.src = books[i].image_url;
        title.innerHTML = books[i].title;
        author.innerHTML = books[i].author;
        rating.innerHTML = "Rating : "+books[i].rating;
        price.innerHTML = "Rp." + books[i].price;
        
    }
} 
function sortByPriceLowHigh(){

    books.sort(function(a, b){
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
        img.src = books[i].image_url;
        title.innerHTML = books[i].title;
        author.innerHTML = books[i].author;
        rating.innerHTML = "Rating : "+books[i].rating;
        price.innerHTML = "Rp." + books[i].price;
        
    }
} 


const onClick = function() {
    console.log(this.id);
  }
  function addCart(){
    let id = this.id;
    console.log(books[id.substring(4)].in_cart);
    books[id.substring(4)].in_cart+=1;
    console.log(books[id.substring(4)].title +" in cart :  "+ books[id.substring(4)].in_cart);
    alert("books has been added to your shopping cart");
}
document.getElementById('cart0').onclick = addCart;
document.getElementById('cart1').onclick = addCart;
document.getElementById('cart2').onclick = addCart;
document.getElementById('cart3').onclick = addCart;
document.getElementById('cart4').onclick = addCart;







