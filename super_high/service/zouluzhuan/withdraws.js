var version = require('../../domain/zouluzhuan/version')
/**
 * @Description: 提现
 */

var request = require('request');

function IosWithdraws() {

//提现
    this.withdrawsConfirm = function (header, imei, price) {
        request({
            url: 'https://api.xiaomuyu888.com/api/withdraws/confirm',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'amount=' + price + '&channel=1&device=ios&imei=' + imei + '&source=ios&version=' + version.myIosVersion
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('提现:' + body)
            }
        })
    }

};

module.exports.iosWithdraws = new IosWithdraws();

function AndroidWithdraws() {

//提现
    this.withdrawsConfirm = function (header, imei, price) {
        request({
            url: 'http://api.xiaomuyu888.com/api/withdraws/confirm',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'channel=1&amount=' + price + '&imei=' + imei + '&device=' + version.device + '&version=' + version.myAndroidVersion + '&source=' + version.source + '&version_code=' + version.versionCode
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                console.log('提现:' + body)
            }
        })
    }

};

module.exports.androidWithdraws = new AndroidWithdraws();