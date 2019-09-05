$(function(){
	// 按鈕滑動至指定位置
	$("nav a").click(function(event){
		event.preventDefault(); //取消(a)事件(置頂)默認值
		var btn = $(this) .attr("href"); //返回取得屬性與值
		var pos = $(btn).offset(); //抓取相對的座標位置
		$("html,body").animate({ scrollTop: pos.Top },1000);
		//變數pos的Top(y軸)
		});	                                                     


// 置頂按鈕的區塊－－－
// 我要取得（誰）  $('')  [#goTop(id)]
$('#goTop').click(function(){
// 我要控制捲軸 的 動畫
  $('html,body').animate({
  	scrollTop:0
},1000);
});


// 置頂按鈕的淡入淡出－－－
// 配合js,先讓Top鈕隱藏 >>去css修改

// 先抓捲軸
$(window).scroll(function(){
	// 如果滾到的scrolTop <200 的位置時
   if( $(this).scrollTop() <200 ){
    // 我要fadeOut（沒寫的話是預設速度）很慢的消失：slow(看你要不要調整速度)
       $('#goTop').sTop().fadeOut('fast');
    }
    // 否則
   else{  $('#goTop').sTop().fadeTo('fast',1);

   }

 });

});

