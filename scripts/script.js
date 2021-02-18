window.onload = () => {
    const transtition_elem = document.querySelector('.transition');
    const navLinkAnchors = document.querySelectorAll(".nav-links li a");

    setTimeout(() => {
        transtition_elem.classList.remove('is-active');
    }, 500);

    for(let i = 0; i < navLinkAnchors.length; i++){
        const anchor = navLinkAnchors[i];
        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;
            console.log(target);
            transtition_elem.classList.add('is-active');
            setTimeout(() => {
                window.location.href = target;
            }, 500);
        })
    }
}

const body = document.querySelector('body');
const sr = ScrollReveal( {
    duration: 2000,
    reset:false
 });

 sr.reveal('nav', {
    origin: 'top',
    distance: '100px'
 });
 sr.reveal('.banner',{
    origin: 'top',
    distance: '100px'
 });

const navSlide = () => {
    const navIcon = document.querySelector(".nav-icon");
    const navIconAnchor = document.querySelector(".nav-icon a");
    // const navLinksDiv = document.querySelector(".nav-links");
//     const navLinks = document.querySelectorAll(".nav-links li");
    const navIconDivs = document.querySelectorAll(".nav-icon a div");
//     const contactDiv = document.querySelector(".contact");

    navIcon.addEventListener('click', () => {
        
        //change color of icon
        navIconDivs.forEach((div, index) => {
            if(div.style.background == 'black'){
                div.style.background = 'white';
                navIconAnchor.href = '#';
                body.classList.remove('overflow-hidden');
            }else{
                div.style.background = 'black';
                navIconAnchor.href = '#popup-nav';
                body.classList.add('overflow-hidden');
            }
        });
        
        // icon animation
        navIcon.classList.toggle('toggle');
        
    });
}

//set active class to the navbar link
const currentPage = location.href;
const navItems = document.querySelectorAll('.nav-links li a');
for(let i = 0; i<navItems.length; i++){
    if(navItems[i].href === currentPage){
        navItems[i].className = 'active';
    }
}

//Banner 
const banner = document.querySelector('.banner');
const container = document.querySelector('.container');
//items
const image = document.querySelector('.image img');
const title = document.querySelector('.image .title h1');


//moving animation
container.addEventListener("mousemove", (e)=>{
    let x = (window.innerWidth/2 - e.pageX) /20;
    let y = (window.innerHeight/2 - e.pageY)/20;

    container.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;

});

//animate in
container.addEventListener("mouseenter", e => {
    container.style.transition = 'none';
    //popout effect
    image.style.transform = 'translateZ(40px)';
    title.style.transform = 'translateZ(50px)';
});
image.addEventListener("mouseenter", e => {
     //rotate effect
     image.style.transform = 'rotateZ(-90deg)';
 });

//animate out
container.addEventListener("mouseleave", e => {
    container.style.transition = 'all 0.5s ease';
    container.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popback effect
    image.style.transform = 'translateZ(0px)';
    title.style.transform = 'translateZ(0px)';
});
image.addEventListener("mouseleave", e => {
    //rotateback effect
    image.style.transform = 'rotateZ(0deg)';
});

//scroll up button
window.addEventListener('scroll', function(){
    let scroll = document.querySelector('.scrollUpBtn');
    scroll.classList.toggle('active', window.scrollY > 500);
    body.classList.toggle('perspective', window.scrollY < 500);
});

const app = () => {
    navSlide();
}

app();