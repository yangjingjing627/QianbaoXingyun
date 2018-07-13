$(function() {
  var nowpage=0;
  var lock=true;
  var $page2Main = $('#page2Main');

  function donghua(){
    $('.containter').animate({'top': -100*nowpage+'%'}, 500);
    $('.page').eq(nowpage).addClass('current').siblings().removeClass('current');
    $('.dian ul li').eq(nowpage).addClass('da').siblings().removeClass('da');
    $('.nav ul li').eq(nowpage).addClass('bg').siblings().removeClass('bg');
    if (nowpage === 2) {
      console.log('这是第三页');
      $page2Main.addClass('page2-animate')
    } else {
      setTimeout(removeClass, 100);
    }
  }
  function removeClass(){
		$page2Main.removeClass('page2-animate');
	}
  $(document).mousewheel(function (event,delta) {
    if(lock){
      nowpage=nowpage-delta;
      if(nowpage<0){nowpage=0;}
      if(nowpage>3){nowpage=3;}
       donghua();
      lock=false;
      setTimeout(function  () {
        // body...
        lock=true;
      },1000);
    }
  })
  $('.nav ul li').click(function(event) {
    nowpage=$(this).index();
    if(nowpage<=3){donghua();}
  });
  $('.dian ul li').click(function(event) {
    nowpage=$(this).index();
    donghua();
  });
});
