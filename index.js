$(document).ready(function(){

	// SUBMIT BUTTON ON 1ST PAGE
	$("#submit_1").click(function(e){
		e.preventDefault();
		$("html, body").animate({scrollTop: 800}, 600);
	});

	// PREVIOUS BUTTON ON 2ND PAGE
	$("#prev_2").click(function(e){
		e.preventDefault();
		$("html, body").animate({scrollTop: 0}, 600);
	});

	// SUBMIT BUTTON ON 2ND PAGE
	$("#submit_2").click(function(e){
		e.preventDefault();
		$("html, body").animate({scrollTop: 1600}, 600);
	});

	// PREVIOUS BUTTON ON 3RD PAGE
	$("#prev_3").click(function(e){
		e.preventDefault();
		$("html, body").animate({scrollTop: 800}, 600);
	});

	// SUBMIT BUTTON ON 3RD PAGE
	$("#submit_3").click(function(e){
		e.preventDefault();
		$("html, body").animate({scrollTop: 2400}, 600);
	});


}); // ends $(document).ready(funtion(){
