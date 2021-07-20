sr.reveal('.photo');
sr.reveal('.info',{
    delay: 1000
 });
 sr.reveal('.timeline-container');


(function($) {
    $.fn.timeline = function() {
      var selectors = {
        id: $(this).find(".bg-image"),
        item: $(this).find(".timeline-item"),
        activeClass: "timeline-item-active",
        img: ".timeline-img"
      };
      selectors.item.eq(0).addClass(selectors.activeClass);
      selectors.id.css(
        "background-image",
        "url(" +
          selectors.item
            .first()
            .find(selectors.img)
            .attr("src") +
          ")"
      );
      
      var itemLength = selectors.item.length;
      $(window).scroll(function() {
        var max, min;
        var pos = $(this).scrollTop();
        selectors.item.each(function(i) {
          min = $(this).offset().top;
          max = $(this).height() + $(this).offset().top;
          var that = $(this);
          if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
            selectors.item.removeClass(selectors.activeClass);
            selectors.id.css(
              "background-image",
              "url(" +
                selectors.item
                  .last()
                  .find(selectors.img)
                  .attr("src") +
                ")"
            );
            selectors.item.last().addClass(selectors.activeClass);
          } else if (pos <= max - 60 && pos >= min) {
            selectors.id.css(
              "background-image",
              "url(" +
                $(this)
                  .find(selectors.img)
                  .attr("src") +
                ")"
            );
            selectors.item.removeClass(selectors.activeClass);
            $(this).addClass(selectors.activeClass);
          }
        });
      });
    };
  })(jQuery);
  
  $("#timeline-1").timeline();
  

  function elementInViewport(e) {
    var top = e.offsetTop;
    var height = e.offsetHeight;
  
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