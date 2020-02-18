var version = require('../../domain/zouluzhuan/version')
var request = require('request');
var randomNum = require('../../utils/randomNum');

function IosTask() {

//登录
    this.memberIndex = function (header, imei) {
        request({
            url: 'https://api.xiaomuyu888.com/api/member/index',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'device=ios&imei=' + imei + '&source=ios&version=' + version.myIosVersion
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('登录:' + body)
            }
        })
    }

//更新总步数
    this.updateAmountStep = function (header, imei, amountStep) {
        request({
            url: 'https://api.xiaomuyu888.com/api/member/updateAmountStep',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'amount_step=' + amountStep + '&imei=' + imei + '&device=ios&version=' + version.myIosVersion + '&source=ios'
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('更新总步数:' + body)
            }
        })
    }

//签到
    this.signCoin = function (header, imei) {
        request({
            url: 'https://api.xiaomuyu888.com/api/member/signCoin',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'device=ios&imei=' + imei + '&source=ios&version=' + version.myIosVersion
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('签到:' + body)
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
            body: 'device=ios&imei=' + imei + '&source=ios&version=' + version.myIosVersion
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('签到翻倍:' + body)
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
            body: 'ad_type=tengxun&device=ios&imei=' + imei + '&source=ios&version=' + version.myIosVersion
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('步数1-1:' + body)
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
            body: 'device=ios&imei=' + imei + '&source=ios&step=' + num + '&version=' + version.myIosVersion
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('步数1-2:' + body)
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
            body: 'device=ios&imei=' + imei + '&source=ios&version=' + version.myIosVersion
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('刷新闻视频:' + body)
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
            body: 'device=ios&imei=' + imei + '&source=ios&version=' + version.myIosVersion
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('看推荐视频:' + body)
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
            body: 'coin=' + coin + '&device=ios&double=1&imei=' + imei + '&source=ios&version=' + version.myIosVersion
        }, function (error, res, body) {
            /*            if (!error && res.statusCode == 200) {
                            //输出返回的内容
                            console.log('首页随机金币:' + body)
                        }*/
        })
    }


//幸运大转盘
    this.turntableCoin = function (header, imei) {
        request({
            url: 'http://api.xiaomuyu888.com/api/turntable/turntableCoin?imei=' + imei + '&source=ios&device=ios&version=' + version.myIosVersion,
            method: 'get',
            gzip: true,
            headers: header,
        }, function (error, res, body) {
            if (!error && res.statusCode == 200 && body.indexOf("coin") != -1) {
                if (JSON.parse(body).data.coin > 0) {
                    //输出返回的内容
                    console.log('幸运大转盘首页:' + JSON.parse(body).data.coin)
                    request({
                        url: 'http://api.xiaomuyu888.com/api/turntable/double?imei=' + imei + '&jsoncallback=callback',
                        method: 'post',
                        gzip: true,
                        headers: header,
                        body: 'source=ios&device=ios&unique=' + JSON.parse(body).data.unique
                    }, function (error, res, body) {
                        if (!error && res.statusCode == 200) {
                            //输出返回的内容
                            console.log('幸运大转盘金币:' + body)
                        }
                    })
                }
            }
        })
    }

//开宝箱
    this.chestcoin = function (header, imei) {
        var arr = [5, 30, 60, 100]
        for (j = 0, len = arr.length; j < len; j++) {
            request({
                url: 'http://api.xiaomuyu888.com/api/turntable/chestcoin?imei=' + imei + '&jsoncallback=callback',
                method: 'post',
                gzip: true,
                headers: header,
                body: 'source=ios&device=ios&num=' + arr[j]
            }, function (error, res, body) {
                if (!error && res.statusCode == 200) {
                    //输出返回的内容
                    console.log('开宝箱:' + body)
                }
            })
        }
    }

