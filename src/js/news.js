var newVue = new Vue({
  el: "#app",
  data() {
    return {
      newsList: [
        {
          id: 0,
          img: "public/imgs/news.jpg",
          title: "这里是小新闻标题",
          desc: "搞个⼤新闻，⾸要义务是搞个⼤新闻，让⼤家都在乎的⼤新闻，⽽不是只有⼀⼩部分⼈在意的⼩新闻。搞个⼤新闻好吗，⾸要义务是搞个⼤新闻，让⼤家都在乎的⼤新闻，⽽不是只有⼀⼩部分⼈在意的⼩新闻。",
          link: "news_view.html",
        },
        {
          id: 1,
          img: "public/imgs/news.jpg",
          title: "这里是小新闻标题",
          desc: "搞个⼤新闻，⾸要义务是搞个⼤新闻，让⼤家都在乎的⼤新闻，⽽不是只有⼀⼩部分⼈在意的⼩新闻。搞个⼤新闻好吗，⾸要义务是搞个⼤新闻，让⼤家都在乎的⼤新闻，⽽不是只有⼀⼩部分⼈在意的⼩新闻。",
          link: "news_view.html",
        },
        {
          id: 2,
          img: "public/imgs/news.jpg",
          title: "这里是小新闻标题",
          desc: "搞个⼤新闻，⾸要义务是搞个⼤新闻，让⼤家都在乎的⼤新闻，⽽不是只有⼀⼩部分⼈在意的⼩新闻。搞个⼤新闻好吗，⾸要义务是搞个⼤新闻，让⼤家都在乎的⼤新闻，⽽不是只有⼀⼩部分⼈在意的⼩新闻。",
          link: "news_view.html",
        },
        {
          id: 3,
          img: "public/imgs/news.jpg",
          title: "这里是小新闻标题",
          desc: "搞个⼤新闻，⾸要义务是搞个⼤新闻，让⼤家都在乎的⼤新闻，⽽不是只有⼀⼩部分⼈在意的⼩新闻。搞个⼤新闻好吗，⾸要义务是搞个⼤新闻，让⼤家都在乎的⼤新闻，⽽不是只有⼀⼩部分⼈在意的⼩新闻。",
          link: "news_view.html",
        },
        {
          id: 4,
          img: "public/imgs/news.jpg",
          title: "这里是小新闻标题",
          desc: "搞个⼤新闻，⾸要义务是搞个⼤新闻，让⼤家都在乎的⼤新闻，⽽不是只有⼀⼩部分⼈在意的⼩新闻。搞个⼤新闻好吗，⾸要义务是搞个⼤新闻，让⼤家都在乎的⼤新闻，⽽不是只有⼀⼩部分⼈在意的⼩新闻。",
          link: "news_view.html",
        },
      ],
    };
  },
});

var history = new Vue({
  el: "#history",
  data: function () {
    return {
      pageShow: false,
      left: 0,
      dateWidth: 0,
      centerIndex: 0,
      activeIndex: 0,
      historyList: [
        {
          id: 0,
          date: "2019.11",
          text: "1于国家博物馆参展《第五届艺术与科学国际作品展》",
          img: "public/imgs/history.png",
        },
        {
          id: 1,
          date: "2020.03",
          text: "2荣获《2019年度中国设计权力榜 DESIGN POWER 100》",
          img: "public/imgs/history.png",
        },
        {
          id: 2,
          date: "2020.10",
          text: "3于国家博物馆参展《第五届艺术与科学国际作品展》",
          img: "public/imgs/history.png",
        },
        {
          id: 3,
          date: "2020.10",
          text: "4于国家博物馆参展《第五届艺术与科学国际作品展》",
          img: "public/imgs/history.png",
          on: true,
        },
        {
          id: 4,
          date: "2019.11",
          text: "5于国家博物馆参展《第五届艺术与科学国际作品展》",
          img: "public/imgs/history.png",
        },
        {
          id: 5,
          date: "2019.11",
          text: "6于国家博物馆参展《第五届艺术与科学国际作品展》",
          img: "public/imgs/history.png",
        },
        {
          id: 6,
          date: "2019.11",
          text: "7于国家博物馆参展《第五届艺术与科学国际作品展》",
          img: "public/imgs/history.png",
        },
        {
          id: 7,
          date: "2019.11",
          text: "8于国家博物馆参展《第五届艺术与科学国际作品展》",
          img: "public/imgs/history.png",
        },
        {
          id: 8,
          date: "2019.11",
          text: "9于国家博物馆参展《第五届艺术与科学国际作品展》",
          img: "public/imgs/history.png",
        },
      ],
    };
  },
  mounted: function () {
    this.ul = $(this.$refs.dateList);
    this.li = this.ul.find(".date-item");
    this.liWidth = this.li.width();
    this.ulWidth = this.li.length * this.liWidth;
    $(".date-list").width(this.ulWidth);
    $(".history-item").hide();
    $(".history-item").eq(this.activeIndex).fadeIn().addClass("on");
    $(".date-item").eq(this.centerIndex).addClass("on");
  },
  created: function () {
    this.activeIndex = Math.floor(this.historyList.length / 2) - 1;
    this.centerIndex = this.activeIndex;

  },
  methods: {
    changeIndex: function (index) {
        var that = this;
      $(".date-item").removeClass("on");
      $(".date-item").eq(index).addClass("on");

      this.activeIndex = index;
      this.left = (this.centerIndex - index) * this.liWidth + "px";
      $(".history-item").hide();
      $(".history-item").removeClass("on");

      $(".history-item").eq(that.activeIndex).show();
      setTimeout(function () {
        $(".history-item").eq(that.activeIndex).addClass("on");
      }, 200);
    },
  },
});
