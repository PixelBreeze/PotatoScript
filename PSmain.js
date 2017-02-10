//Potato Script
$('head').append('<link id="pscss" rel="stylesheet" href="https://rawgit.com/PixelBreeze/PotatoScript/master/styles.css" type="text/css"/>');
   
    $('body').append('<div id="psbutton"><div id="phbox"><img id="potatoimg" src="http://pngimg.com/upload/potato_PNG7078.png"/></div></div>');
    $('#psbutton').append('<div id="pcbox" style="display: none;"><div id="pgot" class="pibox">Got</div><div id="pbltheme" class="pibox pimportant">BL Theme</div><div id="pbljunk" class="pibox pimportant">BL Junk</div><div id="pblop" class="pibox pimportant">BL OP</div><div id="pskip" class="pibox pimportant">Skip</div><div id="preload" class="pibox">Reload</div><div id="pafk" class="pibox">AFK</div><div id="pluul" class="pibox">:luul:</div><div id="p420" class="pibox">420</div></div>');
    $("#confirmbox").toggle();
    var pnext_move = 1;
    var pconfirmed = false;
    var paction = " ";
    $("#potatoimg").click(function() {
        if (pnext_move == 1) {
            $('#psbutton').animate({ 'width' : '273' });
            pnext_move = 0;            
        } else {
            $('#psbutton').animate({ 'width' : '50' }); 
            pnext_move = 1;
        }
    //   $('#tbutton').animate({width: '273px'});
    });
   
   $("#potatoimg").click(function() {
      $("#pcbox").toggle(); 
   });
    $("#pgot").click(function(){
        API.sendChat('I got it.'); 
    });
    $("#pskip").click(function(){
        paction = "skip";
    });
    $("#pbltheme").click(function(){
        paction = "theme";
    });
    $("#pbljunk").click(function(){
        paction = "junk"; 
    });
    $("#pblop").click(function(){
        paction = "op"; 
    });
    $("#preload").click(function(){
        API.sendChat('/reload'); 
    });
    $("#pafk").click(function(){
        API.sendChat('!afk'); 
    });
    $("#pluul").click(function(){
        API.sendChat(':luul:'); 
    });
   $("#p420").click(function(){
        API.sendChat('4:20'); 
    });
   function executepaction() {
         if (paction === "skip") {
            API.sendChat('!skip'); 
         }
         if (paction === "theme") {
            API.sendChat('!bltheme'); 
         }
         if (paction === "junk") {
            API.sendChat('!bljunk'); 
         }
      paction = "";
   }
   $(".pibox.pimportant").click(function() {
      var pconfirmed = confirm("Are You Sure?");
      if (pconfirmed === true) {
         executepaction();
      }
   });

