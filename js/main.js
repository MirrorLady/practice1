/**
 * Created by shirley on 15/3/11.
 */
//  轮播
var num = 0;
var imgArr = ['images/banner1.png','images/banner2.png'];
function banner(){
    if(num>=imgArr.length){
        num = 0;
    }
    $('.inner-box img').attr('src',imgArr[num]);
    num++;
}
//  鼠标移上去暂停轮播，移开继续轮播
$('.banner').on('mouseenter',function(){
    clearInterval(pause);
});
$('.banner').on('mouseleave',function(){
    banner();
    pause = setInterval(banner,5000);
});
banner();
pause = setInterval(banner,5000);
//  上一张
$('.banner .left').click(function(){
    num-=1;
    if(num>0){
        num--;
    }else{
        num = imgArr.length-1;
    }
    $('.inner-box img').attr('src',imgArr[num]);
    banner();
});
//  下一张
$('.banner .right').click(function(){
    num-=1;
    if(num<imgArr.length){
        num++;
    }else{
        num = 0;
    }
    $('.inner-box img').attr('src',imgArr[num]);
    banner();
});

//  回到顶部
$('.goTop').click(function(){
    $('html,body').animate({scrollTop: '0px'}, 800);
    //window.scroll(0,0);
});

