var version = require('./version')

function headerAndImei() {
    this.myIosHeader = [
        {
            'Host': 'api.xiaomuyu888.com',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cookie': 'CNZZDATA1277228569=1471188029-1578837605-%7C1578871653; PHPSESSID=24ede57c1c37105f3a32b63393911071; UM_distinctid=16f9a4a12156ed-0259116b3-683a2862-2c600-16f9a4a121614b',
            'Connection': 'keep-alive',
            'Proxy-Connection': 'keep-alive',
            'Accept': '*/*',
            'User-Agent': 'YLZ/' + version.myIosVersion + ' (iPhone; iOS 9.3.2; Scale/2.00)',
            'Accept-Language': 'zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hans;q=0.8, en-US;q=0.7, de-CH;q=0.6',
            'Accept-Encoding': 'gzip, deflate'
        },
        {
            'Host': 'api.xiaomuyu888.com',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cookie': 'PHPSESSID=2448d3c451dc00484d8b04f09eb488f5; CNZZDATA1277228569=1480331940-1579233718-%7C1579244524; UM_distinctid=16fb1d236423e3-0583327f76e936-724c1451-2c600-16fb1d23643271',
            'Connection': 'keep-alive',
            'Accept': '*/*',
            'User-Agent': 'YLZ/' + version.myIosVersion + ' (iPhone; iOS 13.3; Scale/2.00)',
            'Accept-Language': 'zh-Hans-CN;q=1',
            'Accept-Encoding': 'gzip, deflate, br'
        },
    ]
    this.myIosImei = [
        'dc8349b88e14a402b617c852b2b260b648b27e5f',
        // 'a9fecc287fdd2ef1bf498737e562d6362612c259',
    ]

    this.myAndroidHeader = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Host': 'api.xiaomuyu888.com',
        'Connection': 'Keep-Alive',
        'Accept-Encoding': 'gzip',
        'User-Agent': 'okhttp/3.8.1'
    };
    this.myAndroidImei = [
        863064120408523, 863254353308520, 863064568208526, 355757587508520, 866174604208526, 866174617508524,
        866174630908529, 863064641708526, 355757654808522, 866174664608524, 866174108708526, 866174184908529,
        355757372008520, 355757112608522, 863254157608521, 866174246408526, 866174971308529, 866174672308521,
        355757737308524,
    ]
}

module.exports = new headerAndImei()