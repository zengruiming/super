var version = require('../../domain/zouluzhuan/version')
/**
 * @Description: 查询
 */

var request = require('request');

function Query() {

//查询收益记录
    this.queryEarningPage = function (header, imei) {
        request({
            url: 'https://api.xiaomuyu888.com/api/member/earningPage',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'device=ios&imei='+imei+'&page=1&source=ios&version=' + version.myVersion
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                var arr = JSON.parse(body).data;
                for(j = len=arr.length - 1; j >= 0; j--) {
                    console.log('收益类型:'+arr[j].type+' | '+'收益金币:'+arr[j].amount+' | '+'时间:'+arr[j]['created_at'])
                }
            }
        })
    }

//查询今日金币/总金币/可提现
    this.queryIndex = function (header, imei) {
        request({
            url: 'https://api.xiaomuyu888.com/api/member/index',
            method: 'POST',
            gzip: true,
            headers: header,
            body: 'device=ios&imei='+imei+'&source=ios&version=' + version.myVersion
        }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                //输出返回的内容
                    console.log('今日金币:'+JSON.parse(body).data['today_coin']+' | '+'总金币:'+JSON.parse(body).data.user.coin+' | '+'可提现:'+JSON.parse(body).data['canCash'])
            }
        })
    }


};

module.exports = new Query();