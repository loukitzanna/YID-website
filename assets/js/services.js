$(function(){
	$("#btnsale").click(function(){
		resetclick();
		$(".rent").css("display", "block");
	});
	$("#btnphoto").click(function(){
		resetclick();
		$(".photo").css("display", "block");
	});
	$("#btnbeauty").click(function(){
		resetclick();
		$(".face").css("display", "block");
	});
	$("#btnfloral").click(function(){
		resetclick();
		$(".floral").css("display", "block");
	});
	$("#btnorder").click(function(){
		resetclick();
		$(".print").css("display", "block");
	});
});

resetclick = function(){
	$(".rent").css("display", "none");
	$(".photo").css("display", "none");
	$(".floral").css("display", "none");
	$(".face").css("display", "none");
	$(".print").css("display", "none");
}