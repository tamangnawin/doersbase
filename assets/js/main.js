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


var now = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var checkTime = function() {
  var today = weekday[now.getDay()];
  var timeDiv = document.getElementById('timeDiv');
  var dayOfWeek = now.getDay();
  var hour = now.getHours();
  var minutes = now.getMinutes();
  //add AM or PM
  var suffix = hour >= 12 ? "PM" : "AM";

  // add 0 to one digit minutes
  if (minutes < 10) {
    minutes = "0" + minutes
  };

  if ((dayOfWeek == 0 || dayOfWeek == 1 || dayOfWeek ==2 || dayOfWeek == 3 || dayOfWeek == 4) && hour >= 9 && hour < 17) {
    hour = ((hour + 11) % 12 + 1); //i.e. show 1:15 instead of 13:15
    timeDiv.innerHTML = 'it\'s ' + today + ' ' + hour + ':' + minutes + ' ' + suffix + ' - we\'re open!';
    timeDiv.className = 'open';
  } 
  
  else if ((dayOfWeek == 5) && hour >= 9 && hour < 14) {
    hour = ((hour + 11) % 12 + 1);
    timeDiv.innerHTML = 'it\'s ' + today + ' ' + hour + ':' + minutes + ' ' + suffix + ' - we\'re open!';
    timeDiv.className = 'open';
  } 
  
  else {
    if (hour == 0 || hour > 12) {
      hour = ((hour + 11) % 12 + 1); //i.e. show 1:15 instead of 13:15
    }
    timeDiv.innerHTML = 'It\'s ' + today + ' ' + hour + ':' + minutes + ' ' + suffix + ' - we\'re closed!';
    timeDiv.className = 'closed';
  }
};

var currentDay = weekday[now.getDay()];
var currentDayID = "#" + currentDay; //gets todays weekday and turns it into id
$(currentDayID).toggleClass("today"); //hightlights today in the view hours modal popup

setInterval(checkTime, 1000);
checkTime();

