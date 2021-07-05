const openbtn = document.querySelector(".open-btn");
const modeloverlay = document.querySelector(".modal-overlay");
const closebtn = document.querySelector(".close-btn");
openbtn.addEventListener("click",function(){
    modeloverlay.classList.add("show-model");
})
closebtn.addEventListener("click",function(){
    modeloverlay.classList.remove("show-model");
})