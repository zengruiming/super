var version = require('../../domain/zouluzhuan/version')
/**
 * @Description: 提现
 */

var request = require('request');

function Withdraws() {

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

module.exports = new Withdraws();