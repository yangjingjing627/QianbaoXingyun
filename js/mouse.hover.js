var $showMask =$('.page3-con').find('.flex')
$showMask.hover(function (){
  $(this).find('.abs').removeClass('page3-ani-left').css('display','block').addClass('page3-ani-right')
  $(this).find('.item').removeClass('addOpacity').addClass('delOpacity')
  },function (){
    $(this).find('.abs').removeClass('page3-ani-right').addClass('page3-ani-left')
    $(this).find('.item').removeClass('delOpacity').addClass('addOpacity')
  });
