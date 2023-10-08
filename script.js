var x;
var $cards = $(".card");
var $style = $(".hover");

$cards
.on("mousemove touchmove", function(e) { 
    // normalise touch/mouse
    var pos = [e.offsetX,e.offsetY];
    e.preventDefault();
    if ( e.type === "touchmove" ) {
        pos = [ e.touches[0].clientX, e.touches[0].clientY ];
    }
    var $card = $(this);
    // math for mouse position
    var l = pos[0];
    var t = pos[1];
    var h = $card.height();
    var w = $card.width();
    var px = Math.abs(Math.floor(100 / w * l)-100);
    var py = Math.abs(Math.floor(100 / h * t)-100);
    // math for gradient / background positions
    var lp = (50+(px - 50)/1.5);
    var tp = (50+(py - 50)/1.5);
    var ty = ((tp - 50)/2) * -1;
    var tx = ((lp - 50)/1.5) * .5;
    // css to apply for active card
    var tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg)`
    // set / apply css class and style
    $cards.removeClass("active");
    $card.attr( "style", tf );
    $style.html(style);
    if ( e.type === "touchmove" ) {
        return false; 
    }
    clearTimeout(x);
}).on("mouseout touchend touchcancel", function() {
    // remove css
    var $card = $(this);
    $style.html("");
    $card.removeAttr("style");
});