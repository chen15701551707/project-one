// JavaScript Document
$(function(){
	$('.xt3_content ol li').hover(function(){
		var index=$(this).index();
		$(this).addClass('hover').siblings().removeClass('hover');
		$('.xt_content .xt2_content').stop().animate({'left':-904*index},500);
	});
	$('.xtb_content .xtb3_content dl').hover(function(){
		$('.xtb_content .xtb3_content dl dt i').toggleClass('hover');
		$('.xtb_content .xtb3_content dl dd').toggle();	
	});
});