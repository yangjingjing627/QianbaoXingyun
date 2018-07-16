// title添加走马灯效果
$(function(){
    var title=$("title").html();
    var temptitle=title;
    var length=title.length;
    setInterval(function(){
        temptitle=temptitle.concat(temptitle.charAt(0));
        length=temptitle.length;
        temptitle=temptitle.substring(1,length);
        $("title").html(temptitle);
    }, 500);

});
