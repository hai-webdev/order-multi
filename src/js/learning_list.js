var vm = new Vue({
  el: "#app",
  data() {
    return {
      learningList: [
        {
          name: "学术研究",
          id:"learning-1",
          other: {
            name: "学术发表",
            link: "paper_list.html",
          },
          isMore:false,
          list: [
            {
              id: 0,
              title: "VPU-下⼀代视觉处理芯⽚",
              link:"learning_view.html",
              img: "/public/imgs/home/research01.png",
              desc: "这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。",
            },
            {
              id: 1,
              title: "VPU-下⼀代视觉处理芯⽚",
              link:"learning_view.html",
              img: "/public/imgs/home/research01.png",
              desc: "这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。",
            },
            {
              id: 2,
              title: "VPU-下⼀代视觉处理芯⽚",
              link:"learning_view.html",
              img: "/public/imgs/home/research01.png",
              desc: "这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。",
            },
            {
              id: 3,
              title: "VPU-下⼀代视觉处理芯⽚",
              link:"learning_view.html",
              img: "/public/imgs/home/research01.png",
              desc: "这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。",
            },
          ],
        },
        {
          name: "工程问题",
          id:"learning-2",
          isMore:false,
          list: [
            {
              id: 0,
              title: "VPU-下⼀代视觉处理芯⽚",
              link:"learning_view.html",
              img: "/public/imgs/home/research01.png",
              desc: "这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。",
            },
            {
              id: 1,
              title: "VPU-下⼀代视觉处理芯⽚",
              link:"learning_view.html",
              img: "/public/imgs/home/research01.png",
              desc: "这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。",
            },
            {
              id: 2,
              title: "VPU-下⼀代视觉处理芯⽚",
              link:"learning_view.html",
              img: "/public/imgs/home/research01.png",
              desc: "这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。",
            },
            {
              id: 3,
              title: "VPU-下⼀代视觉处理芯⽚",
              link:"learning_view.html",
              img: "/public/imgs/home/research01.png",
              desc: "这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。",
            },
          ],
        },
        {
          name: "山云和月",
          id:"learning-3",
          isMore:false,
          list: [
            {
              id: 0,
              title: "VPU-下⼀代视觉处理芯⽚",
              link:"learning_view.html",
              img: "/public/imgs/home/research01.png",
              desc: "这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。",
            },
            {
              id: 1,
              title: "VPU-下⼀代视觉处理芯⽚",
              link:"learning_view.html",
              img: "/public/imgs/home/research01.png",
              desc: "这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。",
            },
            {
              id: 2,
              title: "VPU-下⼀代视觉处理芯⽚",
              link:"learning_view.html",
              img: "/public/imgs/home/research01.png",
              desc: "这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。",
            },
            {
              id: 3,
              title: "VPU-下⼀代视觉处理芯⽚",
              link:"learning_view.html",
              img: "/public/imgs/home/research01.png",
              desc: "这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。",
            },
            {
              id: 4,
              title: "VPU-下⼀代视觉处理芯⽚",
              link:"learning_view.html",
              img: "/public/imgs/home/research01.png",
              desc: "这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。",
            },
            {
              id: 5,
              title: "VPU-下⼀代视觉处理芯⽚",
              link:"learning_view.html",
              img: "/public/imgs/home/research01.png",
              desc: "这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。",
            },
            {
              id: 6,
              title: "VPU-下⼀代视觉处理芯⽚",
              link:"learning_view.html",
              img: "/public/imgs/home/research01.png",
              desc: "这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。",
            },
            {
              id: 7,
              title: "VPU-下⼀代视觉处理芯⽚",
              link:"learning_view.html",
              img: "/public/imgs/home/research01.png",
              desc: "这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向不超过 80 字。这⾥是简介，简单介绍⼀下科研⽅向，不超过 80 字。",
            },
          ],
        },
      ],
    };
  },
  methods:{
    toggleShow(item){
        item.isMore = !item.isMore;
    } 
  }
});
