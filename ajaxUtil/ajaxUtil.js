/* 调用方式
ajaxUtil({
    method: 'post',      // 选填：默认 get
    url: '/posturl',     // 必填：请求地址
    dataTpye: 'json',    // 选填：默认 json
    data: {              // 选填：根据需求
        page: pageIndex
    },
    async : true,        // 选填：默认 true
    success: onSuccess,  // 选填：默认 空函数
    error: onError       // 选填：默认 空函数
})
 */
function ajaxUtil(opts) {
    // 一. 默认参数以及覆盖默认参数
    opts.method = opts.method || 'get';
    opts.data = opts.data || {};
    opts.dataType = opts.dataType || 'json';
    opts.async = opts.async || true;
    opts.success = opts.success || function () {};
    opts.error = opts.error || function () {};
    // 二. 处理数据
    var dataStr = '';
    for(var key in opts.data) {
        dataStr += key + '=' + opts.data[key] + '&';
    }
    dataStr = dataStr.substr(0, dataStr.length - 1);
    // 三. 创建ajax
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4){
            if (xhr.status === 200 || xhr.status === 304){
                if (opts.dataType === 'text'){
                    opts.success(xhr.responseText);
                }
                if (opts.dataType === 'json'){
                    var jsonStr = JSON.parse(xhr.responseText);
                    opts.success(jsonStr);
                }
            }else {
                opts.error();
            }
        }
    };
    if (opts.method.toLowerCase() === 'get'){
        xhr.open(opts.method, opts.url + '?' + dataStr, opts.async);
        xhr.send();
    }
    if (opts.method.toLowerCase() === 'post'){
        xhr.open(opts.method, opts.url, opts.async);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(dataStr);
    }
}