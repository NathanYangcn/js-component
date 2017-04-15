function BuildTab(node, count) {
    count = count || 2;
    this.render(node, count);
    this.init();
    this.bind();
}
BuildTab.prototype.render = function (node,count) {
    var htmlStr = '';
    for(var i = 0; i < count; i++){
        htmlStr += '<div class="tab">';
        htmlStr += '   <ul class="header clearfix">';
        htmlStr += '       <li class="active">选项1</li>';
        htmlStr += '       <li>选项2</li>';
        htmlStr += '       <li>选项3</li>';
        htmlStr += '   </ul>';
        htmlStr += '   <ul class="content">';
        htmlStr += '       <li class="active">内容1</li>';
        htmlStr += '       <li>内容2</li>';
        htmlStr += '       <li>内容3</li>';
        htmlStr += '   </ul>';
        htmlStr += '</div>';
    }
    $(htmlStr).appendTo(node);
};
BuildTab.prototype.init = function () {
    this.$header = $('.header');
    this.$contents = $('.content>li');
};
BuildTab.prototype.bind = function () {
    var self = this;
    this.$header.on('click', 'li', function () {
        var $this = $(this);
        $this.siblings().removeClass('active');
        $this.addClass('active');

        var index = $this.index();

        $this.parents('.tab').find(self.$contents)
                .removeClass('active');
        $this.parents('.tab').find(self.$contents).eq(index)
                .addClass('active');
    })
};