//Potato Script
$('head').append('<link id="pscss" rel="stylesheet" href="https://rawgit.com/PixelBreeze/PotatoScript/master/styles.css" type="text/css"/>');
    $('body').append('<div id="psbutton" style="position: absolute; top: 77px; left: 1164px; width: 50px;"><div id="phbox"><img id="potatoimg" src="http://pngimg.com/uploads/potato/potato_PNG7078.png"/></div></div>');
    $('#psbutton').append('<div id="pcbox" style="display: none;"><div id="pgot" class="pibox">Got</div><div id="phistory pimportant" class="pibox">History</div><div id="pskip" class="pibox pimportant">Skip</div><div id="pbltheme" class="pibox pimportant">BL Theme</div><div id="pbljunk" class="pibox pimportant">BL Junk</div><div id="pblop" class="pibox pimportant">BL OP</div><div id="preload" class="pibox">Reload</div></div>');
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
    $("#phistory").click(function(){
        action = "history";
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
         if (action === "history") {
            API.sendChat('!skip'); 
            API.sendChat('Song in History');
         }
      action = "";
   }
   $(".pibox.pimportant").click(function() {
      var pconfirmed = confirm("Are You Sure?");
      if (pconfirmed === true) {
         executeaction();
      }
   });

