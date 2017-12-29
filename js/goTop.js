var obtn = document.querySelector(".go_top");
var clientHeight = document.documentElement.clientHeight;//获取页面可视区域高度

var timer = null;
var isTop = true;
//滚动条滚动时触发
window.onscroll = function(){
    var osTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (osTop >= clientHeight) {
        obtn.style.display = 'block';
    }else {
        obtn.style.display = 'none';
    }
    if (!isTop) {
        clearInterval(timer);
    }
    isTop = false;
}
obtn.addEventListener('click',function (){
    timer = setInterval(function (){
    //获取滚动条距离顶部的高度
    var osTop = document.documentElement.scrollTop || document.body.scrollTop;
    var ispeed = Math.floor(-osTop/5);

    document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
    isTop = true;
    if(osTop == 0){
            clearInterval(timer);
        }
    },30);
});
//当连续点击两次的时候,页面不会下来了;
