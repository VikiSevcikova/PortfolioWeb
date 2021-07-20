const body = document.querySelector('body');
const sr = ScrollReveal( {
    duration: 2000,
    reset:false
 });

 sr.reveal('nav', {
    origin: 'top',
    distance: '100px'
 });
//  sr.reveal('.banner',{
//     origin: 'top',
//     distance: '100px'
//  });
 sr.reveal('#skills .grid div img',{
     duration: 1000,
    interval: 20

 });
 sr.reveal('#work .work-title',{
    origin: 'bottom',
    distance: '100px'
 });

 sr.reveal('#work .project div',{
    origin: 'bottom',
    distance: '100px'
 });
 sr.reveal('#work .project a',{
    origin: 'bottom',
    distance: '100px',
    delay: '500'
 });

 
const changeNavIconColor = (color) => {
    navIconDivs.forEach((div) => {
            div.style.background = color;
    });
}

const navIcon = document.querySelector(".nav-icon");
const navIconAnchor = document.querySelector(".nav-icon a");
const navIconDivs = document.querySelectorAll(".nav-icon a div");
const navLinks = document.querySelectorAll(".popup-nav-links li a");

let isNavOpen = false;
navIcon.addEventListener('click', () => {
    
    if(isNavOpen){
        isNavOpen = false;
        changeNavIconColor('white');
        navIconAnchor.href = '#';
        body.classList.remove('overflow-hidden');
    }else{
        isNavOpen = true;
        changeNavIconColor('black');
        navIconAnchor.href = '#popup-nav';
        body.classList.add('overflow-hidden');
    }
    // icon animation
    navIcon.classList.toggle('toggle');
    
});
navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
            if(isNavOpen){
                isNavOpen = false;
                changeNavIconColor('white');
                body.classList.remove('overflow-hidden');
            }
        // icon animation
        navIcon.classList.toggle('toggle');
    });
});


//set active class to the navbar link
const currentPage = location.href;
const navItems = document.querySelectorAll('.nav-links li a');
for(let i = 0; i<navItems.length; i++){
    if(navItems[i].href === currentPage){
        navItems[i].className = 'active';
    }
}

// //Banner
// const image = document.querySelector('.image img');
// image.addEventListener("mouseenter", e => {
//      //rotate effect
//      image.style.transform = 'rotateZ(-90deg)';
//  });
// image.addEventListener("mouseleave", e => {
//     //rotateback effect
//     image.style.transform = 'rotateZ(0deg)';
// });

let TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    let that = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    let elements = document.getElementsByClassName('typewrite');
    console.log(elements)
    for (var i=0; i<elements.length; i++) {
        let toRotate = elements[i].getAttribute('data-type');
        let period = elements[i].getAttribute('data-period');
        console.log(JSON.parse(toRotate))
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    let css = document.createElement("style");
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

//scroll up button
window.addEventListener('scroll', function(){
    let scroll = document.querySelector('.scrollUpBtn');
    scroll.classList.toggle('active', window.scrollY > 500);
    body.classList.toggle('perspective', window.scrollY < 500);
});

//tint
const images = document.querySelectorAll('#skills .grid img');
let isWhite = true;
for (const image of images) {
    image.addEventListener("mouseenter", e => {
        image.src = './img/logos/'+image.alt+'.png';
    });
    image.addEventListener("mouseleave", e => {
        image.src = './img/logos/w-'+image.alt+'.png';
    });
}
