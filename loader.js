$.getScript('https://code.radiant.dj/rs.min.js');
var psload = true;
if (psload === true) {
    $('#tbutton').remove();
    delete window.next_move;
    $.getScript('https://rawgit.com/PixelBreeze/PotatoScript/master/PSmain.js');
} else {
    $.getScript('https://rawgit.com/PixelBreeze/PotatoScript/master/PSmain.js');
}

  