//刮卡奖励
    this.cardReceiveCoin = function (header, imei) {
        var arr = [5, 10, 15]
        request({
            url: 'https://api.xiaomuyu888.com/api/Card/cardList',
            method: 'post',
            gzip: true,
            headers: header,
            body: 'device=ios&imei=' + imei + '&source=ios&version=' + version.myIosVersion
        }, function (error, res, body) {
            if (!error && res.statusCode == 200 && body.indexOf("surplus_numbers") != -1) {
                //输出返回的内容
                console.log('刮卡:' + JSON.parse(body).data['surplus_numbers'])
                if (JSON.parse(body).data['surplus_numbers'] != 0) {
                    request({
                        url: 'https://api.xiaomuyu888.com/api/Card/cardReceiveCoin',
                        method: 'post',
                        gzip: true,
                        headers: header,
                        body: 'coin=' + arr[randomNum(0, 2)] + '&device=ios&id=' + randomNum(2, 20) + '&imei=' + imei + '&is_double=1&source=ios&version=' + version.myIosVersion
                    }, function (error, res, body) {
                        //输出返回的内容
                        console.log('刮卡奖励:' + body)
                    })
                }
            }
        })
    }

};

module.exports.iosTask = new IosTask();

function AndroidTask() {
    var device = 'android'
    var source = 'Z1006'
    var versionCode = '140'

//登录
    this.memberIndex = function (header, imei) {
        request({
            url: 'http://api.xiaomuyu888.com/api/member/index?device=' + device + '&version_code=' + versionCode + '&source=' + source + '&imei=' + imei + '&version=' + version.myIosVersion,
            method: 'GET',
            gzip: true,
            headers: header,
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('登录:' + body)
            }
        })
    }

//更新总步数
    this.updateAmountStep = function (header, imei, amountStep) {
        request({
            url: 'http://api.xiaomuyu888.com/api/member/updateAmountStep',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'amount_step=' + amountStep + '&imei=' + imei + '&device=' + device + '&version=' + version.myIosVersion + '&source=' + source + '&version_code=' + versionCode
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('更新总步数:' + body)
            }
        })
    }

//签到
    this.signCoin = function (header, imei) {
        request({
            url: 'http://api.xiaomuyu888.com/api/member/signCoin',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'imei=' + imei + '&device=' + device + '&version=' + version.myAndroidVersion + '&source=' + source + '&version_code=' + versionCode
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('签到:' + body)
            }
        })
    }

//签到翻倍
    this.signCoinDouble = function (header, imei) {
        request({
            url: 'http://api.xiaomuyu888.com/api/member/signCoinDouble',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'imei=' + imei + '&device=' + device + '&version=' + version.myAndroidVersion + '&source=' + source + '&version_code=' + versionCode
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('签到翻倍:' + body)
            }
        })
    }

//步数1-1
    this.advertisementCount = function (header, imei) {
        request({
            url: 'http://api.xiaomuyu888.com/api/Advertisement/count',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'ad_type=toutiao&imei=' + imei + '&device=' + device + '&version=' + version.myAndroidVersion + '&source=' + source + '&version_code=' + versionCode
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('步数1-1:' + body)
            }
        })
    }

//步数1-2
    this.exchangedCoin = function (header, imei, num) {
        request({
            url: 'http://api.xiaomuyu888.com/api/member/exchangedCoin',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'step=' + num + '&imei=' + imei + '&device=' + device + '&version=' + version.myAndroidVersion + '&source=' + source + '&version_code=' + versionCode
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('步数1-2:' + body)
            }
        })
    }

//刷新闻视频
    this.newsVideoCoin = function (header, imei) {
        request({
            url: 'http://api.xiaomuyu888.com/api/member/newsVideoCoin',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'imei=' + imei + '&device=' + device + '&version=' + version.myAndroidVersion + '&source=' + source + '&version_code=' + versionCode
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('刷新闻视频:' + body)
            }
        })
    }

