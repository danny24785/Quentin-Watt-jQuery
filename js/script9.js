// Script for #9

/******** script according to Quentin
$(':text').focusin(function(){
	$(':text').css('background', 'blue')
});
********/

/******** same script rewritten according to Peter Kassenaar ********/
$(':text').on('focusin', function(){
	$(this).css('background', 'blue')
});
$(':text').on('blur', function(){
	$(this).css('background', 'none')
});