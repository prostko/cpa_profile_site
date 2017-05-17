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


    var homepageVideo = $('#homepage_video')[0];
    // there is a bug with 'data-upgraded' being added to the elements by MDL, this just makes sure the video keeps playing
    if (homepageVideo) {
      playVideo = function () {
        homepageVideo.play();
      };

      homepageVideo.addEventListener('pause', function() {
        playVideo();
      });

      setTimeout(function () {
        playVideo();
      }, 150);
    };


});
