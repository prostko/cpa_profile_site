// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$( document ).ready(function() {
    $('.link-button').hover(function(){
      $(event.target).css("border-bottom", "4px solid #8bc34a")
      }, function() {
      $(event.target).css("border-bottom", "none")
      }
    );
    // there is some kind of race condition between pause() and play(), 150 ms is needed before promise comes in from pause

    checkVideoPlayback = function () {
        if ($('homepage_video')) {
          $('#homepage_video')[0].play();
          console.log('checking')
      };
    }

    setTimeout(function () {
      setInterval(checkVideoPlayback, 500)
    }, 150);

});
