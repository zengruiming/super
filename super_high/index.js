var Task = require('./service/task')
var Query = require('./service/query')
var Login = require('./service/login')
var Withdraws = require('./service/withdraws')
var randomNum = require('./service/utils/randomNum')
var getNowFormatDate = require('./service/utils/getNowFormatDate')

var myHeader1 = {
    'Host': 'api.xiaomuyu888.com',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Cookie': 'CNZZDATA1277228569=1471188029-1578837605-%7C1578871653; PHPSESSID=24ede57c1c37105f3a32b63393911071; UM_distinctid=16f9a4a12156ed-0259116b3-683a2862-2c600-16f9a4a121614b',
    'Connection': 'keep-alive',
    'Proxy-Connection': 'keep-alive',
    'Accept': '*/*',
    'User-Agent': 'YLZ/1.2.5 (iPhone; iOS 9.3.2; Scale/2.00)',
    'Accept-Language': 'zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hans;q=0.8, en-US;q=0.7, de-CH;q=0.6',
    'Accept-Encoding': 'gzip, deflate'
};
var myImei1 = 'dc8349b88e14a402b617c852b2b260b648b27e5f'

var myHeader2 = {
    'Host': 'api.xiaomuyu888.com',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Cookie': 'PHPSESSID=2448d3c451dc00484d8b04f09eb488f5; CNZZDATA1277228569=1480331940-1579233718-%7C1579244524; UM_distinctid=16fb1d236423e3-0583327f76e936-724c1451-2c600-16fb1d23643271',
    'Connection': 'keep-alive',
    'Accept': '*/*',
    'User-Agent': 'YLZ/1.2.5 (iPhone; iOS 13.3; Scale/2.00)',
    'Accept-Language': 'zh-Hans-CN;q=1',
    'Accept-Encoding': 'gzip, deflate, br'
};
var myImei2 = 'a9fecc287fdd2ef1bf498737e562d6362612c259'


//查询
function myQuery() {
    query = new Query();
    query.queryEarningPage(myHeader2, myImei2) //查询收益详情
    query.queryIndex(myHeader2, myImei2) //查询账户金币|提现详情
}

// 登录
function mylogin() {
    login = new Login();
    login.homeStep(myHeader2, myImei2, '1990-01-01')
    login.memberIndex(myHeader2, myImei2)
    login.homeTab(myHeader2, myImei2)
    login.memberIndex(myHeader2, '00322add0a8252f3f6c7a9a134d47df9af87e821')
    login.updateUmengDeviceToken(myHeader2, myImei2, '2c40fa2a2236163a78ca2bd5f8a377a142f950fae79f86e54d310d92b80bdb02')
    login.newAdControl(myHeader2, myImei2, 'xinxiliu')
    login.homeTimestamp(myHeader2, myImei2)
    login.homeStep(myHeader2, myImei2, getNowFormatDate())
    login.newAdControl(myHeader2, myImei2, 'jili')
    login.versionIndex(myHeader2, myImei2)
}

function myTask() {
    task = new Task();
    task.signCoin(myHeader2, myImei2) //签到
    task.signCoinDouble(myHeader2, myImei2) //签到翻倍
    task.advertisementCount(myHeader2, myImei2) //步数1-1
    task.exchangedCoin(myHeader2, myImei2, 2000) //步数1-2
    task.newsVideoCoin(myHeader2, myImei2) //刷新闻视频
    task.videoCoin(myHeader2, myImei2) //开宝箱
    task.randCoin(myHeader2, myImei2, 16) //首页金币
    task.turntableCoin(myHeader2, myImei2) //幸运大转盘
}

//提现
function myWithdraws() {
    withdraws = new Withdraws();
    withdraws.withdrawsConfirm(myHeader2, myImei2, 100)
}

// myWithdraws();
// mylogin();
// myQuery();
// myTask();

console.log(randomNum(10,20))
console.log(getNowFormatDate())