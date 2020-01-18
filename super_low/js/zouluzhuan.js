
//签到
function zLogin(zHeader, imei) {
    $.ajax({
        type: "post",
        headers: zHeader,
        url: "https://api.xiaomuyu888.com/api/member/signCoin",
        data: {"device": "ios", "imei": imei, "source": "ios", "version": "1.2.5"}
    })
}

//步数1-1
function zBushu1(zHeader, imei) {
    $.ajax({
        type: "post",
        headers: zHeader,
        url: "https://api.xiaomuyu888.com/api/Advertisement/count",
        data: {"ad_source":"2","ad_type":"1","device":"ios","imei":imei,"source":"ios","version":"1.2.5"}
    })
}

//步数1-2
function zBushu2(zNum, zHeader, imei) {
    $.ajax({
        type: "post",
        headers: zHeader,
        url: "https://api.xiaomuyu888.com/api/member/exchangedCoin",
        data: {"device":"ios","imei":imei,"source":"ios","step":zNum,"version":"1.2.5"}
    })
}

//刷新闻视频
function zVideos(zHeader, imei) {
    $.ajax({
        type: "post",
        headers: zHeader,
        url: "https://api.xiaomuyu888.com/api/member/newsVideoCoin",
        data: {"device": "ios", "imei": imei, "source": "ios", "version": "1.2.5"}
    })
}

//开宝箱
function zBox(zHeader, imei) {
    $.ajax({
        type: "post",
        headers: zHeader,
        url: "https://api.xiaomuyu888.com/api/member/videoCoin",
        data: {"device": "ios", "imei": imei, "source": "ios", "version": "1.2.5"}
    })
}


//首页金币
function zHome(zCoin, zHeader, imei) {
    $.ajax({
        type: "post",
        headers: zHeader,
        url: "https://api.xiaomuyu888.com/api/member/randCoin",
        data: {"coin":zCoin,"device":"ios","double":"1","imei":imei,"source":"ios","version":"1.2.5"}
    })
}


//幸运大转盘
function zZhuanPan(zHeader, imei) {
    $.ajax({
        type: "get",
        headers: zHeader,
        url: "http://api.xiaomuyu888.com/api/turntable/turntableCoin",
        data: {"imei":imei,"source":"ios","device":"ios"},
        success: function (res) {
            if (res.code == '200' && res.data.unique.length > 0) {
                $.ajax({
                    type: "post",
                    headers: zHeader,
                    url: "http://api.xiaomuyu888.com/api/turntable/double?imei=" + imei,
                    data: {"source":"ios","device":"ios","unique":res.data.unique}
                });
            }
        }
    });
}


