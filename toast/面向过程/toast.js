// 普通书写 toast
// toast('hello world', 5000); // 调用方式
var message;
var dismissTime;
function toast(msg, time) {
    initToast(msg, time);
    createToast();
    showToast();
}
function initToast(msg, time) {
    message = msg;
    dismissTime = time || 1000;
}
function createToast() {
    var tpl = '<div class="toast">' + message + '</div>';
    $(tpl).appendTo('body');
}
function showToast() {
    var $toast = $('.toast');
    $toast.fadeIn(300, function () {
        setTimeout(function () {
            $toast.fadeOut(300, function () {
                $toast.remove();
            })
        }, dismissTime);
    })
}

// 按钮触发toast
var button = $('button');
button.on('click', function(){
	new toast('hello world');
})