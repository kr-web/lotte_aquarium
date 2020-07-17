// mousewheelPage.js

(function($){
	
	//$('html, body').stop(true, false).animate({scrollTop: winH * n});

	var win = $(window);
	var winH = win.innerHeight();
	var page = $('.page');
	var pageOffset = [];

	for(var i=0; i<page.length; i++){
		pageOffset[i] = page.eq(i).offset().top;
	}
	// console.log(pageOffset)


	$('#wrap').css({height:'auto'});
	page.css({height:winH});


	var n = 0;
	var ScrollN = function(evt){
		( evt.wheelDelta ) ? result = -evt.wheelDelta  :  result = evt.detail * 40 ;
		( result > 0 ) ? n += 1 :	n -= 1;
		if( n >= page.length ){ n = page.length; }else if(n < 0){ n = 0; }
		console.log(n)
		return n;
	};


	var mvTrue = true;
	win.on('mousewheel DOMMouseScroll', function(e){
		console.log( e.type );
		var evt = e.originalEvent;
		e.bubbles == false;
		if(mvTrue){
			mvTrue = false;			
			var result;
					
			ScrollN(evt);

			$('html').stop().animate({scrollTop: pageOffset[n] },300, function(){
				setTimeout(function(){
						mvTrue = true;
					}, 500)
				
			});
			
		}
	});

})(jQuery);