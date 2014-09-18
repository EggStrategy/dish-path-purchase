$(function(){

  window.scrollTo(0, document.body.scrollHeight);

  sectionNavScroll = function() {
  
    var navListItem = $('.section-nav li');
    var navLink = $('.section-nav a');
  
    navListItem.on({
      mouseenter: function() {
        var toolTip = $(this).data('tooltip');
        $('<div class="tooltip">' + toolTip + '</div>').hide().appendTo(this).fadeIn(200);
      },
      mouseleave: function() {
        $(this).find('.tooltip').fadeOut(200, function() {
          $(this).remove();
        });
      }
    });
    
    navLink.on('click', function(e) {
      e.preventDefault();
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          target.find('.triggers').addClass('fadeInUp animated');          
        });
      }
    });
    
    var aChildren = $('.section-nav li').children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {    
      var aChild = aChildren[i];
      var ahref = $(aChild).attr('href');
      aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values
    
    $(window).scroll(function(){
      var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
      var windowHeight = $(window).height(); // get the height of the window
      var docHeight = $(document).height();
      
      for (var i=0; i < aArray.length; i++) {
        var theID = aArray[i];
        var sectionPos = $(theID).offset().top; // get the offset of the div from the top of page
        var sectionHeight = $(theID).height(); // get the height of the div in question
        
        
        if (windowPos >= sectionPos && windowPos < (sectionPos + sectionHeight)) {
          $(".section-nav a[href='" + theID + "']").addClass('active');
        } else {
          $(".section-nav a[href='" + theID + "']").removeClass('active');
        }
      }
      
      if(windowPos + windowHeight == docHeight) {
        if (!$(".section-nav li:last-child a").hasClass("active")) {
          var navActiveCurrent = $(".active").attr("href");
          $("a[href='" + navActiveCurrent + "']").removeClass("active");
          $(".section-nav li:last-child a").addClass("active");
        }
      }
    });

  }

 /*
  sectionHeight = function() {
    
    var windowHeight = $(window).height();
    var section = $('section');
    var stageCol = $('[class^="col-"]');
    
    section.css('min-height', windowHeight);
    $(section).not('.stage-5').find(stageCol).css('min-height', windowHeight);
    
  }


 $('#fullpage').fullpage({
    paddingBottom: '66px',
    scrollingSpeed: 700,
    easing: 'swing',
    normalScrollElements: '#full-view',
    navigation: true,
    autoScrolling: false,
    verticalCentered: false,
    resize: false,
    
    navigationTooltips: ['Switch', 'Resolve', 'Evaluation', 'Exploration', 'Preparation', 'Intro', 'Full View'],
    anchors: ['stage5', 'stage4', 'stage3', 'stage2', 'stage1', 'intro', 'full-view'],
        
    afterLoad: function(anchorLink, index){
    
      if(anchorLink == 'stage1'){
        $('.stage-1 .triggers').addClass('fadeInUp animated');
      }
      
      if(anchorLink == 'stage2'){
        $('.stage-2 .triggers').addClass('fadeInUp animated');
      }
            
      if(anchorLink == 'stage3'){
        $('.stage-3 .triggers').addClass('fadeInUp animated');
      }
      
      if(anchorLink == 'stage4'){
        $('.stage-4 .triggers').addClass('fadeInUp animated');
      }
      
      if(anchorLink == 'stage5'){
        $('.stage-5 .triggers').addClass('fadeInUp animated');
      }
    
    }
    
  });
  
  $('.slide-up-btn').click(function(){
    $.fn.fullpage.moveSectionUp();
  });
*/
  
  segmentNav = function() {
    
    var navLink = $('.segment-nav a');
    
    navLink.on('click',function(e){
      e.preventDefault();
      var body = $('body');
      var segment = $('[data-segment]');
      var navLinkSegment = $(this).attr('data-segment');
      var segmentData = segment.attr('data-segment');
      
      if(navLinkSegment!='all') {
        segment.removeClass('fade-back');
        segment.not("[data-segment='" + navLinkSegment + "']").addClass('fade-back');
      }else{
        segment.removeClass('fade-back');
      }
      
      navLink.removeClass('active');
      $(this).addClass('active');

    });
    
  }

  recoModal = function() {
    
    var recButton = $('.recomend-link');
    var closeButton = $('.icon-close');
    var modal = $('.modal');

    recButton.on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('active');
      modal.fadeIn().addClass('active');
    });
    
    closeButton.on('click', function(e) {
      e.preventDefault();
      modal.fadeOut().removeClass('active');
      recButton.removeClass('active');
    });
    
  }

  waterDrops = function() {
  
    var $dropsContainter = $('.water-drops');
    var dropsHtml = "";
    
    for (var i = 0; i < 5; i++) {
      var posX = Math.floor(Math.random() * (70 - 1) + 1);
      dropsHtml += '<div class="drop animated infinite" style="left: ' + posX + 'px"></div>';
    }
    
    $dropsContainter.html(dropsHtml);

  }
    
  // sectionHeight();
  sectionNavScroll();
  segmentNav();
  waterDrops();
  recoModal();
  
  
});