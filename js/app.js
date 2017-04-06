
$(document).ready(function() {

  var fullDiv = $('.gallery_full');

  $('.gallery_thumbnails a').on('click', function(e) {

    e.preventDefault();

    var clickedThumb = $(this);

    var $img = $('<img>').attr('src', clickedThumb.data('full'));

    clickedThumb.parent().find('a').removeClass('selected');

    clickedThumb.addClass('selected');

    fullDiv.empty().append($img.hide().fadeIn('slow'));
  });

  fullDiv.on('click', 'img', function(e) {
    $.fancybox.open($(this).attr('src'));
  });

});