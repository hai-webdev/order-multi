var resource = new Vue({
  el: "#app",
  data: function () {
    return {
      isMore: false,
      resourceList: [
        {
          id: 0,
          title: "公共讲座｜这里是标题这里是标题这里是标题",
          desc: "公共讲座｜这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容。",
          img: "public/imgs/resource.png",
          link:"resource_view.html"
        },
        {
          id: 1,
          title: "公共讲座｜这里是标题这里是标题这里是标题",
          desc: "公共讲座｜这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容。",
          img: "public/imgs/resource.png",
          link:"resource_view.html"
        },
        {
          id: 2,
          title: "公共讲座｜这里是标题这里是标题这里是标题",
          desc: "公共讲座｜这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容。",
          img: "public/imgs/resource.png",
          link:"resource_view.html"
        },
        {
          id: 3,
          title: "公共讲座｜这里是标题这里是标题这里是标题",
          desc: "公共讲座｜这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容。",
          img: "public/imgs/resource.png",
          link:"resource_view.html"
        },
      ],
      pastActivityList: [
        {
          id: 0,
          title: "公共讲座｜这里是标题这里是标题这里是标题",
          desc: "公共讲座｜这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容。",
          img: "public/imgs/resource.png",
          link:"resource_view.html"
        },
        {
          id: 1,
          title: "公共讲座｜这里是标题这里是标题这里是标题",
          desc: "公共讲座｜这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容。",
          img: "public/imgs/resource.png",
          link:"resource_view.html"
        },
        {
          id: 2,
          title: "公共讲座｜这里是标题这里是标题这里是标题",
          desc: "公共讲座｜这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容。",
          img: "public/imgs/resource.png",
          link:"resource_view.html"
        },
        {
          id: 3,
          title: "公共讲座｜这里是标题这里是标题这里是标题",
          desc: "公共讲座｜这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容。",
          img: "public/imgs/resource.png",
          link:"resource_view.html"
        },
        {
          id: 4,
          title: "公共讲座｜这里是标题这里是标题这里是标题",
          desc: "公共讲座｜这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容。",
          img: "public/imgs/resource.png",
          link:"resource_view.html"
        },
        {
          id: 5,
          title: "公共讲座｜这里是标题这里是标题这里是标题",
          desc: "公共讲座｜这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容。",
          img: "public/imgs/resource.png",
          link:"resource_view.html"
        },
        {
          id: 6,
          title: "公共讲座｜这里是标题这里是标题这里是标题",
          desc: "公共讲座｜这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容。",
          img: "public/imgs/resource.png",
          link:"resource_view.html"
        },
        {
          id: 7,
          title: "公共讲座｜这里是标题这里是标题这里是标题",
          desc: "公共讲座｜这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容。",
          img: "public/imgs/resource.png",
          link:"resource_view.html"
        },
        {
          id: 4,
          title: "公共讲座｜这里是标题这里是标题这里是标题",
          desc: "公共讲座｜这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容。",
          img: "public/imgs/resource.png",
          link:"resource_view.html"
        },
        {
          id: 5,
          title: "公共讲座｜这里是标题这里是标题这里是标题",
          desc: "公共讲座｜这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容。",
          img: "public/imgs/resource.png",
          link:"resource_view.html"
        },
        {
          id: 6,
          title: "公共讲座｜这里是标题这里是标题这里是标题",
          desc: "公共讲座｜这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容。",
          img: "public/imgs/resource.png",
          link:"resource_view.html"
        },
        {
          id: 7,
          title: "公共讲座｜这里是标题这里是标题这里是标题",
          desc: "公共讲座｜这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容，这里是内容这里是内容这里是内容。",
          img: "public/imgs/resource.png",
          link:"resource_view.html"
        },
      ],
    };
  },
  methods: {
    toggleShow() {
      this.isMore = !this.isMore;
    },
  },
});

var bannerSwiper = new Swiper(".banner-container", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
