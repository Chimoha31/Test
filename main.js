'use strict';
const audio = document.querySelector('audio');
const on = document.querySelector('.on');
const off = document.querySelector('.off');

on.addEventListener('click', function() {
  audio.play();
})
off.addEventListener('click', function() {
  audio.pause();
})
