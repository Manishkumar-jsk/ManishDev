function openDinner(){
    document.getElementById("dinner").style.display="flex";
    document.getElementById("lunch").style.display="none";
}
function openDrink(){
    document.getElementById("drinks").style.display="flex";
    document.getElementById("dinner").style.display="none";
}
function openDesserts(){
    document.getElementById("desserts").style.display="flex";
    document.getElementById("drinks").style.display="none";
}
//********* fixed navbar **********
const navbar = document.getElementById("nav-bar");
window.addEventListener("scroll",function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navbar.classList.add("fixed-bar");
    } else{
        navbar.classList.remove("fixed-bar");
    }
});
//smooth scrolling
document.querySelector(".nav__links").addEventListener('click',function(e){
    console.log(e.target);
    e.preventDefault();
    if(e.target.classList.contains("nav__link")){
        const id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({behavior:'smooth'});
    }
})
//reveal section
const sections = document.querySelectorAll(".section");
  const revealSection = function(entries,obsever){
    const [entry] = entries;
    if(!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    obsever.unobserve(entry.target);
    console.log(entry);
  }
  const revealObserver = new IntersectionObserver(revealSection,{
    root:null,
    threshold:0.20,
  });
sections.forEach(function(section){
  revealObserver.observe(section);
  section.classList.add("section--hidden");
})