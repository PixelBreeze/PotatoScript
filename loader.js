$.getScript('https://code.radiant.dj/rs.min.js');
$('#psbutton').remove();
$('#pscss').remove();
delete window.next_move;
$.getScript('https://rawgit.com/PixelBreeze/PotatoScript/master/PSmain.js');
API.on(API.CHAT_COMMAND, function(data) { //loadnem for NotEnoughMemes script.
    if (data.length > 0 && data.indexOf('/loadnem') == 0) {
        $.getScript('https://rawgit.com/PixelBreeze/NotEnoughMemes/master/NEMuserscript.js');
    }
});
