function exposure(ct) {
    this.init(ct);
    this.bind();
    this.lazyLoad();
}
exposure.prototype = {
    init: function (ct) {
        this.$images = $(ct).find('img');
        this.clock = null;
    },
    bind: function () {
        var self = this;
        $(window).on('scroll', function () {
            //当滑动时，触发图片懒加载功能；防止重复触发，只执行最后一次触发
            if(this.clock){
                clearTimeout(clock)
            }
            this.clock = setTimeout(function () {
                self.lazyLoad()
            }, 500)
        });
    },
    lazyLoad: function () {
        var self = this;
        //定义函数：懒加载效果核心逻辑
        this.$images.each(function () {
            if( self.checkShow($(this)) && !self.isLoaded($(this)) ){
                self.loadImg($(this));
            }
        })
    },
    checkShow: function ($img) {
        //检测：元素是否出现在屏幕中
        var eleTop = $img.offset().top;
        var scrollTop = $(window).scrollTop();
        var winTop = $(window).height();
        if( (eleTop < winTop + scrollTop) && (eleTop > scrollTop) ){
            return true;

        }else {
            return false;
        }
    },
    isLoaded: function ($img) {
        //检测：元素是否已被加载过
        if( $img.hasClass('isLoaded') ){
            return true
        }else {
            return false
        }
    },
    loadImg: function ($img) {
        //加载元素图片资源
        var newSrc = $img.attr('data-src');
        $img.attr('src', newSrc);
        $img.attr('iaLoaded', 'true')
    }
};

function Exposure(ct) {
    return new exposure(ct);
}