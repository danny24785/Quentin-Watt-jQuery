// Script for #12

/******** script according to Quentin 

$('#image_toggler').click(function(){
	$('#car').toggle();
});

$('#image_toggler_dbl').dblclick(function(){
	$('#car').toggle();
});
/********/

/******** same script rewritten according to Peter Kassenaar ********/
$('#image_toggler').on('click', function(){
	$('#car').toggle();
});

// double click
$('#image_toggler_dbl').on('dblclick', function(){
	$('#car').toggle();
});
