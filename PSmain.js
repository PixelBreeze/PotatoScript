
//Potato Script
$('head').append('<link rel="stylesheet" href="https://rawgit.com/PixelBreeze/PotatoScript/master/styles.css" type="text/css"/>');
$.getScript('https://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js').done(function(data) {
   
    $('body').append('<div id="tbutton"><div id="phbox"><img id="potatoimg" src="http://pngimg.com/upload/potato_PNG7078.png"/></div></div>');
    $('#tbutton').append('<div id="pcbox" style="display: none;"><div id="pgot" class="pibox">Got</div><div id="pbltheme" class="pibox">BL Theme</div><div id="pbljunk" class="pibox">BL Junk</div><div id="pskip" class="pibox">Skip</div><div id="preload" class="pibox">Reload</div><div id="pafk" class="pibox">AFK</div><div id="pluul" class="pibox">:luul:</div></div>');
    $('#tbutton').draggable();
    
    $("#phbox").click(function() {
        var css = {};
        var next_move = "expand";
        if (this.next_move == "expand") {
            css = { width: '200px' };
            this.next_move = "shrink";            
        } else {
            css = { width: '50px' };
            this.next_move = "expand";
        }
        $(this).animate(css, 200);
    });   
  /*
    $("#phbox").click(function(){
        $("#pcbox").toggle();  
    });   
    $("#pgot").click(function(){
        API.sendChat('I got it.'); 
    });
    $("#pskip").click(function(){
        API.sendChat('!skip'); 
    });
    $("#pbltheme").click(function(){
        API.sendChat('!bl theme'); 
    });
    $("#pbljunk").click(function(){
        API.sendChat('!bl junk'); 
    });
    $("#preload").click(function(){
        API.sendChat('/relaod'); 
    });
    $("#pafk").click(function(){
        API.sendChat('!afk'); 
    });
    $("#pluul").click(function(){
        API.sendChat(':luul:'); 
    }); */
});

