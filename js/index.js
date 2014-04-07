/*NAVIGATION*/

$('.navbar-nav>li').click(function(){
  if($(this).hasClass('active')){
    return;
  } else{
    $('.navbar-nav>li').removeClass('active');
    $(this).toggleClass('active');
  }
});

/*TRIVIA*/
var triviaClone = $('.team-trivia').clone().removeClass('visible-xs').addClass('hidden-xs col-xs-4');
triviaClone.prependTo($('#trivia'));


/*GOOGLE MAP*/
var map;
function initialize() {
  var myLatLng = new google.maps.LatLng(1.279168, 103.847868);
  var mapOptions = {
    zoom: 18,
    center: myLatLng,
    disableDefaultUI: true
  };
  
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  
  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

/*BOOTSTRAP SCROLLSPY*/
$('body').scrollspy({ target: '#iMedia-navbar-collapse' });

/*SMOOTH SCROLL*/
smoothScroll.init();