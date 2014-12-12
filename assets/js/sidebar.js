var isOpen = false;

var main = function(){
	
   
$('#sidebar-trigger').click(function(){
		// if sidebar is open, and clicked again
		if(isOpen){
		$('.menu').animate({
				left: '-200px'
			}, 200);
			
			$('body').animate({
				left:'0px'
			},200);
			isOpen = false
			}
		else{
			 $('.menu').animate({
				left:'0px'
				}, 200);
        
			$('body').animate({
				left: '200px'
				}, 200);
				isOpen=true;}
	 });
	
    
    $('.icon-close').click(function(){
        $('.menu').animate({
            left: '-200px'
        }, 200);
        
        $('body').animate({
            left:'0px'
        },200);
    });
};

$(document).ready(main);