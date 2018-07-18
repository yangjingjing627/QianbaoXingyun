// 直接下载，用户体验好
function download2() {
    var $form = $('<form method="GET"></form>');
    $form.attr('action', '/download/papers/1');
    $form.appendTo($('body'));
    $form.submit();
}

// var frame = document.createElement("iframe");
//
// if ( frame ) {
//   document.body.appendChild(frame);
//   frame.setAttribute("style", "display:none");
//   frame.contentDocument.open("static/qos.pdf", "replace");
//   frame.contentDocument.write(data); // data 是 string 类型
//   frame.contentDocument.close();
//   frame.focus();
//
//   frame.contentDocument.execCommand("SaveAs", true, filename);
//   document.body.removeChild(frame);
// }
// 法2
// export const downloadFile = (fileName, url) => {
//   if (isIE()) {
//     ieDown(url)
//   } else {
//     const aLink = document.createElement('a');
//     const evt = document.createEvent('MouseEvents');
//     // var evt = document.createEvent("HTMLEvents")
//     evt.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
//     aLink.download = fileName;
//     aLink.href = url;
//     aLink.dispatchEvent(evt)
//   }
// };

// const ieDown = url => {
//   window.open(url)
// };

// const isIE = () => {
//   const explorer = window.navigator.userAgent;
//   return explorer.indexOf('MSIE') >= 0 || explorer.indexOf('Trident/7.0') >= 0 || explorer.indexOf('Edge') >= 0;
// };

function isIE() {
  var explorer = window.navigator.userAgent;
  return explorer.indexOf('MSIE') >= 0 || explorer.indexOf('Trident/7.0') >= 0 || explorer.indexOf('Edge') >= 0;
}
function ieDown(url) {
  window.open(url)
}
function downloadFile(fileName, url){
  if (isIE()) {
    ieDown(url)
  } else {
    const aLink = document.createElement('a');
    const evt = document.createEvent('MouseEvents');
    // var evt = document.createEvent("HTMLEvents")
    evt.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    aLink.download = fileName;
    aLink.href = url;
    aLink.dispatchEvent(evt)
  }
}
