sr.reveal('.photo');
sr.reveal('.info',{
    delay: 1000
 });
 sr.reveal('.timeline-container');


const timeline = function(timelineElement) {
      let selectors = {
        id: timelineElement.querySelector(".bg-image"),
        item: timelineElement.querySelectorAll(".timeline-item"),
        activeClass: "timeline-item-active",
        img: ".timeline-img"
      };
      selectors.item[0].classList.add(selectors.activeClass);
      selectors.id.style.backgroundImage = 
        `url( 
          ${selectors.item[0].querySelector(selectors.img).getAttribute('src')}
          )`;
      
      window.addEventListener('scroll', event => {
        selectors.item.forEach((element, i) => {
          let position = element.getBoundingClientRect();

          if (position.top >= 0 && position.bottom <= window.innerHeight) {
            if(i > 0) {
              selectors.item[i-1].classList.remove(selectors.activeClass);
            }
            selectors.id.style.backgroundImage = 
            `url( 
              ${element.querySelector(selectors.img).getAttribute('src')}
              )`;
            element.classList.add(selectors.activeClass);
          } else if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.remove(selectors.activeClass);
          }
        });
      });
  };
  
timeline(document.getElementById('timeline-1'));
  

  function elementInViewport(e) {
    let top = e.offsetTop;
    let height = e.offsetHeight;
  
    while(e.offsetParent) {
      e = e.offsetParent;
      top += e.offsetTop;
    }
  
    return (top + height) <= (window.pageYOffset + window.innerHeight +100);
  }

  window.addEventListener("scroll", () => {
    const tag = document.querySelector('.info');
    const spans = document.querySelectorAll('.card1 .info .text span');

    if (elementInViewport(tag)) {
      //set data-scroll to know when to start the animation
      for(let i = 0; i < spans.length; i++){
        let span = spans[i];
        span.setAttribute('data-scroll', 'in');
      }
    } else {
      for(let i = 0; i < spans.length; i++){
        let span = spans[i];
        span.setAttribute('data-scroll', 'out');
      }
    }
  });