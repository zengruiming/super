//iPhone的微信
var zHeader = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Cookie": "PHPSESSID=1f83b97ad9aaffd16c61ae1e626e4286",
    "Connection": "keep-alive",
    "Proxy-Connection": "keep-alive",
    "Accept": "*/*",
    "User-Agent": "YLZ/1.1.0 (iPhone; iOS 9.3.2; Scale/2.00)",
    "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hans;q=0.8, en-US;q=0.7, de-CH;q=0.6",
    "Content-Length": "81",
    "Accept-Encoding": "gzip, deflate"
};


//签到
function zLogin() {
    $.ajax({
        type: "post",
        headers: zHeader,
        url: "https://api.xiaomuyu888.com/api/member/signCoin",
        data: {"device": "ios", "imei": "dc8349b88e14a402b617c852b2b260b648b27e5f", "source": "ios", "version": "1.1.0"}
    })
}

//步数1-1
function zBushu1() {
    $.ajax({
        type: "post",
        headers: zHeader,
        url: "https://api.xiaomuyu888.com/api/Advertisement/count",
        data: {"ad_source":"2","ad_type":"1","device":"ios","imei":"dc8349b88e14a402b617c852b2b260b648b27e5f","source":"ios","version":"1.1.0"}
    })
}

//步数1-2
function zBushu2(zNum) {
    $.ajax({
        type: "post",
        headers: zHeader,
        url: "https://api.xiaomuyu888.com/api/member/exchangedCoin",
        data: {"device":"ios","imei":"dc8349b88e14a402b617c852b2b260b648b27e5f","source":"ios","step":`${zNum}`,"version":"1.1.0"}
    })
}

//刷新闻视频
function zVideos() {
    $.ajax({
        type: "post",
        headers: zHeader,
        url: "https://api.xiaomuyu888.com/api/member/newsVideoCoin",
        data: {"device": "ios", "imei": "dc8349b88e14a402b617c852b2b260b648b27e5f", "source": "ios", "version": "1.1.0"}
    })
}

//开宝箱
function zBox() {
    $.ajax({
        type: "post",
        headers: zHeader,
        url: "https://api.xiaomuyu888.com/api/member/videoCoin",
        data: {"device": "ios", "imei": "dc8349b88e14a402b617c852b2b260b648b27e5f", "source": "ios", "version": "1.1.0"}
    })
}


//首页金币
function zHome(zCoin) {
    $.ajax({
        type: "post",
        headers: zHeader,
        url: "https://api.xiaomuyu888.com/api/member/randCoin",
        data: {"coin":`${zCoin}`,"device":"ios","double":"1","imei":"dc8349b88e14a402b617c852b2b260b648b27e5f","source":"ios","version":"1.1.0"}
    })
}


//幸运大转盘
function zZhuanPan() {
    $.ajax({
        type: "get",
        headers: zHeader,
        url: "http://api.xiaomuyu888.com/api/turntable/turntableCoin",
        data: {"imei":"dc8349b88e14a402b617c852b2b260b648b27e5f","source":"ios","device":"ios"},
        success: function (res) {
            if (res.code == '200' && res.data.unique.length > 0) {
                $.ajax({
                    type: "post",
                    headers: zHeader,
                    url: "http://api.xiaomuyu888.com/api/turntable/double?imei=dc8349b88e14a402b617c852b2b260b648b27e5f&jsoncallback=callback",
                    data: {"source":"ios","device":"ios","unique":`${res.data.unique}`}
                });
            }
        }
    });
}
