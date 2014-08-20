$(function(){

  stageFooter = function() {
    
    var footer = $('.stage-footer');
    var stage = $('.stage');
    var activeStage = stage.hasClass('active');
    var stageID = stage.eq();
    
    stage.each(function() {
      if($('.stage.active').length != 0) {
        footer.addClass('active');
      }
    });
    
    
  }
  

  $('#fullpage').fullpage({
    navigation: true,
    navigationTooltips: ['Switch', 'Resolve', 'Evaluation', 'Exploration', 'Preparation', 'Intro'],

    afterRender: function(index){
      if($(index).length !== 0) {
        $('.stage-footer').addClass('active');
      }
      
      if(index == 2) {
      }
      
    }
    
  });
  
  
  segmentNav = function() {
    
    var navLink = $('.segment-nav a');
    
    navLink.on('click',function(e){
      e.preventDefault();
      var body = $('body');
      var segment = $('.stage').find('[data-segment]');
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

/*
      var activeClass = 'active-';
      var bodyClass = activeClass.concat(navLinkSegment);
      body.removeAttr('class');
      body.addClass(bodyClass);
*/

      console.log(segmentData);

    });
    
    
  }
  
  
  segmentNav();
  stageFooter();
  
});