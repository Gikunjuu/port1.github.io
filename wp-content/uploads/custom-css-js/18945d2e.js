/******* Do not edit this file *******
Simple Custom CSS and JS - by Silkypress.com
Saved: Jan 01 2021 | 08:41:22 */
jQuery(function($) {
$(document).ready(function() {

/* menu button*/
$('#menu-button-uiux-m').click(function(){    
$('#menu-uiux-m').animate({"width": "100vw"},750);
$('#menu-background-uiux-m').animate({"width": "100vw"},750);
$('#menu-list-box-large-uiux-m').animate({"width": "50vw"},750);
$('#menu-list-button-uiux-m').delay(750).fadeIn(500);
$('#menu-list-box-small-uiux-m').delay(750).fadeIn(500);
});
$('#menu-button-uiux-t').click(function(){    
$('#menu-uiux-t').animate({"width": "100vw"},750);
$('#menu-background-uiux-t').animate({"width": "100vw"},750);
$('#menu-list-box-large-uiux-t').animate({"width": "50vw"},750);
$('#menu-list-button-uiux-t').delay(750).fadeIn(500);
$('#menu-list-box-small-uiux-t').delay(750).fadeIn(500);
});
/*close button*/
$('#menu-closebutton-uiux-m').click(function(){
$('#menu-list-box-small-uiux-m').fadeOut(500,function(){});
$('#menu-list-button-uiux-m').fadeOut(500,function(){});
$('#menu-list-box-large-uiux-m').delay(500).animate({"width": "0vw"},750,function(){});
$('#menu-background-uiux-m').delay(500).animate({"width": "0vw"},750,function(){});
$('#menu-uiux-m').delay(500).animate({"width": "0vw"},750,function(){});
});
  
$('#menu-closebutton-uiux-t').click(function(){
$('#menu-list-box-small-uiux-t').fadeOut(500,function(){});
$('#menu-list-button-uiux-t').fadeOut(500,function(){});
$('#menu-list-box-large-uiux-t').delay(500).animate({"width": "0vw"},750,function(){});
$('#menu-background-uiux-t').delay(500).animate({"width": "0vw"},750,function(){});
$('#menu-uiux-t').delay(500).animate({"width": "0vw"},750,function(){});
});

/*background*/
$('#menu-background-uiux-m').click(function(){    
$('#menu-list-box-small-uiux-m').fadeOut(500,function(){});
$('#menu-list-button-uiux-m').fadeOut(500,function(){});
$('#menu-list-box-large-uiux-m').delay(500).animate({"width": "0vw"},750,function(){});
$('#menu-background-uiux-m').delay(500).animate({"width": "0vw"},750,function(){});
$('#menu-uiux-m').delay(500).animate({"width": "0vw"},750,function(){});
});

$('#menu-background-uiux-t').click(function(){    
$('#menu-list-box-small-uiux-t').fadeOut(500,function(){});
$('#menu-list-button-uiux-t').fadeOut(500,function(){});
$('#menu-list-box-large-uiux-t').delay(500).animate({"width": "0vw"},750,function(){});
$('#menu-background-uiux-t').delay(500).animate({"width": "0vw"},750,function(){});
$('#menu-uiux-t').delay(500).animate({"width": "0vw"},750,function(){});
});
  
});
});