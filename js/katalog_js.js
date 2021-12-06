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

let books = [
    {title:"Book Cover Design Formula", tag:"BookCover", price:"120000", author:"Anita Nipane" , image_url:"../Image/61ZKNw0xixL.jpg", in_cart:"0"
    },{
        title:"Alices Adventures in Wonderland", tag:"Alice",  price:"111000", author:"Barnes & Noble" , image_url:"../Image/61ZKNw0xixL.jpg", in_cart:"0"
    },{
        title:"Dracula", tag:"Dracula", price:"200000", author:"Bram Stoker" , image_url:"../Image/61ZKNw0xixL.jpg", in_cart:"0"
    },{
        title:"Cats vs Dogs", tag:"cats", price:"150000", author:"Elizabeth Carney" , image_url:"../Image/61ZKNw0xixL.jpg", in_cart:"0"
    }
];

var img1 = document.getElementById('img1');
img1.src = books[0].image_url;

