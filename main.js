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
  //カーソル要素の指定
  var cursor=$("#cursor");
  //ちょっと遅れてついてくるストーカー要素の指定  
  var stalker=$("#stalker");
  
  //mousemoveイベントでカーソル要素を移動させる
  $(document).on("mousemove",function(e){
    //カーソルの座標位置を取得
    var x=e.clientX;
    var y=e.clientY;
    //カーソル要素のcssを書き換える用
    cursor.css({
      "opacity":"1",
      "top":y+"px",
      "left":x+"px"
    });
    //ストーカー要素のcssを書き換える用    
    setTimeout(function(){
      stalker.css({
        "opacity":"1",
        "top":y+"px",
        "left":x+"px"
      });
    },140);//カーソルより遅れる時間を指定
    
  });
});



