




function initPush() {


    ///初始化Clarity
    // (function(c,l,a,r,i,t,y){
    //         c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    //         t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    //         y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    // })(window, document, "clarity", "script", "kuncgoudtb");

    ///第三方代码
//  var _hmt = _hmt || [];
//  (function() {
//    var hm = document.createElement("script");
//    hm.src = "https://hm.baidu.com/hm.js?3083d4b117ab9912ecfe98ca4b0efe77";
//    var s = document.getElementsByTagName("script")[0];
//    s.parentNode.insertBefore(hm, s);
//  })();


//    //初始化友盟
//    (function (w, d, s, q, i) {
//        w[q] = w[q] || [];
//        var f = d.getElementsByTagName(s)[0], j = d.createElement(s);
//        j.async = true;
//        j.id = 'beacon-aplus';
//        j.src = 'https://d.alicdn.com/alilog/mlog/aplus/' + i + '.js';
//        f.parentNode.insertBefore(j, f);
//    })(window, document, 'script', 'aplus_queue', '203467608');
//
//
//
//
//
//    //集成应用的appKey
//    aplus_queue.push({
//        action: 'aplus.setMetaInfo',
//        arguments: ['appKey', '67e2a34665c707471a2afc70']
//    });
//
//    //启用手动pv(即关闭自动pv)
//    aplus_queue.push({
//        action: 'aplus.setMetaInfo',
//        arguments: ['aplus-waiting', 'MAN']
//    });
//
//    //是否开启调试模式
//    aplus_queue.push({
//        action: 'aplus.setMetaInfo',
//        arguments: ['DEBUG', false]
//    });
}


(function () {
    console.log("js自动运行----")
})()


///--------------------卖点上报--------------------
function firstOpen() {
    //pushEvet('firstOpen')
}

function openApp(){
    //pushEvet('openApp')
}


///点击安装app
///记录平台,android-web 或 ios-web
function installApp() {
    var platform = 'android-web'
    //pushEvet('installApp',platform)
}


///进入页面
///记录页面类型
function inPage(pageName) {
    //pushEvet('inPage',pageName)
}

///点击banner
///记录id
function clickBanner(id) {
    //pushEvet('clickBanner',id)
}


function openDrama(workId){
    //pushEvet('openDrama',workId)
}



///点击公告
///记录skipTag
function clickNotify(skipTag) {
     //pushEvet('clickNotify',skipTag)
}

///注册成功
///记录平台
function register() {
    //pushEvet('register','web')
}


///模块点击更多
///记录模块名
function moduleClickMore(moduleName) {
    //pushEvet('moduleClickMore',moduleName)
}

///开通vip成功
///记录充值金额
function openVip(price) {
    //pushEvet('openVip',price)
}

///分享app
///记录邀请码
function openShare(shareCode) {
    //pushEvet('openShare',shareCode)
}

///分享剧集
///记录剧集id
function openShareWork(workId) {
    //pushEvet('openShareWork',workId)
}



function pushEvet(evetName,param) {

//    if(param === undefined){
//        param = 'no'
//    }
//    console.log("js上报----"+evetName+"----"+param)
//     const { aplus_queue } = window;
//     aplus_queue.push({
//         action: 'aplus.record',
//         arguments: [evetName, 'CLK', {
//             param1: param,
//         }]
//     });
}