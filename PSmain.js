//PotatoScript

//The button //FIRST PART
$('head').append('<link rel="stylesheet" href="https://rawgit.com/PixelBreeze/PotatoScript/master/styles.css" type="text/css"/>');
$.getScript('https://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js').done(function(data){
$('body').append('<div id="tbutton"><img id="potatoimg" src="http://pngimg.com/upload/potato_PNG7078.png"/></div>');
$("#tbutton").draggable(); });

//Expands the button //SECOND PART
var next_move = "expand";
$("#tbutton").click(function (){
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
        next_move = "expand";
    }
    $(this).animate(css, 200);
});
