$(document).ready(function() {
  $(window).scroll(function() {
        if ($(document).scrollTop() < 1) {
          $("#foott").slideDown();
        } else {
          $("#foott").slideUp();
        }
      });
})
