function openDinner(){
    document.getElementById("dinner").style.display="flex";
    document.getElementById("lunch").style.display="none";
    document.getElementById("drinks").style.display="none";
}
function openDrinks(){
    document.getElementById("drinks").style.display="flex";
    document.getElementById("dinner").style.display="none";
    document.getElementById("desserts").style.display="none";
}
function openDesserts(){
    document.getElementById("desserts").style.display="flex";
    document.getElementById("drinks").style.display="none";
    document.getElementById("dinner").style.display="none";
}
function openLunch(){
    document.getElementById("lunch").style.display="flex";
    document.getElementById("desserts").style.display="none";
    document.getElementById("drinks").style.display="none";
}