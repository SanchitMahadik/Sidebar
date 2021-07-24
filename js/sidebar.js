$.getJSON( "data/sidebar.json", function( data ) {
	
	var newContent = $("<div class='accordion_content'></div>");
	
	$.each(data.menu, function (key, val) {
		var newList = $("<p class='accordion_head'>"+ val.name +"</p>")
		if (val.sub != null){
		var item = $("<ul class='accordion_body'>");
		
		$.each(val.sub, function (key, sub) {
			item.append("<li><a  href='#'>" + sub.name + "</a></li>");
			
		});
			newList.appendTo(newContent);
		}
			item.appendTo(newContent);
		});
		newContent.appendTo("#mySidebar");
		
	$(document).ready(function(){
		 $('.openbtn').click(function(){
			$('#mySidebar').animate({width:268, display:'none'});
			$('#main').animate({marginLeft:268});
		}); 

	 	$('.closebtn').click(function(){
			$('#mySidebar').animate({width:0, display:'none'});
			$('#main').animate({marginLeft:0});
		}); 


	$(".accordion_head:first").addClass("active");
	$(".accordion_body:not(:first)").hide();

	$(".accordion_head").click(function(){
		$(this).next(".accordion_body").slideToggle("slow")
		.siblings(".accordion_body:visible").slideUp("slow");
		$(this).toggleClass("active");
		$(this).siblings(".accordion_head").removeClass("active");
	});
	
	$(".accordion_body li:first").addClass("selected");
	$('.accordion_body li').click(function(){
		$('li').removeClass("selected");
		$(this).addClass("selected");
	}); 
	
	$(".accordion_body a:first").addClass("textcolor");
	$('.accordion_body a').click(function(){
		$('a').removeClass("textcolor");
		$(this).addClass("textcolor");
	}); 
	
	
	
	}) 
  
})