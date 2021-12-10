
let storageBookCart = (JSON.parse(localStorage.getItem('array_incart')));

for(i=0;i<storageBookCart.length;i++){
    if(storageBookCart[i].in_cart>0){
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
function checkbox0(){
    let checkbox = document.getElementById("checkbox0");
    let checkValue = 0;
    if(checkbox.checked){
        checkValue=1;
        if(checkValue==1){
            document.getElementById('item0').style.backgroundColor = "#33cc66";
        }
    }
    else{
        checkValue = 0;
        document.getElementById('item0').style.backgroundColor = "#999999";
    }
}
function checkbox1(){
    let checkbox = document.getElementById("checkbox1");
    let checkValue = 0;
    if(checkbox.checked){
        checkValue=1;
        if(checkValue==1){
            document.getElementById('item1').style.backgroundColor = "#33cc66";
        }
    }
    else{
        checkValue = 0;
        document.getElementById('item1').style.backgroundColor = "#999999";
    }
}

