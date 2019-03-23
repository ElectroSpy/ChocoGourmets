var a=1
function DayNight() {
    var nav =document.getElementById("nav");
    nav.classList.toggle("nnav");
    if(a===1){
    document.getElementById("DN").src="Img/sun.png";
    a=2
    }
    else{
    document.getElementById("DN").src="Img/moon.png";
    a=1
    }
}
function toggleVisibleClass(){
    document.querySelector("nav ul li").classList.toggle("visible");
}
document.querySelector("#menuburger").addEventListener("click", toggleVisibleClass);