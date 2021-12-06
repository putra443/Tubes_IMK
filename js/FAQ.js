
function slideumum() {
    var a = document.getElementById("ikonumum1");
    var dropdown = document.getElementById("askumum1");

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