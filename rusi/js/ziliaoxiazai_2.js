// JavaScript Document

$(document).ready(function(){
						   

//ҳ�淭ת
  $(function(){
    var cur = 1;
       len = $('.winx_czz ul li').length;
	$('.leftx_czz,.rightx_czz').hover(function(){
	  $(this).toggleClass('hover')
	})
	$('.rightx_czz').click(function(){
	   if(cur<len){
	      abc_czz(cur++);
	   }
	});
	$('.leftx_czz').click(function(){
	   if(cur>1){
	      abc_czz(cur--);
	   }
	})
	//��������������
	function abc_czz(){
	   $('.winx_czz ul').animate({'top':-279*(cur-1)},500);
	}
})       

//���tab�л�
        $('.ul_czz li').click(function(){
				var index=$(this).index();
				$(this).siblings().children('span').not(':hidden').hide();
				$(this).find('span').toggle();
			    $('.chuangkou').eq(index).show().siblings().hide();
		})





});
















