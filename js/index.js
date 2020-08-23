const tabLinks = document.querySelectorAll(".tabs__link");
const tabPanels = document.querySelectorAll(".tabs-content__panel");

for(let el of tabLinks) {
    el.addEventListener("click", e => {
        e.preventDefault();

        document.querySelector('.tabs__item.active').classList.remove("active");
        document.querySelector('.tabs-content__panel.active').classList.remove("active");

        const parentListItem = el.parentElement;
        parentListItem.classList.add("active");
        const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

        const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
        panel[0].classList.add("active");
    });
}
function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdown > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue : function() {
        return this.val;
    },
    getIndex : function() {
        return this.index;
    }
}
$(function() {

    var dd = new DropDown( $('#dd') );

    $(document).click(function() {
        $('.wrapper-dropdown-1').removeClass('active');
    });
});