$(document).ready(function(){
/*  //prosto perevirka
$('#d1').click(function(){
alert("lalalalala");
}); }); 
*/

//te wo ja v 4x rjadkax napysav mozhna zrobutu taK
/*$(#vyb_kol).on("click", function() {
color= #(this).css('background');
console.log(paint);
})
*/

var color;

$('#d1').click(function(){
color="red"; }) 
$('#d2').click(function(){
color="blue";}) 
$('#d3').click(function(){
color="yellow"; }) 
$('#d4').click(function(){
color="white"; })
$('#tlo div div').click(function(){
   $(this).css('background-color', color); 
});});



/*
var kolir = "colir";
$('#d1').click(function(){
   $('#tlo div').css('background-color', 'red'); 
}); }); 
*/