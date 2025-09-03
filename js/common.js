
function initController() {
	const release = true;

	if (!release) {
		var script = document.createElement('script');
		script.src = "https://cdn.bootcss.com/eruda/1.2.6/eruda.min.js";
		script.async = true
		document.getElementsByTagName('head')[0].appendChild(script)
		script.onload = function () {
			eruda.init()
		}
	}
}


///获取指定参数
function getPar(name) {
	// 首先获取当前页面的URL
	const urlString = window.location.href;

	// 使用URL构造函数创建URL对象
	const url = new URL(urlString);

	return url.searchParams.get(name);
}




//获取参数(备份,有问题)
function GetQueryString(name) {
	var data = window.location.href.split("?");
	var search = data[1] || "";
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = search.match(reg); //获取url中"?"符后的字符串并正则匹配
	var context = "";
	if (r != null)
		context = decodeURIComponent(r[2]);
	reg = null;
	r = null;
	return context == null || context == "" || context == "undefined" ? "" : context;
}


//是否刷新
function isReload() {
	try {
		return (
			(window.performance.navigation && window.performance.navigation.type === 1) ||
			window.performance.getEntriesByType('navigation').map((nav) => nav.type).includes('reload')
		);
	} catch (err) {
		return false;
	}

}

//重新加载
function reload() {
	window.location.replace('/');
}

function saveInvitationCode() {
	///保存邀请码
	const invitationCode = getPar('invitationCode')
	if (invitationCode) {
		window.localStorage.setItem("invitationCode", invitationCode);
	}
	console.log('dd = '+invitationCode)
}
function saveWorkId() {
	const workId = getPar('workId')
	window.localStorage.setItem("workId", workId);
}


function boundaryCheck() {
	const flutterRoot = document
		.getElementsByTagName("flutter-view")
		.item(0);
	if(flutterRoot != null){
		flutterRoot.addEventListener("touchstart", (e) => {
			var pageX = e.targetTouches[0].pageX;
			if (pageX > 24 && pageX < window.innerWidth - 24) return;
			e.preventDefault();
		});
	}
}

function clearVideosExceptFirst(isDetails) {
  // 获取所有的视频元素
  var videos = document.getElementsByTagName("video");


  var start = isDetails?1:0;

  // 如果有多个视频，移除除了第一个视频以外的所有视频
  for (var i = start; i < videos.length; i++) {
    videos[i].parentNode.removeChild(videos[i]);
    console.log("清除："+i);
  }


}

function enterFullScreen(isDetailPage) {
    var videos = document.getElementsByTagName("video");
    var videos = getVisibleVideos();

       console.log("isDetailPage为："+isDetailPage);
        if (videos.length > 0) {

          var videoElement = isDetailPage ? videos[videos.length - 1] : videos[0];

          console.log("进入找播放器找----"+videos.length);
          for (var i = 0; i < videos.length; i++) {
              console.log("id为："+videos[i].id);
          }

          if (videoElement.requestFullscreen) {
            videoElement.requestFullscreen();
          } else if (videoElement.webkitRequestFullscreen) { // 兼容 Safari
            videoElement.webkitRequestFullscreen();
            //alert("这是一个弹窗！1");
          } else if (videoElement.webkitEnterFullscreen) { // 兼容 Safari
            videoElement.webkitEnterFullscreen();
            //alert("这是一个弹窗！2");
          }else if (videoElement.mozRequestFullScreen) { // 兼容 Firefox
            videoElement.mozRequestFullScreen();
            //alert("这是一个弹窗！3");
          } else if (videoElement.msRequestFullscreen) { // 兼容 IE/Edge
            videoElement.msRequestFullscreen();
            //alert("这是一个弹窗！4");
          } else {
            console.log("Fullscreen API is not supported");
          }
        } else {
          console.log("No <video> element found");
        }
}
function getVisibleVideos() {
    var videos = document.getElementsByTagName("video");
    var visibleVideos = [];
    for (var i = 0; i < videos.length; i++) {
        var rect = videos[i].getBoundingClientRect();

        // 判断视频是否在视口范围内
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            visibleVideos.push(videos[i]);
        }
    }
    return visibleVideos;
}




function getVideoAsp(){
    var videos = document.getElementsByTagName("video");
    console.log("a进入找播放器找----"+videos.length);
    if (videos.length > 0) {
      var videoElement = videos[0];
      if (videoElement.videoWidth && videoElement.videoHeight) {

        console.log("播放器宽度----"+videoElement.videoWidth);
        console.log("播放器高度----"+videoElement.videoHeight);

        var a = videoElement.videoWidth / videoElement.videoHeight;
        var b = videoElement.videoWidth / videoElement.videoHeight;
        console.log("相除方式1----"+a);
        return a;
      }

      console.log("找到播放器----"+videoElement.videoWidth+","+videoElement.videoHeight);
    } else{
        console.log("找不到播放器----");
    }
}