 // 跳转至趋动云
 function redirectToQudongyunLink(path) {
  // 将浏览器的当前位置更改为指定的URL
  window.location.href = "https://growthdata.virtaicloud.com/t/"+path;
}

 // 跳转至趋动云首页
 function redirectToQudongyunHome() {
  // 将浏览器的当前位置更改为指定的URL
  window.top.location.href = "https://growthdata.virtaicloud.com/t/KB";
}

 // 跳转至趋动云登录注册页
 function redirectToQudongyunLogin() {
  // 将浏览器的当前位置更改为指定的URL
  window.top.location.href = "https://account.virtaicloud.com/gemini_web/auth/login";
}


 // 跳转至趋动云登录注册页
 function redirectToQudongyunByRule(){
       // 生成一个0到1之间的随机数
        var randomNumber = Math.random();
        console.log(randomNumber);
        if (randomNumber <= 0.5) {
           redirectToQudongyunLogin();
            
        } else {
            redirectToQudongyunHome();
            
        }
}
