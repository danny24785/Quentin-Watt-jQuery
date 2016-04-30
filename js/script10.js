// Script for #10

/******** script according to Quentin
$('#button, #para').click(function(){
	alert('Something was clicked');							
});
/********/

/******** same script rewritten according to Peter Kassenaar ********/
$('#button, #para').on('click', function(){
	alert('Something was clicked');							
});