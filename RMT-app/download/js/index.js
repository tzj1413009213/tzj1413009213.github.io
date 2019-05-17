// 判断ios、Android
var userAgentInfo = navigator.userAgent;
var Agents = ["iPhone","SymbianOS", "Windows Phone","iPad", "iPod"];
var system = false
for (var v = 0; v < Agents.length; v++) {
    if(userAgentInfo.indexOf(Agents[v]) > 0) {
        system = true
        break;
    }
}

// 判断是否在微信浏览器
var ua = navigator.userAgent.toLowerCase();
var isWeixin = ua.indexOf('micromessenger') != -1;

// 初始化
var icon = system ? 'ios.png' : 'android.png'
$('title').text(config.appName);
$('.system-icon').attr('src', './image/'+icon);
$('.logo').attr('src', './image/'+config.appName+'.png?'+parseInt(Math.random()*10000));

// 下载操作
if (isWeixin) {
    $('.download').click(e => {
        $('.point').css({'opacity': 1})
        alert('点击右上角按钮，在弹出的菜单中，再点击在浏览器中打开，即可安装！');
    })
}else{
    $('.download').click(e => {
        if (system) {
            $('.iosInfo').show(500)
            window.location.href = 'itms-services://?action=download-manifest&url='+config.url+'/download/ipa.xml';
        } else {
            window.location.href = './package/'+config.appName+'.apk';
        }
    })
}
