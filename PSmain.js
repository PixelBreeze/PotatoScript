//Potato Script
$('head').append('<link id="pscss" rel="stylesheet" href="https://rawgit.com/PixelBreeze/PotatoScript/master/styles.css" type="text/css"/>');
$.getScript('https://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js').done(function(data) {
   
    $('body').append('<div id="tbutton"><div id="phbox"><img id="potatoimg" src="http://pngimg.com/upload/potato_PNG7078.png"/></div></div>');
    $('#tbutton').append('<div id="pcbox" style="display: none;"><div id="pgot" class="pibox">Got</div><div id="pbltheme" class="pibox">BL Theme</div><div id="pbljunk" class="pibox">BL Junk</div><div id="pskip" class="pibox">Skip</div><div id="preload" class="pibox">Reload</div><div id="pafk" class="pibox">AFK</div><div id="pluul" class="pibox">:luul:</div><div id="p420" class="pibox">420</div></div>');
    $('body').append('<div id="confirmbox"><div id="confirmheader">Are you sure?</div><div id="cyes" class="cbox">Yes</div><div id="cno" class="cbox">No</div></div>');
    $('#tbutton').draggable();
    $("#confirmbox").toggle();
    var next_move = 1;
    var confirmed = false;
    $("#potatoimg").click(function() {
        if (next_move == 1) {
            $('#tbutton').animate({ 'width' : '273' });
            next_move = 0;            
        } else {
            $('#tbutton').animate({ 'width' : '50' }); 
            next_move = 1;
        }
    //   $('#tbutton').animate({width: '273px'});
    }); 
   
   function confirm() {
      $("#confirmbox").toggle();
      $("#cyes").click(function() {
         confirmed = true;
         $("#confirmbox").toggle();
      });
      $("#cno").click(function() {
         confirmed = false;
         $("#confirmbox").toggle();
      });
   }
   $(".pibox").click(function() {
      confirm();
   });
   
   $("#potatoimg").click(function() {
      $("#pcbox").toggle(); 
   });
    $("#pgot").click(function(){
        API.sendChat('I got it.'); 
    });
    $("#pskip").click(function(){
       if (confirmed === true) {
         API.sendChat('!skip'); 
       }
    });
    $("#pbltheme").click(function(){
        API.sendChat('!bl theme'); 
    });
    $("#pbljunk").click(function(){
        API.sendChat('!bl junk'); 
    });
    $("#preload").click(function(){
        API.sendChat('/reload'); 
    });
    $("#pafk").click(function(){
        API.sendChat('!afk'); 
    });
    $("#pluul").click(function(){
       if (confirmed === true) {
         API.sendChat(':luul:'); 
       }
    });
   $("#p420").click(function(){
        API.sendChat('4:20'); 
    });
});

