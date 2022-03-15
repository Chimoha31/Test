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
