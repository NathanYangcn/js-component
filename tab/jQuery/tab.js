var $header = $('.header');
//var $headerLis = $('.header>li');
var $contents = $('.content>li');
        
$header.on('click', 'li', function () {
    var $this = $(this);
    var index = $this.index();

    $this.siblings().removeClass('active');
    $this.addClass('active');

    $this.parents('.tab').find($contents)
        .removeClass('active');
    $this.parents('.tab').find($contents).eq(index)
        .addClass('active');

    //$contents.eq(index).addClass('active');
    //$($contents[index]).addClass('active'); // 与上一行的区别
})