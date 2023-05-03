let elm1 = document.getElementById("1");
let elm2 = document.getElementById("2");
let elm3 = document.getElementById("3");
let elm4 = document.getElementById("4");
let elm5 = document.getElementById("5");
let elm6 = document.getElementById("6");
let elm7 = document.getElementById("7");
let elm8 = document.getElementById("8");
let elm9 = document.getElementById("9");
let elm10 = document.getElementById("10");
let elm11 = document.getElementById("11");
let elm12 = document.getElementById("12");
let elm13 = document.getElementById("13");
let elm14 = document.getElementById("14");
let elm15 = document.getElementById("15");
let elm16 = document.getElementById("name");
let elm17 = document.getElementById("email");
let elm20 = document.getElementById("submit");
elm20.onclick = submit0;
function submit0(){
    elm17.innerHTML = "";
    if(elm1.checked == false && elm2.checked == false && elm3.checked == false && elm4.checked == false && elm5.checked == false && elm6.checked == false && elm7.checked == false && elm8.checked == false && elm9.checked == false && elm10.checked == false && elm11.checked == false && elm12.checked == false && elm13.checked == false && elm14.checked == false && elm15.checked == false){
        elm17.value = "Please Select Your Preferred Painting and Try Again.";
    }
}