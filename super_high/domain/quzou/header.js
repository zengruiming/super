var str2Obj = require('../../utils/str2Obj.js')

function QuzouHeader() {
//iPhone的微信
    this.wechatHeader = str2Obj(unescape('Host: mini1.91quzou.com\n' +
        'appId: MQUZOU2020X0U1220PS34UG1AXB0I1K0Q2AU9\n' +
        'source: 2001\n' +
        'Cache-Control: no-cache\n' +
        'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13F69 MicroMessenger/7.0.9(0x17000929) NetType/WIFI Language/zh_CN\n' +
        'Proxy-Connection: keep-alive\n' +
        'appBundleID: QUZOU_MINI\n' +
        'Referer: https://servicewechat.com/wx9681faeb5e00cdf0/38/page-frame.html\n' +
        'appMode: PROD\n' +
        'appVersion: 3.3.0\n' +
        'appMuId: 46C4E2C99C6A423CA1629A08C1D29556\n' +
        'MINITYPE: QUZOUMINI\n' +
        'accessToken: +NEflO3uj02MBMS5Y1lDrWp6h2nk+NkrJvSsGhwGPydCKHkNptJO7KGAe6dsVzx+XNSA8G8U5pwcEkT/jmwz/Qc+bLg/4n4fDulDEFNWHOKgfaVhatqzOJz6qUJF1ibR3BmH/D7LWPBLCug1ZvXZmxWn6Hq6Nveoz7ASyxArSQD40vbm6fnfkg==\n' +
        'Content-Length: 9\n' +
        'appName: MINI\n' +
        'Connection: keep-alive\n' +
        'Accept-Language: zh-cn\n' +
        'Accept: */*\n' +
        'Content-Type: application/x-www-form-urlencoded\n' +
        'Accept-Encoding: gzip, deflate\n'))

//iPhone的app
    this.appHeader = str2Obj(unescape('Host: mobile01.91quzou.com\n' +
        'appId: QUZUOO2C01YTQYOH9Q100207N063H7ES2Z43\n' +
        'phoneModel: iPhoneSE\n' +
        'Accept: */*\n' +
        'Proxy-Connection: keep-alive\n' +
        'appName: QZI\n' +
        'appVersion: 4.6.0\n' +
        'source: 1004\n' +
        'accessToken: +NEflO3uj02MBMS5Y1lDrWp6h2nk+NkrJvSsGhwGPyfs4wcVLp9cgApfWcz6kQlck+vttQl74CMPo9HibM6F9tPtHGhWTxf0SgaTS0fuBntA0NzEEDZJbQWwD57Capn1p9ey43QoDRqJEhPWJSynhlBINYoWs0Sw9ABu0ZMUSJVatUNmk8Gu7Q==\n' +
        'Accept-Encoding: gzip;q=1.0, compress;q=0.5\n' +
        'Accept-Language: zh-Hans-CN;q=1.0, en-CN;q=0.9, zh-Hans;q=0.8, en-US;q=0.7, de-CH;q=0.6\n' +
        'Content-Type: application/x-www-form-urlencoded; charset=utf-8\n' +
        'appMuId: 46C4E2C99C6A423CA1629A08C1D29556\n' +
        'appMode: PROD\n' +
        'User-Agent: \n' +
        'appBundleID: QUZUO_VIP_IOS\n' +
        'Connection: keep-alive\n' +
        'osVersion: 9.3.2\n'))
}

// console.log(str2Obj(v1))

module.exports = new QuzouHeader()