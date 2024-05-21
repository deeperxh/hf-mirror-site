 // 跳转至趋动云
 function redirectToQudongyunLink(path) {
  // 将浏览器的当前位置更改为指定的URL
     var url="https://growthdata.virtaicloud.com/t/"+path
     console.log("pass to "+url)
      window.open( url,'_blank') ;
}

//  // 跳转至趋动云首页
//  function redirectToQudongyunHome() {
//   // 将浏览器的当前位置更改为指定的URL
//   window.top.location.href = "https://growthdata.virtaicloud.com/t/KB";
// }

//  // 跳转至趋动云登录注册页
//  function redirectToQudongyunLogin() {
//   // 将浏览器的当前位置更改为指定的URL
//   window.top.location.href = "https://account.virtaicloud.com/gemini_web/auth/login";
// }


 // 跳转至趋动云,path1是登录,path2 是注册
 function redirectToQudongyunByRule(path1,path2){
       // 生成一个0到1之间的随机数
        var randomNumber = Math.random();
        console.log(randomNumber);
        if (randomNumber <= 0.5) {
           redirectToQudongyunLink(path1);
            
        } else {
            redirectToQudongyunLink(path2);
            
        }
}
