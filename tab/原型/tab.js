 //绑定（定义）方法
function tab(tabNode) {
    this.init(tabNode);
    this.bind();
}
//绑定（定义）方法：prototype
tab.prototype.init = function (tabNode) {
    //这里是创建属性并赋值，不再是 var 声明
    this.header = tabNode.querySelector('.header');
    this.headerLis = tabNode.querySelectorAll('.header>li');
    this.contents = tabNode.querySelectorAll('.content>li');
};
tab.prototype.bind = function () {
    var self = this;
    this.header.onclick = function (e) {
	    if(e.target.tagName.toLowerCase() === 'li'){
	    	self.headerLis.forEach(function (ele) {
	        	ele.classList.remove('active');
	    	});
	    	e.target.classList.add('active');

	        var index = [].indexOf.call(self.headerLis, e.target);

	        self.contents.forEach(function (ele) {
	        	ele.classList.remove('active');
	        });
	        self.contents[index].classList.add('active');
	    }
	}
};
function Tab(tabNode) {
    return new tab(tabNode);
}