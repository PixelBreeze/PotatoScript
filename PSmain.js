
//Potato Script
$('head').append('<link rel="stylesheet" href="https://rawgit.com/PixelBreeze/PotatoScript/master/styles.css" type="text/css"/>');
$.getScript('https://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js').done(function(data) {
    $('body').append('<div id="tbutton"><div id="phbox"><img id="potatoimg" src="http://pngimg.com/upload/potato_PNG7078.png"/></div></div>');
    $('#tbutton').append('<div id="pcbox"></div>');
    $('#tbutton').draggable();
    var pcbox = document.getElementsByTagName("pcbox");
    $("#phbox").click(function() {
        var css = {};
        var next_move = "expand";
        if (this.next_move == "expand") {
            css = { width: '200px' };
            $('#pcbox').css = { display: 'block' };
            this.next_move = "shrink";            
        } else {
            css = { width: '50px' };
            this.next_move = "expand";
        }
        $(this).animate(css, 200);
    });
});
