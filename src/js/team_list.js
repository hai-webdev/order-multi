var resource = new Vue({
  el: "#app",
  data: function () {
    return {
      isMore: false,
      teamList: [
        {
          name: "教师团队",
          id:0,
          isMore:false,
          list: [
            {
              id: 0,
              fullname: "人名",
              position: "职位",
              desc: "研究方向，这里是教师的研究方向这",
              img: "public/imgs/home/news.jpg",
            },
            {
              id: 1,
              fullname: "人名",
              position: "职位",
              desc: "研究方向，这里是教师的研究方向这",
              img: "public/imgs/home/news.jpg",
            },
            {
              id: 2,
              fullname: "人名",
              position: "职位",
              desc: "研究方向，这里是教师的研究方向这",
              img: "public/imgs/home/news.jpg",
            },
            {
              id: 3,
              fullname: "人名",
              position: "职位",
              desc: "研究方向，这里是教师的研究方向这",
              img: "public/imgs/home/news.jpg",
            },
          ],
        },
        {
          name: "研究团队",
          id:1,
          isMore:false,
          list: [
            {
              id: 0,
              fullname: "人名",
              position: "职位",
              desc: "研究方向，这里是教师的研究方向这",
              img: "public/imgs/home/news.jpg",
            },
            {
              id: 1,
              fullname: "人名",
              position: "职位",
              desc: "研究方向，这里是教师的研究方向这",
              img: "public/imgs/home/news.jpg",
            },
            {
              id: 2,
              fullname: "人名",
              position: "职位",
              desc: "研究方向，这里是教师的研究方向这",
              img: "public/imgs/home/news.jpg",
            },
            {
              id: 3,
              fullname: "人名",
              position: "职位",
              desc: "研究方向，这里是教师的研究方向这",
              img: "public/imgs/home/news.jpg",
            },
            {
              id: 4,
              fullname: "人名",
              position: "职位",
              desc: "研究方向，这里是教师的研究方向这",
              img: "public/imgs/home/news.jpg",
            },
            {
              id: 5,
              fullname: "人名",
              position: "职位",
              desc: "研究方向，这里是教师的研究方向这",
              img: "public/imgs/home/news.jpg",
            },
            {
              id: 6,
              fullname: "人名",
              position: "职位",
              desc: "研究方向，这里是教师的研究方向这",
              img: "public/imgs/home/news.jpg",
            },
            {
              id: 7,
              fullname: "人名",
              position: "职位",
              desc: "研究方向，这里是教师的研究方向这",
              img: "public/imgs/home/news.jpg",
            },
            {
              id: 8,
              fullname: "人名",
              position: "职位",
              desc: "研究方向，这里是教师的研究方向这",
              img: "public/imgs/home/news.jpg",
            },
            {
              id: 9,
              fullname: "人名",
              position: "职位",
              desc: "研究方向，这里是教师的研究方向这",
              img: "public/imgs/home/news.jpg",
            },
            {
              id: 10,
              fullname: "人名",
              position: "职位",
              desc: "研究方向，这里是教师的研究方向这",
              img: "public/imgs/home/news.jpg",
            },
            {
              id: 11,
              fullname: "人名",
              position: "职位",
              desc: "研究方向，这里是教师的研究方向这",
              img: "public/imgs/home/news.jpg",
            },
          ],
        },

      ],

    };
  },
  methods: {
    toggleShow(item) {
      item.isMore = !item.isMore;
    },
  },
});
