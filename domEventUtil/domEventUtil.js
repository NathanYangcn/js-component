// 利用能力检测解决问题：跨浏览器的事件处理程序
// 封装在对象内
// 调用方式 eventUtil.addEvent(element, type, handler)
// 参数说明：element-要绑定事件的元素；type-事件类型；handler-事件处理程序
var eventUtil = {
    addEvent: function (element, type, handler) {
        if(element.addEventListener){ // DOM2级事件处理程序
            element.addEventListener(type, handler, false)
        }else if(element.attachEvent){ // IE事件处理程序
            element.attachEvent('on'+type, handler)
        }else {
            element['on'+type] = handler; // DOM0级事件处理程序
        }
    },
    removeEvent: function (element, type, handler) {
        if(element.removeEventListener){
            element.removeEventListener(type, handler, false);
        }else if(element.detachEvent){
            element.detachEvent('on'+type, handler);
        }else {
            element['on'+type] = null;
        }
    }
};

// 封装DOM，为了使用方便，形似jQuery
// 使用方式 $('目标元素名称')、$$('目标元素名称')
function $(id) {
    return document.querySelector(id);
}
function $$(cls) {
    return document.querySelectorAll(cls);
}