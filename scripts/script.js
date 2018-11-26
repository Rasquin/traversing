$(document).ready(function() {


	$("#stream1_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream3").addClass('highlight_stream');
	});

	/*------------------CHALLENGE I---------*/
	$("p").on("click", function() {
		$(this).children("a").css("background-color", "yellow");
	});

	/*------------------CHALLENGE II------------------*/
	$("button").click(function() { //do the same than .on("click", function(){})
		$(this).next().slideToggle("slow");
	});

	/*------------------CHALLENGE III------------------*/
	$("img").click(function() {
		$(this).next().children('p').slideDown("slow");
	});
	/*------------------CHALLENGE IV------------------*/
	$(".card").click(function() {
		$(this).toggleClass("card_color");
	});

	/*------------------CHALLENGE V------------------*/
	$("#select_btn").click(function() {
		$(".card:not(.card_color)").hide();
	});
	$("#all_btn").click(function() {
		$(".card").show();
	})
	

});
