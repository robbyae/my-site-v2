$(document).on('click', '.home-nav', function() {
  $('#active-page').html($('#home-container').html());
});

$(document).on('click', '.proj-nav', function() {
  $('#active-page').html($('#projects-container').html());
});

$(document).on('click', '.music-nav', function() {
  $('#active-page').html($('#music-container').html());
});

$(document).on('click', '.contact-nav', function() {
  $('#active-page').html($('#contact-container').html());
});