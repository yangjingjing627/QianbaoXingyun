// 直接下载，用户体验好
function download2() {
    var $form = $('<form method="GET"></form>');
    $form.attr('action', '/download/papers/1');
    $form.appendTo($('body'));
    $form.submit();
}
