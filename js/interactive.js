
///获取指定参数
function getPar(name) {
	// 首先获取当前页面的URL
	const urlString = window.location.href;

	// 使用URL构造函数创建URL对象
	const url = new URL(urlString);

	return url.searchParams.get(name);
}

///web调flutter方法初始化
function initWebToNative(){
    
    window.addEventListener('message', function (event) {

        ///---------------web调flutter方法---------------
        if (event.data.msg === 'onDoTask') {
          window.onDoTask(event.data.data)
          //window.onDoTask("web测试")
          console.log("web回调" + event.data);
        }
        if (event.data.msg === 'onToGold') {
          window.onToGold(event.data)
          console.log("web回调" + event.data);
        }
        if (event.data.msg === 'onExchangeDiscount') {
          window.onExchangeDiscount(event.data.data)
          console.log("web回调" + event.data);
        }

        if (event.data.msg === 'goBack') {
          window.goBack(event.data.data)
          console.log("web回调" + event.data);
        }

        if (event.data.msg === 'toService') {
          window.goService(event.data.data)
          console.log("web回调" + event.data);
        }
      })
}


///---------------flutter 调 web方法---------------

//获取设备标识
function uniqueId() {
//	let uniqueId = window.navigator.userAgent.replace(/[^\w]/gi, '');
//	console.log("uniqueId = " + uniqueId)
//	return uniqueId;
}

//获取邀请码
function getInvitationCode(){
	var invitationCode = window.localStorage.getItem("invitationCode");
  console.log("web执行getInvitationCode"+invitationCode);
	return invitationCode;
}


//是否为书页
function isIosLabel(){
    const iosLabel = getPar("isApp")
    return iosLabel;
}


//打开链接
function openUrl(url){
    window.open(url)
}

//是否为ios书签
function isLabel(){
    const isLabel = getPar("isApp")
    console.log("web执行isLabel："+ isLabel);
	return isLabel != null;
}

//获取剧集id
function getWorkId(){
	var workId = window.localStorage.getItem("workId");
  console.log("web执行workId："+ workId);
	return workId;
}

//是否是防洪链接
function isFangHong(){
  var wrap = document.getElementById("wrap");
  return wrap != null;
}

//是否为android浏览器
function isAndroid(){
	const ua = typeof window === 'object' ? window.navigator.userAgent : '';
	if(/Android/i.test(ua)){
		return true;
	}
	return false;
}