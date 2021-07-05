const arrow = document.querySelector(".arrow");
const scrollTo = document.querySelector("#about__me");
const cycle = document.querySelector(".cycle");

arrow.addEventListener("click", function(e) {
    scrollTo.scrollIntoView({ behavior: 'smooth' })
});
window.addEventListener('scroll', function() {
        const el = document.querySelector("#about__me");
        const doc = el.getBoundingClientRect().top;
        //console.log(doc);
        const mk = window.pageYOffset;
        const el1 = document.querySelector(".manish");
        const add = function(height) {
            if (height > doc) {
                el1.classList.add("cycle1");
            } else {
                el1.classList.remove("cycle1");
            }
        }

        add(685);
    })
    //reveal element on scrolling
    /*const sections = document.querySelectorAll(".section");
    const revealSection = function(entries, obsever) {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        entry.target.classList.remove("section--hidden");
        obsever.unobserve(entry.target);
        //console.log(entry);
    }
    const revealObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.10,
    });
    sections.forEach(function(section) {
        revealObserver.observe(section);
        // section.classList.add("section--hidden");
    })*/