//PotatoScript

//The button ??
$('head').append('<link rel="stylesheet" href="https://rawgit.com/PixelBreeze/PotatoScript/master/styles.css" type="text/css"/> <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>');
$('body').append('<div id="tbutton"></div>');
$('head').append('<script type="text/javascript">
    jQuery(document).ready(function() {
        $('#tbutton').draggable();
    });
</script>');
