
$(".m-nav-item").on("click", function () {
  $(".m-nav-sublist").slideToggle();
  $(this).find("a").find(".icon").toggleClass("on");
});
$(".menu-btn").on("click", function () {
  $(".m-nav-list").slideToggle();
  $(this).toggleClass("on");
});
