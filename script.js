let sidebar = document.getElementById('nav_bar');

sidebar.addEventListener("click" ,()=>{
    let slidediv = document.querySelector('.nav_slidebar');
    let icon = document.querySelector('.nav_bar');
    let container = document.querySelector('.container');
    icon.classList.toggle('fa-xmark');
    if(icon.classList.contains('fa-xmark')){
        slidediv.style.display = "block";
        container.classList.add('container_margine');
    }
    else{
        slidediv.style.display = "none";
        container.classList.remove('container_margine');
    }

} )



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};