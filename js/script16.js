// Script for #16

/******** script according to Quentin */
$('#username').keyup(function(){
	var max_length = 20;
	var username_length = $('#username').val().length;
	var chars_left = max_length - username_length;
	if (chars_left < 0){
		$('#username').css('border', '1px solid red');
	}
	else if (chars_left >= 0){
		$('#username').css('border', '1px solid black');
	}
	$('#username_feedback').html(chars_left);
});
/********

/******** same script rewritten according to Peter Kassenaar ********/
