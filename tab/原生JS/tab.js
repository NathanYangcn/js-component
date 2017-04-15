var header = document.querySelector('.header');
var headerLis = document.querySelectorAll('.header>li');
var contents = document.querySelectorAll('.content>li');

header.addEventListener('click', function (e) {
    var self = e.target;
    if(self.tagName.toLowerCase() === 'li'){
        for(var i = 0; i < headerLis.length; i++){
            headerLis[i].classList.remove('active');
        }
        self.classList.add('active');

        var index = [].indexOf.apply(headerLis, [self]);
        //var index = [].indexOf.call(headerLis, self); //作用同上

        for(var j = 0; j < contents.length; j++){
            contents[j].classList.remove('active');
        }
        contents[index].classList.add('active');
    }
})