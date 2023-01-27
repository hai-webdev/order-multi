var bannerSwiper = new Swiper(".banner-container", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

controlAcademicHeight();
$(window).resize(function () {
  controlAcademicHeight();
});

/**
 * 控制学术发表的高度
 */
function controlAcademicHeight() {
  // 获取视口宽度
  const viewWidth = $(window).width();
  if (viewWidth > 768) {
    // 获取综合新闻的高度
    const newHeight = $(".news-list").height();
    // 给学术发表赋值
    $(".article-list").height(newHeight);
  }
  if(viewWidth < 768){
      $(".team-container .team-wrapper .team-list .team-item").eq(2).hide();
  }
}
