
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
