$(function(){
	var imgAll = $('.carousel-inner img');
	var item = $('.carousel-inner .item');
	var srcollWrap = $('.srcoll-wrap');
	var srcollWrapUl = $('ul',srcollWrap);
	var srcollWrapLi = $('li',srcollWrap);
	var allWidth = 0;
	srcollWrapLi.each(function(index, el) {
		var _el = $(el);
		allWidth += _el.width();
	});
	srcollWrapUl.width(allWidth);
	$(window).resize(_resize).trigger('resize');
	function _resize (){
		var windowWidth = $(this).width();
		var isSmallScreen = windowWidth < 640;		
		imgAll.each(function(index, el) {
			var _el = $(el);
			var src = _el.data(isSmallScreen ? 'ssrc' : 'bsrc');
			_el.attr('src',src);
			_el.css({
				height : isSmallScreen ? 'auto' : 410,
				position : isSmallScreen ? 'static' : 'absolute',
				transform : isSmallScreen ? 'none' : 'translateX(-50%)',
				width : isSmallScreen ? '100%' : 'auto'
			})	
		})
		item.height(isSmallScreen ? 'auto' : 410);
		console.log(srcollWrap)
		srcollWrap.css('overflow',isSmallScreen ? 'scroll' : 'visible')
	}
	var carousel = $('.carousel');
	var startX = 0;  
	carousel.on('touchstart',function(e){	
		startX = e.originalEvent.touches[0].pageX;
	})
	carousel.on('touchend',function(e){
		var dx = e.originalEvent.changedTouches[0].pageX - startX;
		if(Math.abs(dx) > 50){
			if(dx > 0){
				carousel.carousel('prev');
			}else{
				carousel.carousel('next');
			}
		}

	})

})