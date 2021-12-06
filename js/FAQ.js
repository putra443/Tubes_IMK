
function slideumum() {
    var a = document.getElementById("ikon1");
    var dropdown = document.getElementById("ask1");

    if (a.className == "fa fa-angle-double-up") {
        a.className = "fa fa-angle-double-down";
        dropdown.style.display = "none";
    }
    else {
        a.className = "fa fa-angle-double-up";
        dropdown.style.display = "flex";
    }
}

function slidepay() {
    var a = document.getElementById("ikonpay1");
    var dropdown = document.getElementById("askpay1");

    if (a.className == "fa fa-angle-double-up") {
        a.className = "fa fa-angle-double-down";
        dropdown.style.display = "none";
    }
    else {
        a.className = "fa fa-angle-double-up";
        dropdown.style.display = "flex";
    }
}

function slidepesan() {
    var a = document.getElementById("ikonpesan1");
    var dropdown = document.getElementById("askpesan1");

    if (a.className == "fa fa-angle-double-up") {
        a.className = "fa fa-angle-double-down";
        dropdown.style.display = "none";
    }
    else {
        a.className = "fa fa-angle-double-up";
        dropdown.style.display = "flex";
    }
}