new WOW().init();
const authorsArr = $(".authors");

for (let i = 0; i < authorsArr.length; i++) {
    const el = authorsArr.eq(i);
    const authors = el.data("authors");
    const len = authors ? authors.split(",").length : 0;
    // 判断长度是否大于2,如果大于2，对里面的作者进行合并
    if(len > 2){
        el.find(".author").hide();
        el.find(".author").eq(0).show();
        el.find(".author").eq(1).show();
        el.find(".authors-more").show();
        el.find(".authors-more").text(`+ ${len - 2} authors`);
        el.attr("num", len);
    } else{
        el.find(".authors-more").hide();
    }
    renderWidth(el);
    $(window).resize(function(){
        renderWidth(el);
    })
}

$(".authors-more").on("click", function(){
    const len = $(this).parent().attr("num");
    const textChange = $(this).text().includes("authors");
    if(textChange){
        $(this).parent().find(".author").show();
        $(this).text("hide more");
        $(this).parent().addClass("expand");
        renderWidth($(this).parent(), true);
    }else{
        $(this).parent().find(".author").hide();
        $(this).parent().find(".author").eq(0).show();
        $(this).parent().find(".author").eq(1).show();
        $(this).text(`+ ${len - 2} authors`);
        $(this).parent().removeClass("expand");
        renderWidth($(this).parent());
    }
    
})

function renderWidth(el ,isPercentage){
    const elWidth = el.outerWidth(true);
    const parentWidth = el.parent().width();
    el.parent().find(".right-layouot").css({
        width:isPercentage ? '100%' : parentWidth - elWidth - 10
    })
}