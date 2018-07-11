//下载文件
_download: function(filename, content) {
    var blob = new Blob([content], {
      type: 'text'
    });
    var a = document.getElementById('downloadFtsetBtn');
    if (a == undefined) {
      a = document.createElement('a');
      a.id = 'downloadFtsetBtn';
      a.style.display = 'none';
      a.target = '_blank';
      document.body.appendChild(a);
    }
    try {
      var URL = window.URL || window.webkitURL;
      a.href = URL.createObjectURL(blob);
      a.download = filename;
      if (typeof navigator.msSaveBlob == "function") { //IE
        navigator.msSaveBlob(blob, filename);　　　　　　　　　　
      }
      a.click();

      catch (e) {

      }

    }
  }
