//回到顶部功能
var $window = $(window);
var $goTop = $('.go-top');

$window.on('scroll', function () {
    var scrollTop = $window.scrollTop();
    if(scrollTop > 300) {
        $goTop.show()
    }else {
        $goTop.hide()
    }
});
$goTop.on('click', function () {
    //设置整个文档的顶部，而不是window的顶部
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
})