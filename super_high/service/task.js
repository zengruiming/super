var request = require('request');

function Task() {

//签到
    this.signCoin = function (header, imei) {
        request({
            url: 'https://api.xiaomuyu888.com/api/member/signCoin',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'device=ios&imei='+imei+'&source=ios&version=1.2.5'
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('签到:'+body)
            }
        })
    }

//签到翻倍
    this.signCoinDouble = function (header, imei) {
        request({
            url: 'https://api.xiaomuyu888.com/api/member/signCoinDouble',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'device=ios&imei='+imei+'&source=ios&version=1.2.5'
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('签到翻倍:'+body)
            }
        })
    }

//步数1-1
    this.advertisementCount = function (header, imei) {
        request({
            url: 'https://api.xiaomuyu888.com/api/Advertisement/count',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'ad_type=tengxun&device=ios&imei='+imei+'&source=ios&version=1.2.5'
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('步数1-1:'+body)
            }
        })
    }

//步数1-2
    this.exchangedCoin = function (header, imei, num) {
        request({
            url: 'https://api.xiaomuyu888.com/api/member/exchangedCoin',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'device=ios&imei='+imei+'&source=ios&step='+num+'&version=1.2.5'
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('步数1-2:'+body)
            }
        })
    }

//刷新闻视频
    this.newsVideoCoin = function (header, imei) {
        request({
            url: 'https://api.xiaomuyu888.com/api/member/newsVideoCoin',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'device=ios&imei='+imei+'&source=ios&version=1.2.5'
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('刷新闻视频:'+body)
            }
        })
    }

//开宝箱
    this.videoCoin = function (header, imei) {
        request({
            url: 'https://api.xiaomuyu888.com/api/member/videoCoin',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'device=ios&imei='+imei+'&source=ios&version=1.2.5'
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('开宝箱:'+body)
            }
        })
    }


//首页金币
    this.randCoin = function (header, imei, coin) {
        request({
            url: 'https://api.xiaomuyu888.com/api/member/randCoin',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'coin='+coin+'&device=ios&double=1&imei='+imei+'&source=ios&version=1.2.5'
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('首页金币:'+body)
            }
        })
    }


//幸运大转盘
    this.turntableCoin = function (header, imei) {
        request({
            url: 'http://api.xiaomuyu888.com/api/turntable/turntableCoin?imei='+imei+'&source=ios&device=ios&version=1.2.5',
            method: 'get',
            gzip: true,
            headers: header,
        }, function (error, res, body) {
            if (!error && res.statusCode == 200 && JSON.parse(body).data.coin > 0) {
                //输出返回的内容
                console.log('幸运大转盘首页:'+JSON.parse(body).data.coin)
                request({
                    url: 'http://api.xiaomuyu888.com/api/turntable/double?imei='+imei+'&jsoncallback=callback',
                    method: 'post',
                    gzip: true,
                    headers: header,
                    body: 'source=ios&device=ios&unique=' + JSON.parse(body).data.unique
                }, function (error, res, body) {
                    if (!error && res.statusCode == 200) {
                        //输出返回的内容
                        console.log('幸运大转盘金币:'+body)
                    }
                })
            }
        })
    }

};

module.exports = new Task();