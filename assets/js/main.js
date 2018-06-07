$(document).ready(function(){
    $(".nav-bars").click(function(){
        $(".navigation-sidebar").animate({left: '0px'});
    });
    $(".fa-window-close").click(function(){
        $(".navigation-sidebar").animate({left: '-100%'});
    });
});

$(document).ready(function(){
    // Activate Carousel
    $("#myCarousel").carousel();
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);
    });
    
    // Enable Carousel Controls
    $(".carousel-control-prev").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".carousel-control-next").click(function(){
        $("#myCarousel").carousel("next");
    });
});

var marginY = 0;
var destination = 0;
var speed = 15;
var scroller = null;

function pageScroll(elementId) {
    destination = document.getElementById(elementId).offsetTop;
    
    scroller = setTimeout(function(){
        pageScroll(elementId);
    }, 1);
    
    marginY = marginY + speed;
    
    if(marginY >= destination) {
        clearTimeout(scroller);
    }
    window.scroll(0, marginY);
}

function topScroll() {   
    scroller = setTimeout(function(){
        topScroll();
    }, 1);
    
    marginY = marginY - speed;
    
    if(marginY <= 0) {
        clearTimeout(scroller);
    }
    window.scroll(0, marginY);
}

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {    
    var target = $(this).attr('href');

    $(target).css('left','-'+$(window).width()+'px');   
    var left = $(target).offset().left;
    $(target).css({left:left}).animate({"left":"0px"}, "10");
})

