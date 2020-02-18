var version = require('../../domain/zouluzhuan/version')
/**
 * @Description: 登录
 */

var request = require('request');

function LoginIos() {

//登录01
    this.homeStep = function (header, imei, date) {
        request({
            url: 'https://api.xiaomuyu888.com/api/home/step',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'date=' + date + '&device=ios&imei=' + imei + '&source=ios&version=' + version.myIosVersion
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('登录01:' + body)
            }
        })
    }

//登录03
    this.homeTab = function (header, imei) {
        request({
            url: 'https://api.xiaomuyu888.com/api/home/tab',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'device=ios&imei=' + imei + '&source=ios&version=' + version.myIosVersion
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('登录03:' + body)
            }
        })
    }

//登录04
    this.updateUmengDeviceToken = function (header, imei, tokens) {
        request({
            url: 'https://api.xiaomuyu888.com/api/member/updateUmengDeviceToken',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'device=ios&device_tokens=' + tokens + '&imei=' + imei + '&source=ios&version=' + version.myIosVersion
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('登录04:' + body)
            }
        })
    }

//登录05
    this.newAdControl = function (header, imei, type) {
        request({
            url: 'https://api.xiaomuyu888.com/api/Advertisement/newAdControl',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'device=ios&imei=' + imei + '&source=ios&type=' + type + '&version=' + version.myIosVersion
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('登录05:' + body)
            }
        })
    }

//登录06
    this.homeTimestamp = function (header, imei) {
        request({
            url: 'https://api.xiaomuyu888.com/api/home/timestamp',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'device=ios&imei=' + imei + '&source=ios&version=' + version.myIosVersion
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('登录06:' + body)
            }
        })
    }

//登录07
    this.versionIndex = function (header, imei) {
        request({
            url: 'https://api.xiaomuyu888.com/api/version/index',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'device=ios&imei=' + imei + '&source=ios&version=' + version.myIosVersion + '&version_code=' + version.myIosVersion + '&version_device=2'
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('登录07:' + body)
            }
        })
    }


};

module.exports.iosLogin = new LoginIos();

function LoginAndroid() {

//登录01
    this.memberRegister = function (header, imei) {
        request({
            url: 'http://api.xiaomuyu888.com/api/member/register',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'imei=' + imei + '&device=android&version=' + version.myAndroidVersion + '&source=Z1006&version_code=140'
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('登录01:' + body)
            }
        })
    }

//登录02
    this.updateUmengDeviceToken = function (header, imei, deviceTokens) {
        request({
            url: 'http://api.xiaomuyu888.com/api/member/updateUmengDeviceToken',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'device_tokens=' + deviceTokens + '&imei=' + imei + '&device=android&version=' + version.myAndroidVersion + '&source=Z1006&version_code=140'
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('登录02:' + body)
            }
        })
    }

//登录03
    this.signCoinGet = function (header, imei) {
        request({
            url: 'http://api.xiaomuyu888.com/api/member/signCoin?device=android&version_code=140&source=Z1006&imei=' + imei + '&version=' + version.myIosVersion,
            method: 'GET',
            gzip: true,
            headers: header,
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('登录03:' + body)
            }
        })
    }

//登录04
    this.signCoinPost = function (header, imei) {
        request({
            url: 'http://api.xiaomuyu888.com/api/member/signCoin',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'imei=' + imei + '&device=android&version=' + version.myIosVersion + '&source=Z1006&version_code=140'
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('登录04:' + body)
            }
        })
    }

};

module.exports.androidLogin = new LoginAndroid();