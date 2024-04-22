document.getElementById("navbar_buffer_vertical").style.height = (document.getElementById("navbar").clientHeight ) + "px";
document.getElementById("navbar_buffer_vertical").style.height = (document.getElementById("navbar").clientHeight ) + "px";

let button = document.getElementById("menubutton");
let home = document.getElementById("menuhome");
button.addEventListener("click", toHome)

function toHome() {
    button.style.animation = "menuHidden 0.5s forwards";
}