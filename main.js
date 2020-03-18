$(function(){
    //1、获取数据
    var $username = $('#username'),
        $tel = $('#tel'),
        $pwd = $('#pwd'),
        $code = $('#code'),
        $msgusername = $('#username-validation-message'),
        $msgtel = $('#tel-validation-message'),
        $msgpwd = $('#pwd-validation-message'),
        $msgcode = $('#code-validation-message'),
        $getCode = $('#getCode'),
        $register = $('#register'),
        $usertip = $('.usertip'),
        $pwdtip = $('.pwdtip'),
        $tippwd = $('#tippwd'),
        $correctpwd = $('#correctpwd');
    var tippwdclicks = 0;
    var seconds = 10;

    //2、发送验证码
    $getCode.click(function(){
        var time = setInterval(function(){
            seconds--;
            if(seconds == -1){
                clearInterval(time);
                $getCode.val('发送验证码');
                $getCode.removeAttr('disabled');
                seconds = 10;
                $codefalse.css('display','block')
            }
            else{
                $getCode.val('重新发送（'+ seconds + 's）');
                $getCode.attr('disabled','true');
            }
        },1000)
    })

    //提示框
    $username.focus(function(){
        $usertip.css('display','block')
    })
    $username.blur(function () {
        $usertip.css('display','none');   
    })

    $pwd.focus(function(){
        $pwdtip.css('display','block');
        $correctpwd.css('display','none');
    })
    $tippwd.click(function(){
        if(tippwdclicks % 2 == 0){
            $pwdtip.css('display','block');
            tippwdclicks++;
        }
        else if(tippwdclicks % 2 == 1){
            $pwdtip.css('display','none');
            tippwdclicks++;
        }
    })
    $pwd.blur(function(){
        $pwdtip.css('display','none');
    })

    // 字段级别校验
    //（1）用户名
    function username (){
        if($username.val() === ''){
          $msgusername.html('用户名不能为空！');
          $username.select();
          return false;
        }
        if($username.val() !== ''){
          $msgusername.html('');
        }
        if(!/^(?!(\d+)$)[\u4e00-\u9fffa-zA-Z\d\_]+$/.test($username.val())){
          $msgusername.html('用户名仅支持中英文、数字和下划线 且不能为纯数字');
          $username.select();
          return false;
        } 
        return true;
    }
    //（2）手机号
    function telphone (){
        if($tel.val() === ''){
          $msgtel.html('手机号不能为空！');
          $tel.select();
          return false;
        }
        if($tel.val() !== ''){
          $msgtel.html('');
        }
        if(!/^1[34578]\d{9}$/.test($tel.val())){
          $msgtel.html('手机号格式不正确');
          $tel.select();
          return false;
        }
        return true;
    }
    //（3）密码
    function password(){
        if($pwd.val() !== ''){
          $msgpwd.html('');
        }
        if($pwd.val() === ''){
          $msgpwd.html('密码不能为空！');
          $pwd.select();
          return false;
        }
        if(!/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{8,14}$/.test($pwd.val())){
          $msgpwd.html('密码包含数字、英文和字符中的两种以上，长度为8-14');
          $pwd.select();
          return false;
        }
      return true;
    }
    //（4）验证码
    function codenumber(){
        if($code.val() !== ''){
            $msgcode.html('');
        }
        if($code.val() === ''){
            $msgcode.html('验证码不能为空！');
            $code.select();
            return false;
        }
        return true;
    }
    //执行字段级验证
    function check(){
        $username.focusout(username);
        $tel.focusout(telphone);
        $pwd.focusout(password);
        $code.focusout(codenumber);
    }
    check();
    //执行表单级验证
    $register.click(function(){
        username();
        telphone();
        password();
        codenumber();
    })
    
})