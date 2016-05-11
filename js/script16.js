// Script for #16

/******** script according to Quentin */
$('#username').keyup(function(){
	var username_value = $('#username').val();
	$('#username_feedback').html(username_value);
});
/********
$('#username').on('keydown', function(){
	alert('u have pressed key');								
});

/******** same script rewritten according to Peter Kassenaar ********/
