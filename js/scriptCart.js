let checkbox = document.getElementById("checkbox0");
function checkboxGG(){
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
