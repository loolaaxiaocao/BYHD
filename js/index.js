$(function(){

// =========================呼吸轮播图动画========================
	var index = 0;
	var imgLis = $('#banner ul li');
	var criclesLis = $('#banner ol li');

 	var timer_banner = setInterval(toNext,1500);

 	$('#banner').mouseenter(function(){
 		clearInterval(timer_banner);
 		$('#banner .btn').css('display','block');
 	})
 	$('#banner').mouseleave(function(){
 		timer_banner = setInterval(toNext,1500);
 		$('#banner .btn').css('display','none');
 	})
	$('#next').click(toNext);

	function toNext(){
		imgLis.eq(index).stop().animate({'opacity':0},800,function(){
			$(this).css('display','none');
		});
		index++;
		if(index >= imgLis.length){
			index = 0;
		}
		imgLis.eq(index).css('display','block').stop().animate({'opacity' : 1},800);
		changeCricles();
	}
	$('#prve').click(function(){
		imgLis.eq(index).stop().animate({'opacity':0},800,function(){
			$(this).css('display','none');
		});
		index--;
		if(index < 0){
			index = imgLis.length - 1;
		}
		imgLis.eq(index).css('display','block').stop().animate({'opacity' : 1},800);
		changeCricles();
	});
	criclesLis.click(function(){
		if(index == $(this).index()) return;
		imgLis.eq(index).stop().animate({'opacity':0},800,function(){
			$(this).css('display','none');
		});
		index = $(this).index();
		imgLis.eq(index).css('display','block').stop().animate({'opacity' : 1},800);
		changeCricles();
	})
	function changeCricles(){
		var nowing = index;
		if(nowing >= criclesLis.length){
			nowing = 0;
		}
		criclesLis.eq(nowing).css('background','orange').siblings().css('background','gold');
	}

// =========================主体部分图片下滑========================
	$('#main ul li').mouseenter(function(){
		$('#main ul li .hidden_img').eq($(this).index()).stop().animate({'top' : '0px'},400);
	})
	$('#main ul li').mouseleave(function(){
		$('#main ul li .hidden_img').eq($(this).index()).stop().animate({'top' : '-177px'},400);
	})

// =========================parter部分无缝滚动========================
	var move_unit = $('#parter .loop .move_unit');
	move_unit[0].innerHTML += move_unit[0].innerHTML;

	var nowLeft = 0;
	$('#parter .loop').mouseover(function(){
		clearInterval(timer_loop);
	})
	$('#parter .loop').mouseout(function(){
		timer_loop = setInterval(loopMove,20);
	})
	var timer_loop = setInterval(loopMove,20);
	function loopMove(){
		console.log(nowLeft);
		nowLeft -= 2;
		if(nowLeft == -$('#parter ul')[0].offsetWidth) nowLeft = 0;
		move_unit[0].style.left = nowLeft + 'px';
	}
})
