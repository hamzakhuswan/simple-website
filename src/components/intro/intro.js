import "./intro.scss";

const drope = document.getElementById("drop-btn");
const txt = document.getElementById("drop-txt");

drope.addEventListener("click", ()=>{
    if (txt.clientHeight) txt.style.height = 0;
    else txt.style.height = txt.scrollHeight + "px";
})