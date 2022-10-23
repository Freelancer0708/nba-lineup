//spメニュー（ハンバーガーメニュー）

function hamburger() {
  document.getElementById("hamburger").classList.toggle("bg_white_2");
}

document.getElementById("menu-trigger").addEventListener("click", function () {
  hamburger();
});

$(function () {
  $(".menu-trigger").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("nav").removeClass("open");
      $(".overlay").removeClass("open");
      $(".sp-logo").removeClass("bg_white_2");
    } else {
      $(this).addClass("active");
      $("nav").addClass("open");
      $(".overlay").addClass("open");
      $(".sp-logo").addClass("bg_white_2");
    }
  });
  $(".overlay").on("click", function () {
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".menu-trigger").removeClass("active");
      $("nav").removeClass("open");
    }
  });
});