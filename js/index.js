charset = 'UTF-8';
$(function(){
  function tab(btn, cont, classname){
    $(btn).each(function(i){
      $(this).mouseenter(function(){
        $(this).addClass(classname).siblings().removeClass(classname);
        $($(cont)[i]).addClass(classname).siblings().removeClass(classname);
      });
    });
  }
  tab('.a-nav li', '.a-cont .c-item', 'on');
});