//Potato Script
$('head').append('<link id="pscss" rel="stylesheet" href="https://rawgit.com/PixelBreeze/PotatoScript/master/styles.css" type="text/css"/>');
    $('body').append('<div id="psbutton" style="position: absolute; top: 77px; left: 1164px; width: 50px;"><div id="phbox"><img id="potatoimg" src="http://pngimg.com/upload/potato_PNG7078.png"/></div></div>');
    $('#psbutton').append('<div id="pcbox" style="display: none;"><div id="pgot" class="pibox">Got</div><div id="pbltheme" class="pibox pimportant">BL Theme</div><div id="pbljunk" class="pibox pimportant">BL Junk</div><div id="pblop" class="pibox pimportant">BL OP</div><div id="pskip" class="pibox pimportant">Skip</div><div id="preload" class="pibox">Reload</div><div id="pafk" class="pibox">AFK</div><div id="pluul" class="pibox">:luul:</div><div id="p420" class="pibox">420</div></div>');
    $("#confirmbox").toggle();
//Draggable shit
window.onload = addListeners();
function addListeners(){
    document.getElementById('phbox').addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);
}
function mouseUp()
{
    window.removeEventListener('mousemove', divMove, true);
}
function mouseDown(e){
  window.addEventListener('mousemove', divMove, true);
}
function divMove(e){
    var div = document.getElementById('psbutton');
  div.style.position = 'absolute';
  div.style.top = e.clientY + 'px';
  div.style.left = e.clientX + 'px';
}
    
    $("#confirmbox").toggle();
    var pnext_move = 1;
    var pconfirmed = false;
    var action = " ";
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
        action = "skip";
    });
    $("#pbltheme").click(function(){
        action = "theme";
    });
    $("#pbljunk").click(function(){
        action = "junk"; 
    });
    $("#pblop").click(function(){
        action = "op"; 
    });
    $("#preload").click(function(){
        API.sendChat('/reload'); 
    });
    $("#pafk").click(function(){
        API.sendChat('!afk'); 
    });
    $("#pluul").click(function(){
        API.sendChat(':lul:'); 
    });
   $("#p420").click(function(){
        API.sendChat('4:20'); 
    });
   function executeaction() {
         if (action === "skip") {
            API.sendChat('!skip'); 
         }
         if (action === "theme") {
            API.sendChat('!bl theme'); 
         }
         if (action === "junk") {
            API.sendChat('!bl junk'); 
         }
      action = "";
   }
   $(".pibox.pimportant").click(function() {
      var pconfirmed = confirm("Are You Sure?");
      if (pconfirmed === true) {
         executeaction();
      }
   });

