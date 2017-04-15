// new toast('hello world', 5000); // 调用方式
function toast(msg, time) {
    this.initToast(msg, time);
    this.createToast();
    this.showToast();
}
toast.prototype = {
    initToast: function(msg, time) {
        this.msg = msg;
        this.dismissTime = time || 1000;
    },
    createToast: function () {
        var tpl = '<div class="toast">' + this.msg + '</div>';
        this.$toast = $(tpl);
        this.$toast.appendTo('body');
    },
    showToast: function () {
        var self = this;
        this.$toast.fadeIn(300, function () {
            setTimeout(function () {
                self.$toast.fadeOut(300, function () {
                    self.$toast.remove();
                })
            }, self.dismissTime);
            // console.log(this.$toast); // 此时$toast是一个属性，绑定在构造函数上
        })
    }
};

function Toast(msg, time) {
    return new toast(msg, time)
}

// 按钮触发toast
var button = $('button');
button.on('click', function(){
	new toast('hello world');
})