//开宝箱
    this.videoCoin = function (header, imei) {
        request({
            url: 'http://api.xiaomuyu888.com/api/member/videoCoin',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'imei=' + imei + '&device=' + device + '&version=' + version.myAndroidVersion + '&source=' + source + '&version_code=' + versionCode
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('看推荐视频:' + body)
            }
        })
    }


//首页金币
    this.randCoin = function (header, imei, coin) {
        request({
            url: 'http://api.xiaomuyu888.com/api/member/randCoin',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'coin=' + coin + '&step=&double=1&imei=' + imei + '&device=' + device + '&version=' + version.myAndroidVersion + '&source=' + source + '&version_code=' + versionCode
        }, function (error, res, body) {
            /*            if (!error && res.statusCode == 200) {
                            //输出返回的内容
                            console.log('首页随机金币:' + body)
                        }*/
        })
    }


//幸运大转盘
    this.turntableCoin = function (header, imei) {
        request({
            url: 'http://api.xiaomuyu888.com/api/turntable/turntableCoin?imei=' + imei + '&source=' + source + '&device=' + device + '&version=' + versionCode,
            method: 'get',
            gzip: true,
            headers: header,
        }, function (error, res, body) {
            if (!error && res.statusCode == 200 && body.indexOf("coin") != -1) {
                if (JSON.parse(body).data.coin > 0) {
                    //输出返回的内容
                    console.log('幸运大转盘首页:' + JSON.parse(body).data.coin)
                    request({
                        url: 'http://api.xiaomuyu888.com/api/turntable/double?imei=' + imei + '&jsoncallback=callback',
                        method: 'post',
                        gzip: true,
                        headers: header,
                        body: 'source=' + source + '&device=' + device + '&unique=' + JSON.parse(body).data.unique
                    }, function (error, res, body) {
                        if (!error && res.statusCode == 200) {
                            //输出返回的内容
                            console.log('幸运大转盘金币:' + body)
                        }
                    })
                }
            }
        })
    }

//开宝箱
    this.chestcoin = function (header, imei) {
        var arr = [5, 30, 60, 100]
        for (j = 0, len = arr.length; j < len; j++) {
            request({
                url: 'http://api.xiaomuyu888.com/api/turntable/chestcoin?imei=' + imei + '&jsoncallback=callback',
                method: 'post',
                gzip: true,
                headers: header,
                body: 'source=' + source + '&device=' + device + '&num=' + arr[j]
            }, function (error, res, body) {
                if (!error && res.statusCode == 200) {
                    //输出返回的内容
                    console.log('开宝箱:' + body)
                }
            })
        }
    }

//刮卡奖励
    this.cardReceiveCoin = function (header, imei) {
        var arr = [2, 4, 6]
        request({
            url: 'http://api.xiaomuyu888.com/api/Card/cardList',
            method: 'post',
            gzip: true,
            headers: header,
            body: 'imei=' + imei + '&device=' + device + '&version=' + version.myAndroidVersion + '&source=' + source + '&version_code=' + versionCode
        }, function (error, res, body) {
            if (!error && res.statusCode == 200 && body.indexOf("surplus_numbers") != -1) {
                //输出返回的内容
                console.log('刮卡:' + JSON.parse(body).data['surplus_numbers'])
                if (JSON.parse(body).data['surplus_numbers'] != 0) {
                    request({
                        url: 'http://api.xiaomuyu888.com/api/Card/cardReceiveCoin',
                        method: 'post',
                        gzip: true,
                        headers: header,
                        body: 'coin=' + arr[randomNum(0, 2)] + '&step=&is_double=0&id=' + randomNum(2, 20) + '&double=0&imei=' + imei + '&device=' + device + '&version=' + version.myAndroidVersion + '&source=' + source + '&version_code=' + versionCode
                    }, function (error, res, body) {
                        //输出返回的内容
                        console.log('刮卡奖励:' + body)
                    })
                }
            }
        })
    }

};

module.exports.androidTask = new AndroidTask();