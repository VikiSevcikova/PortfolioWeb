sr.reveal('.project-card', {
    origin: 'bottom',
    distance: '100px',
    delay: 1000
 },50);

//if link which opens popup is clicked set overflow hidden for the body
const popuplinks = document.querySelectorAll('.card a');
for(let i = 0; i < popuplinks.length; i++){
    const popuplink = popuplinks[i];
    popuplink.addEventListener("click", (e)=>{
        console.log(popuplink);
        e.preventDefault();
        let dataPopup = popuplink.getAttribute('data-popup');
        // console.log(popuplink.getAttribute('data-popup') +'-'+ document.querySelector("[data-popup='"+dataPopup+"']"));
        document.getElementById(dataPopup).style.opacity = 1;
        document.getElementById(dataPopup).style.visibility = 'visible';
        let popupInner = document.getElementById(dataPopup).querySelector('.popup-inner');
        if(popupInner != null){
            popupInner.classList.add('display-popup');
        }else{
            document.getElementById(dataPopup).querySelector('.popup-wrap').classList.add('display-popup');
        }
        
        // document.getElementById(dataPopup).querySelector('.popup-wrap').classList.add('.display-popup');
        body.classList.add('overflow-hidden');
    });
}

const close = document.querySelectorAll('.popup .popup-close');

for(let i = 0; i < close.length; i++){
    let c = close[i];
    console.log(c);
    c.addEventListener('click', (e) => {
        body.classList.remove('overflow-hidden');
        console.log(c.parentElement);
        c.parentElement.style.opacity = 0;
        c.parentElement.style.visibility = 'hidden';
        // c.parentElement.querySelector('.popup-inner').classList.remove('display-popup');

        let popupInner = c.parentElement.querySelector('.popup-inner');
        if(popupInner != null){
            popupInner.classList.remove('display-popup');
        }else{
            c.parentElement.querySelector('.popup-wrap').classList.remove('display-popup');
        }

        const video = c.parentElement.querySelector('video');
        if(video != null && video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2){
            video.pause();
        }
    });
}

const websiteLinks = document.querySelectorAll('.popup-text .website-link');

for(let i = 0; i < websiteLinks.length; i++){
    let websiteLink = websiteLinks[i];
    websiteLink.addEventListener("mouseover", (e) => {
        websiteLink.childNodes[1].classList.remove("fa-laugh-beam");
        websiteLink.childNodes[1].classList.add("fa-grin-hearts");
    } );
    websiteLink.addEventListener("mouseout", (e) => {
        websiteLink.childNodes[1].classList.add("fa-laugh-beam");
        websiteLink.childNodes[1].classList.remove("fa-grin-hearts");
    } );
}
