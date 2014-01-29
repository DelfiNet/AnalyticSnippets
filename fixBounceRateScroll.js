/**
 * Fix bouncerate for pages that require scrolling by pushing an event
 * as soon as the scroll happens
 *
 * Based on code from:
 * http://drawingablank.me/blog/fix-your-bounce-rate.html
 *
 */
setTimeout(function() {
  window.onscroll = function() {
    window.onscroll = null; // Only track the event once
    _gaq.push(['_trackEvent', 'scroll', 'read']);
  }
}, 5000);
