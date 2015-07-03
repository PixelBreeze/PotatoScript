//PotatoScript

//The button ??
$('head').append('<link rel="stylesheet" href="https://rawgit.com/PixelBreeze/PotatoScript/master/styles.css" type="text/css"/>');
$.getScript('https://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js').done(function(data){
$('body').append('<div id="tbutton"><img id="potatoimg" src="http://pngimg.com/upload/potato_PNG7078.png"/></div>');
$("#tbutton").draggable(); });

var next_move = "expand";
$(document).ready(function (){
$("#tbutton").click(function()
{
    console.log(next_move);
    var css = {};
    if (next_move == "expand"){
        css = {
            width: '200px'
        };
        next_move = "shrink";
    } else {
        css = {
            width: '50px'
        };     
        console.log('hi');
        next_move = "expand";
    }
    $(this).animate(css, 200);
});
});
