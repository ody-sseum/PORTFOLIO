var nav_lst = document.querySelectorAll("nav > li");
var sec_lst = document.querySelectorAll("main > section");
var main_sec = document.querySelector("main");
var sec_height = [];
var sections = ["profile", "portfolio", "contact"];

nav_lst.forEach((li, index) => {
    li.addEventListener("click", function(){
        var active_li = document.querySelector("li.active");

        active_li.classList.remove("active");
        li.classList.toggle("active");
        moveToSection(sections[index]);
    });
});

document.querySelectorAll(".card-body > h1").forEach(el => {
    var len = el.innerHTML.length;
    if (len > 17) {
        el.style.fontSize = ((len / 17)*4.5) + "em";
        console.log(len);
        console.log(el.style.fontSize);
    }
});

function moveToSection(location) {
    document.getElementById(location).scrollIntoView({behavior: 'smooth'});
};

main_sec.addEventListener("scroll", function(){
    sec_lst.forEach((section, index) => {
        var rect = section.getBoundingClientRect();
        var sec_top = rect.top;
        var sec_bot = rect.bottom;

        var isVisible = (sec_top <= window.innerHeight) && (sec_bot > 0);

        if(isVisible){
            var active_li = document.querySelector("li.active");

            active_li.classList.remove("active");
            nav_lst[index].classList.toggle("active");
        }
    });
});