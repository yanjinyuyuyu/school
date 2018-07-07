$(function(){

//    导航
    $(".nav ul li").click(function(){
        $(this).addClass("active");
        $(this).siblings("li").removeClass("active");
    })



//    职教动态轮播图 --- 开始

        var $ul = $(".mega ul");
        var $li = $(".mega ul li");
        var len = $li.length;
        var i=0;
        var timer = setInterval(move,3000);

        //创建运动函数
        function move(){
            i++;
            if(i==-1){
                i=len-2;
                $ul.css("margin-left",-571*(len-1));
            }
            if(i==len-1){
                $(".thumbnail li").eq(0).addClass("active_three").siblings().removeClass();
            }
            if(i==len){
                i = 0;
                $ul.css("margin-left",0);
            }
            //$ul.stop().animate()这一句表示执行动画前先停止上一次的所有动作
            $ul.stop().animate({"margin-left":-571*i});
            $(".thumbnail li").eq(i).addClass("active_three").siblings().removeClass();
        }
        //光标滑过滑出触发的效果
        $(".thumbnail li").hover(function(){
            clearInterval(timer);
            i=$(this).index()-1;
            move();
        },function(){
            timer=setInterval(move,3000)
        })

//    职教动态轮播图 --- 结束

//    职教动态选项卡 --- 开始

    $(".active_two").find("ul").css("display","block");
    $(".active_two").siblings("li").find("ul").css("display","none");

    $(".tab li").click(function(){

        $(this).addClass("active_two");
        $(this).siblings("li").removeClass("active_two");

        $(".active_two").find("ul").css("display","block");
        $(".active_two").siblings("li").find("ul").css("display","none");
    })

    $(".teachhh").click(function(){
        $("#more2").css("display","none");
        $("#more").css("display","inline-block");
    })
    $(".schoolll").click(function(){
        $("#more").css("display","none");
        $("#more2").css("display","inline-block");
    })

//    职教动态选项卡 --- 结束














})