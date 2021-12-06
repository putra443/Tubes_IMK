

function directPageFilterTitle(){
    window.location.replace("../Page/katalogSortedTitle.html");
}
function directPageFilterAuthor(){
    window.location.replace("../Page/katalog.html");
}
function directPageFilterRating1(){
    window.location.replace("../Page/katalog.html");
}
function directPageFilterRating2(){
    window.location.replace("../Page/katalog.html");
}
//initiate array

let books = [
    {title:"Book Cover Design Formula", tag:"BookCover", price:"120000", author:"Anita Nipane" , image_url:"../Image/61ZKNw0xixL.jpg", in_cart:0
    },{
        title:"Alices Adventures in Wonderland", tag:"Alice",  price:"111000", author:"Barnes & Noble" , image_url:"../Image/9781435166240_p2_v3_s550x406.jpg", in_cart:0
    },{
        title:"Dracula", tag:"Dracula", price:"200000", author:"Bram Stoker" , image_url:"../Image/91wOUFZCE+L.jpg", in_cart:0
    },{
        title:"Cats vs Dogs", tag:"cats", price:"150000", author:"Elizabeth Carney" , image_url:"../Image/maxresdefault.jpg", in_cart:0
    },{
        title:"Enchanted", tag:"enchanted", price:"250000", author:"Tennant Redbank" , image_url:"../Image/51WcTS6kyzL.jpg", in_cart:0
    }
];
for(var i=0;i<books.length;i++){
    var img = document.getElementById("img"+i);
    var title = document.getElementById("title"+i);
    var author = document.getElementById("author"+i);
    var price = document.getElementById("price"+i);
    img.src = books[i].image_url;
    title.innerHTML = books[i].title;
    author.innerHTML = books[i].author;
    price.innerHTML = "Rp." + books[i].price;
    
}

function sortByTitle(){
    books.sort((a, b) => a.title.localeCompare(b.title));
        
    for(var i=0;i<books.length;i++){
        var img = document.getElementById("img"+i);
        var title = document.getElementById("title"+i);
        var author = document.getElementById("author"+i);
        var price = document.getElementById("price"+i);
        img.src = books[i].image_url;
        title.innerHTML = books[i].title;
        author.innerHTML = books[i].author;
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







