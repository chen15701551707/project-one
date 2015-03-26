// JavaScript Document



$(document).ready(function(){
	/*最新问题 向专家提问不分领域*/
    //调整
	$('.tit_W dl dd').click(function(){
		$(this).addClass('hover').siblings().removeClass('hover');
		var index=$(this).index();
		$('.tit_conMl_w').eq(index).show().siblings().hide();
		});
	//调整
	$('.no').hover(function(){
	
	     $(this).toggleClass('hover');
	})
	
	/*最新问题 向专家提问不分领域  隐藏显示部分*/
	$('.tit_conMl dl dd').mousedown(function(){
		$( this ).siblings().slideDown();
		$( this ).parent().siblings().children('.tit_conMl dl dt').not(':hidden').slideUp();
		});
	$('.hide_btn').click(function(){
		$( this ).parent().slideUp()
		});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});



















