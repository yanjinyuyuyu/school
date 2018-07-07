$(function(){

    $(".login ul li").click(function(){

        $(this).addClass("logactive").siblings("li").removeClass("logactive");
        var i = $(this).index ('.login ul li');  // 0,1,2
        console.log(i)
        $(".logform").hide();
        $(".logform").eq(i).show();
    })



   //  $(window).keypress(function(event){
   //    if(event.keyCode == 13)
   //      {
   //        // $(".logform").each(function(index,items){

   //        //   console.log(items);
   //        //   debugger;
            
   //        // })
   //        console.log($("input:focus").parents(".logform").find(".sub"));
   //        debugger;
   //        login($("input:focus").parents(".logform").find(".sub"))
          
   //      }
   //  });




   // /*
   //  *登录ajax
   //  */
   // $('.sub').on('click', function() {
	  // login($(this));
   // })
   // function login(that){

   // 	var identity = that.siblings("input").eq(0).val(),
   //      password = that.siblings("input").eq(1).val(),
   //      app_source = 'lxcms',
   //      source = that.siblings("input").eq(3).val(),
   //      url = '',
   //      host = that.siblings("input").eq(2).val(),
   //      location = ''
   //    if(source == 'be'){
   //        url = '';
   //        location = '';
   //    }else{
   //        url = 'http://'+host+'/server/zhijiaomofang/api/login/index';
   //        location = 'http://10.10.14.12:9996/web/wangluoketang/templates/personal_center/management_index.html';
   //    }
   
   //   // var identity = $('.login_wrap input:eq(0)').val(),
   //   //   password = $('.login_wrap input:eq(1)').val(),
   //   //   app_source = 'lxcms'

   //    filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   //   if (identity == null || identity == '') {
   //       layer.msg('账号不能为空');
   //   } else if (password == null || password == '') {
   //       layer.msg('密码不能为空');
   //   } else {
   //     $.ajax({
   //         type: 'post',
   //         url: url,
   //         dataType: "json",
   //         data: {
   //             'identity': identity,
   //             'password': password,
   //             'app_source': app_source
   //         },
   //       success: function(data) { // 成功后返回数据
   //         if (data.status == 201) {
   //            if(data.msg.usertype==1||data.msg.usertype==2){
   //                console.log(location);
                  
   //                debugger;
   //              window.location=location;

                
   //           }else if(data.msg.usertype==4){
   //                layer.msg('该用户不存在!');
   //           }
   //         } else {
   //             layer.msg(data.msg)
   //         }
   //       }
   //     });
   //   }
   // }
})