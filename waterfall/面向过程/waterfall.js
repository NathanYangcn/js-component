var $window = $(window);
var $lis = $('.ct>li');

function render() {
    //瀑布流图片布局渲染方法 ↓
    var $imgCt = $('.ct'),
        $items = $('.ct>li'),
        ctWidth = $imgCt.width(),
        itemsWidth = $items.outerWidth(true),
        //初始化 ↓
        cols = parseInt(ctWidth / itemsWidth),
        itemsArr = [];

    for(var i = 0; i < cols; i++){
        itemsArr[i] = 0;
    }
    //遍历每个元素，按照规定进行摆放 ↓
    $items.each(function () {
        var $this = $(this),
            thisHeight = $this.outerHeight(true),

            minHeight = Math.min.apply(null, itemsArr),
            minIndex = itemsArr.indexOf(minHeight);

        $this.css({
            top: minHeight,
            left: minIndex * itemsWidth
        });
        itemsArr[minIndex] += thisHeight;
    });
}

//进入页面初次调用 ↓
$lis.find('img').on('load', function(){
    render();
});
//监听窗口宽高的改变，以便重新调用瀑布流函数渲染界面 ↓
$window.on('resize', function(){
    render();
});   