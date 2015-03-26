// JavaScript Document


$(document).ready(function(){
  $('.x_content .xl_content ol li').hover(function(){
	  var index=$(this).index();
	$(this).addClass('hover').siblings().removeClass('hover')  
	$(this).children('a').addClass('hover').parent().siblings().children('a').removeClass('hover')
	$('.xr1_content .xr_content').eq(index).show().siblings().hide();
	})
   //弹出层效果
	//遮罩
	function conPosition(){
		var bj =document.getElementById('shade');
		var bw = $(document).width();
		var bh = $(document).height();
		bj.style.width= bw+'px';
		bj.style.height= bh+'px';
	}
	var $g_quiz =$('.g_quiz0')
   $('.tanch').click(function(){
    $('#shade,.referral0').show();
	conPosition();
   })
   $('#shade,.off').click(function(){
    $('.referral0,#shade').hide();
   })
   //提问窗口
   //弹出层效果
   $('.quiz').click(function(){
        $('#shade,.g_quiz0').show();
		conPosition();
		$('body,html').animate({'scrollTop':700},500);// 滚动条的动画
		$g_quiz.css('top',$('.title_W,.x_content').offset().top);
		$g_quiz.css('left',($(window).width()-$g_quiz.outerWidth())/2+'px');

   })
   $('#shade,.off2').click(function(){
    $('.g_quiz0,#shade').hide();
   })
   $('.off,.off2').hover(function(){
       $(this).find('em').toggleClass('hover');
   });
})









