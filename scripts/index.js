var nav_lst = document.querySelectorAll("nav > li");
var sections = ["profile", "portfolio", "contact"];

nav_lst.forEach((li, index) => {
    li.addEventListener("click", function(){
        var active_li = document.querySelector("li.active");

        active_li.classList.remove("active");
        li.classList.toggle("active");
        moveToSection(sections[index]);
    });
});

function moveToSection(location) {
    document.getElementById(location).scrollIntoView({behavior: 'smooth'});
};

console.log(nav_lst)