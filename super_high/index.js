var task = require('./service/task')
var query = require('./service/query')
var login = require('./service/login')
var withdraws = require('./service/withdraws')
var randomNum = require('./utils/randomNum')
var getNowFormatDate = require('./utils/getNowFormatDate')
var headerAndImei = require('./domain/headerAndImei')
var num, myTimeout, dayTimeout
var times = 0

//刷分总次数
var number = 500


//查询
function myQuery(myHeader, myImei) {
    query.queryEarningPage(myHeader, myImei) //查询收益详情
    query.queryIndex(myHeader, myImei) //查询账户金币|提现详情
}

// 登录
function mylogin(myHeader, myImei) {
    login.homeStep(myHeader, myImei, '1990-01-01')
    login.memberIndex(myHeader, myImei)
    login.homeTab(myHeader, myImei)
    login.memberIndex(myHeader, '00322add0a8252f3f6c7a9a134d47df9af87e821')
    login.updateUmengDeviceToken(myHeader, myImei, '2c40fa2a2236163a78ca2bd5f8a377a142f950fae79f86e54d310d92b80bdb02')
    login.newAdControl(myHeader, myImei, 'xinxiliu')
    login.homeTimestamp(myHeader, myImei)
    login.homeStep(myHeader, myImei, getNowFormatDate())
    login.newAdControl(myHeader, myImei, 'jili')
    login.versionIndex(myHeader, myImei)
}

//任务
function myTask(myHeader, myImei) {
    times++;
    if (times <= 2) {
        task.signCoin(myHeader, myImei)//签到
        task.signCoinDouble(myHeader, myImei) //签到翻倍
    }
    if (times <= 6) task.advertisementCount(myHeader, myImei) //步数1-1
    if (times == 8) task.exchangedCoin(myHeader, myImei, randomNum(10001, 20001)) //步数1-2
    num = randomNum(0,3)
    if (num == 0) task.newsVideoCoin(myHeader,myImei) //刷新闻视频
    if (num == 1) task.videoCoin(myHeader,myImei) //看推荐视频
    if (num == 2) task.randCoin(myHeader,myImei, randomNum(15,18)) //首页随机金币
    if (num == 3) task.cardReceiveCoin(myHeader,myImei) //刮卡奖励
    if (times <= (100-1)*2) task.turntableCoin(myHeader, myImei) //幸运大转盘
    myTimeout = randomNum(30001, 60000)
    if (times <= (number-1)*2) {
        setTimeout(myTask, myTimeout, myHeader, myImei)
    }else {
        task.chestcoin(myTimeout, myHeader)
    }
    console.log('第' + Math.round(times/2) + '次')
}

//提现
function myWithdraws(myHeader, myImei) {
    withdraws.withdrawsConfirm(myHeader, myImei, 100)
}

// myWithdraws(headerAndImei.myHeader2,headerAndImei.myImei2);
// mylogin(headerAndImei.myHeader2,headerAndImei.myImei2);
// myQuery(headerAndImei.myHeader2,headerAndImei.myImei2);
// myTask(headerAndImei.myHeader2, headerAndImei.myImei2);

//日常刷
mylogin(headerAndImei.myHeader1, headerAndImei.myImei1)
myTask(headerAndImei.myHeader1, headerAndImei.myImei1)
dayTimeout = randomNum(86400000-10800000,86400000+10800000)
setInterval(myTask, dayTimeout, headerAndImei.myHeader1, headerAndImei.myImei1)

mylogin(headerAndImei.myHeader2, headerAndImei.myImei2)
myTask(headerAndImei.myHeader2, headerAndImei.myImei2)
dayTimeout = randomNum(86400000-10800000,86400000+10800000)
setInterval(myTask, dayTimeout, headerAndImei.myHeader2, headerAndImei.myImei2)

//无限刷
// setInterval(task.randCoin,1,headerAndImei.myHeader1, headerAndImei.myImei1, randomNum(15,18))
// setInterval(task.randCoin,1,headerAndImei.myHeader2, headerAndImei.myImei2, randomNum(15,18))
