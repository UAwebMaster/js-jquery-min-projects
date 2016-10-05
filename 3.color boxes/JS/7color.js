$(document).ready(function(){

function randomColor() {
return '#'+ Math.random().toString(16).slice(2,8); }
var color=  randomColor();

var kyb = $('.kyb1');
for (var i=0; i<252; i++){
kyb.after('<div class="kyb1" id="kyb"></div>');
$('#main div').mouseover(function(){
$(this).css('background', randomColor());
});
}

});