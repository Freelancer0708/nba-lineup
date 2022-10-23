// ページトップに行くボタン
$(document).ready(function () {
    $("#pagetop").hide();
    $(window).scroll(function () {
      if(screen.width < 767) {
        if ($(this).scrollTop() < screen.height) {
          $("#pagetop").fadeOut();
        } else {
          $("#pagetop").fadeIn();
        }
      } else {
        if ($(this).scrollTop() < 160) {
          $("#pagetop").fadeOut();
        } else {
          $("#pagetop").fadeIn();
        }
      }
    });
  });

  // loadingの終わりを教えてくれる
  (function() {
    var html = document.getElementsByTagName('html') || [];
    html[0].classList.add('enable-javascript');
    window.addEventListener("load", function() {
        html[0].classList.add('window-load');
    }, false);
})();

// loadingが終わったら動くもの
  $(window).load(function() {

    $(".").addClass("");
  });