$(document).on('click', '.home-nav', function() {
  $('#active-page').html($('#home-container').html());
  $('.home-nav').css('display','none');
});

$(document).on('click', '.proj-nav', function() {
  $('#active-page').html($('#projects-container').html());
  $('.home-nav').css('display','inline');
});

$(document).on('click', '.music-nav', function() {
  $('#active-page').html($('#lessons-container').html());
  $('.home-nav').css('display','inline');
});

$(document).on('click', '.contact-nav', function() {
  $('#active-page').html($('#contact-container').html());
  $('.home-nav').css('display','inline');
});