$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });
});

const video = document.getElementById('bgVideo');
const btn = document.getElementById('unmuteBtn');

btn.addEventListener('click', () => {
  video.muted = !video.muted;
  btn.textContent = video.muted ? '🔇 Enable Sound' : '🔊 Sound On';
});