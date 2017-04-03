$(document).ready(function(){

	var guess_1 = false;
	var guess_2 = false;
	var guess_3 = false;

	var submitted_1 = false;
	var submitted_2 = false;
	var submitted_3 = false;

// SUBMIT BUTTON ON 1ST PAGE
	$("#submit_1").click(function(e){
		e.preventDefault();
		$("#base").css("background", "#D8BFD8"); // makes second page purple
		$("html, body").animate({scrollTop: 800}, 600);

		var guess_val_1 = $("#options_1").val(); // record the user's guess
		console.log("Q1: User guessed " +guess_val_1);

		if(guess_val_1 == "option_1.2"){ guess_1 = true; }
		submitted_1 = true;
	});

// PREVIOUS BUTTON ON 2ND PAGE
	$("#prev_2").click(function(e){
		e.preventDefault();
		$("#base").css("background", "#ffe6e6"); // makes first page pink
		$("html, body").animate({scrollTop: 0}, 600);
	});

// SUBMIT BUTTON ON 2ND PAGE
	$("#submit_2").click(function(e){
		e.preventDefault();
		$("#base").css("background", "#ADEAEA"); // makes third page blue
		$("html, body").animate({scrollTop: 1600}, 600);

		var guess_val_2 = $("#options_2").val();
		console.log("Q2: User guessed " +guess_val_2);

		if(guess_val_2 == "option_2.1"){ guess_2 = true; }
		submitted_2 = true;
	});

// PREVIOUS BUTTON ON 3RD PAGE
	$("#prev_3").click(function(e){
		e.preventDefault();
		$("#base").css("background", "#D8BFD8"); // makes second page purple
		$("html, body").animate({scrollTop: 800}, 600);
	});

// SUBMIT BUTTON ON 3RD PAGE
	$("#submit_3").click(function(e){
		e.preventDefault();
		$("#base").css("background", "#D0FAEE"); // makes fourth page green
		$("html, body").animate({scrollTop: 2400}, 600);

		var guess_val_3 = $("#options_3").val();
		console.log("Q3: User guessed " +guess_val_3);

		if(guess_val_3 == "option_3.3"){ guess_3 = true; }
		submitted_3 = true;
	});

// CLICK HERE
	$("#click_here").click(function(e){
		
		var answerAppear = "";

		if(!submitted_1 || !submitted_2 || !submitted_3){
			answerAppear = "Quiz is incomplete!"
		}else{
			// TALLYING UP ANSWERS
			var count = 0; // initially no correct answers
			if(guess_1) count++;
			if(guess_2) count++;
			if(guess_3) count++;
			answerAppear = "You got " +count+"/3 questions correct!";
		}

		$("#grade").text(answerAppear).fadeIn(50);
		
	});


}); // ends $(document).ready(funtion(){
