



// fullpage customization
$('#fullpage').fullpage({
  licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
  sectionsColor: ['#0C090A', '#0C090A', '#0C090A', '#0C090A', '#0C090A', '#0C090A'],
  sectionSelector: '.vertical-scrolling',
  // slideSelector: '.horizontal-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection',"sixSection"],
  menu: '#menu',

  // afterLoad: function(anchorLink, index) {
  //   $header_top.css('background', 'rgba(0, 47, 77, .3)');
  //   $nav.css('background', 'rgba(0, 47, 77, .25)');
  //   if (index == 5) {
  //       $('#fp-nav').hide();
  //     }
  // },

  onLeave: function(index, nextIndex, direction) {
    if(index == 5) {
      $('#fp-nav').show();
    }
  },

  afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(false, 'up');
      $header_top.css('background', 'transparent');
      $nav.css('background', 'transparent');
      $(this).css('background', '#374140');
      $(this).find('h2').css('color', 'white');
      $(this).find('h3').css('color', 'white');
      $(this).find('p').css(
        {
          'color': '#DC3522',
          'opacity': 1,
          'transform': 'translateY(0)'
        }
      );
    }
  },

  onSlideLeave: function( anchorLink, index, slideIndex, direction) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(true, 'up');
      $header_top.css('background', 'rgba(0, 47, 77, .3)');
      $nav.css('background', 'rgba(0, 47, 77, .25)');
    }
  } 
}); 

$(document).ready(function() {
  menu_link = $('.widget_nav_menu .menu .menu-item-has-children a'),
  sub_menu = $('.widget_nav_menu .menu li .sub-menu');   
  menu_link.on('click', function() {   
    
    if (!$(this).hasClass('active')) {
      sub_menu.slideUp(300,'swing');
        $(this).next().stop(true,true).slideToggle(300);
      menu_link.removeClass('active');
        $(this).addClass('active');
    } 
    else {
      sub_menu.slideUp(300);
      menu_link.removeClass('active');
    }
    
  });

});

$(window).on('load',function(){
  $('#btn').click(function(){
    fullpage_api.moveSectionUp();
  });
  $('#footer-logo').click(function(){
    fullpage_api.moveSectionUp();
  });
 })




function myFunction() {
   var els = document.querySelectorAll('.class');
for (var i = 0; i < els.length; i++) {
    els[i].setAttribute("class", "democlass");
}
}
