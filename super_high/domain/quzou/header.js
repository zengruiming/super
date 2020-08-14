var str2Obj = require('../../utils/str2Obj.js')

function QuzouHeader() {
//iPhone的微信
    this.wechatHeader = str2Obj(unescape('Host: mini1.91quzou.com\n' +
        'appId: MQUZOUA2F0Z200IYF8Q1404PY08R06X6GF2E3\n' +
        'Content-Type: application/x-www-form-urlencoded\n' +
        'Accept: */*\n' +
        'appName: MINI\n' +
        'appVersion: 3.3.0\n' +
        'source: 2001\n' +
        'accessToken: +NEflO3uj02MBMS5Y1lDrWp6h2nk+NkrJvSsGhwGPydCKHkNptJO7Hd+bfx9FzGfFGg5r8vywHuzQM+RsPV1I22f6dfczLAoBmKNqJxFCT+j2A+yyNraZZAf5wQ59tDxOZ6eS5Zp0J1rb0XCdYGm9O6bZrMbM//Q0Ij3JD+IE9uw5kqpZvwt9Q==\n' +
        'Cache-Control: no-cache\n' +
        'Accept-Language: zh-cn\n' +
        'Accept-Encoding: gzip, deflate, br\n' +
        'Content-Length: 9\n' +
        'appMode: PROD\n' +
        'appMuId: EE0524356A3141CC9FA5F5C44632B7B7\n' +
        'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.14(0x17000e2e) NetType/WIFI Language/zh_CN\n' +
        'appBundleID: QUZOU_MINI\n' +
        'Referer: https://servicewechat.com/wx9681faeb5e00cdf0/38/page-frame.html\n' +
        'MINITYPE: QUZOUMINI\n' +
        'Connection: keep-alive\n'))

//iPhone的app
    this.appHeader = str2Obj(unescape('Host: mobile01.91quzou.com\n' +
        'appId: QUZUOIX2020M080B300ZES4P1W3TN2Y0LS68\n' +
        'phoneModel: iPhone XS\n' +
        'Accept: */*\n' +
        'appName: QZI\n' +
        'appVersion: 4.6.0\n' +
        'source: 1004\n' +
        'accessToken: +NEflO3uj02MBMS5Y1lDrWp6h2nk+NkrJvSsGhwGPydIid2ESPmmu8shrIWzN5GdglwN04Iaq8cKH6fq71BWWErevnyDT9roTGTBjZOz7hXh47UJOsD1C/LovUk/O2B2KRsPfZglW+7lfUHro48ticWQL+IGqP/KHirnGnKnKqfFygsVUsfGZg==\n' +
        'Accept-Encoding: gzip;q=1.0, compress;q=0.5\n' +
        'Accept-Language: zh-Hans-CN;q=1.0, en-CN;q=0.9, zh-Hans;q=0.8, en-US;q=0.7, de-CH;q=0.6\n' +
        'Content-Type: application/x-www-form-urlencoded; charset=utf-8\n' +
        'Content-Length: 0\n' +
        'appMode: PROD\n' +
        'appMuId: EE0524356A3141CC9FA5F5C44632B7B7\n' +
        'User-Agent: \n' +
        'appBundleID: QUZUO_VIP_IOS\n' +
        'Connection: keep-alive\n' +
        'osVersion: 13.5\n'))
}

// console.log(str2Obj(v1))

module.exports = new QuzouHeader()