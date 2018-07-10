$(function() {
  var nowpage=0;
  var lock=true;
  function donghua(){
    $('.containter').animate({'top': -100*nowpage+'%'}, 500);
    $('.page').eq(nowpage).addClass('current').siblings().removeClass('current');
    $('.dian ul li').eq(nowpage).addClass('da').siblings().removeClass('da');
    $('.nav ul li').eq(nowpage).addClass('bg').siblings().removeClass('bg');
  }
  $(document).mousewheel(function (event,delta) {
    if(lock){
      nowpage=nowpage-delta;
      if(nowpage<0){nowpage=0;}
      if(nowpage>5){nowpage=5;}
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
    if(nowpage<=5){donghua();}
  });
  $('.dian ul li').click(function(event) {
    nowpage=$(this).index();
    donghua();
  });
});
