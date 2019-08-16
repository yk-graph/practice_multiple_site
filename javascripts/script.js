$(function() {
  var elInner = $('#main-visual .bg-images__item');
  var duration = 4000;
  var defaultIndex = 0;
  switchImage = function(next) {
    var current = next ? (next - 1) : elInner.length - 1;
    elInner[current].classList.remove('is-visible');
    elInner[next].classList.add('is-visible');
    next = (++next < elInner.length) ? next : 0;
    setTimeout(switchImage.bind(this, next), duration);
  }
  window.onload = switchImage.bind(this, defaultIndex)
});


