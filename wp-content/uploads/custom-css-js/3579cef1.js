/******* Do not edit this file *******
Simple Custom CSS and JS - by Silkypress.com
Saved: Jan 07 2021 | 05:01:13 */
jQuery(function($) {
$(document).ready(function() {
$('img').mousedown(function (e) {
  if(e.button == 2) { // right click
    return false; // do nothing!
  }
}
});
});