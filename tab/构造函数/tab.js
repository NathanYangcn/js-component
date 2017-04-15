//绑定（定义）方法：函数内部
function Tab(tabNode) {
    this.init = function (tabNode) {
        this.header = tabNode.querySelector('.header');
        this.headerLis = tabNode.querySelectorAll('.header>li');
        this.contents = tabNode.querySelectorAll('.content>li');
    };
    this.bind = function () {
        var self = this;
        //this.header.addEventLisenter('click', function (e)) {} //也能用，与下区别
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

    this.init(tabNode);
    this.bind();
}