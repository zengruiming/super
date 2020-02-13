var version = require('../../domain/zouluzhuan/version')
/**
 * @Description: 登录
 */

var request = require('request');

function Login() {

//登录01
    this.homeStep = function (header, imei, data) {
        request({
            url: 'https://api.xiaomuyu888.com/api/home/step',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'date='+data+'&device=ios&imei='+imei+'&source=ios&version=' + version.myVersion
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                    console.log('登录01:'+body)
            }
        })
    }

//登录02
    this.memberIndex = function (header, imei) {
        request({
            url: 'https://api.xiaomuyu888.com/api/member/index',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'device=ios&imei='+imei+'&source=ios&version=' + version.myVersion
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                    console.log('登录02:'+body)
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
            body: 'device=ios&imei='+imei+'&source=ios&version=' + version.myVersion
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                    console.log('登录03:'+body)
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
            body: 'device=ios&device_tokens='+tokens+'&imei='+imei+'&source=ios&version=' + version.myVersion
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                    console.log('登录04:'+body)
            }
        })
    }

//登录05
    this.newAdControl = function (header, imei,type) {
        request({
            url: 'https://api.xiaomuyu888.com/api/Advertisement/newAdControl',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'device=ios&imei='+imei+'&source=ios&type='+type+'&version=' + version.myVersion
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                    console.log('登录05:'+body)
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
            body: 'device=ios&imei='+imei+'&source=ios&version=' + version.myVersion
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                    console.log('登录06:'+body)
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
            body: 'device=ios&imei='+imei+'&source=ios&version=' + version.myVersion + '&version_code=' + version.myVersion + '&version_device=2'
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                    console.log('登录07:'+body)
            }
        })
    }


};

module.exports = new Login();