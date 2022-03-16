'use strict';
const audio = document.querySelector('audio');
const on = document.querySelector('.on');
const off = document.querySelector('.off');

on.addEventListener('click', function() {
  audio.play();
  on.style.opacity = '1';
  off.style.opacity = '0.5';
})
off.addEventListener('click', function() {
  audio.pause();
  off.style.opacity = '1';
  on.style.opacity = '0.5';
})

const a = document.querySelectorAll("a");
VanillaTilt.init(document.querySelector(".inner"), {
  max: 5,
  speed: 400,
  // glare: true,
});



$(function(){
  var cursor=$("#cursor"); 
  var stalker=$("#stalker");
  
  $(document).on("mousemove",function(e){
    var x=e.clientX;
    var y=e.clientY;
    cursor.css({
      "opacity":"1",
      "top":y+"px",
      "left":x+"px"
    });
   
    setTimeout(function(){
      stalker.css({
        "opacity":"1",
        "top":y+"px",
        "left":x+"px"
      });
    },140);
  });
});



