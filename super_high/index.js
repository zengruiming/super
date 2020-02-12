var request = require('request')
var schedule = require('node-schedule')
var task = require('./service/zouluzhuan/task')
var query = require('./service/zouluzhuan/query')
var login = require('./service/zouluzhuan/login')
var withdraws = require('./service/zouluzhuan/withdraws')
var randomNum = require('./utils/randomNum')
var getNowFormatDate = require('./utils/getNowFormatDate')
var headerAndImei = require('./domain/zouluzhuan/headerAndImei')
var quzouTask = require('./service/quzou/task')
var quzouHeader = require('./domain/quzou/header')
var num


// 查询
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

// 任务
function myTask(myHeader, myImei, times) {
    times++;
    if (times <= 2) {
        task.signCoin(myHeader, myImei)//签到
        task.signCoinDouble(myHeader, myImei) //签到翻倍
    }
    if (times <= 6) task.advertisementCount(myHeader, myImei) //步数1-1
    if (times == 8) task.exchangedCoin(myHeader, myImei, randomNum(10001, 20001)) //步数1-2
    if (times <= 100) {
        task.turntableCoin(myHeader, myImei) //幸运大转盘
        setTimeout(myTask, randomNum(30001, 60000), myHeader, myImei, times)
    } else {
        task.chestcoin(myHeader, myImei)
    }
    console.log('--> 第' + times + '次')
}

// 提现
function myWithdraws(myHeader, myImei) {
    withdraws.withdrawsConfirm(myHeader, myImei, 100)
}

// 循环刷分
function myIntervalCoin(myHeader, myImei, times) {
    times++;
    num = randomNum(0, 2)
    if (num == 0) task.newsVideoCoin(myHeader, myImei) //刷新闻视频
    if (num == 1) task.videoCoin(myHeader, myImei) //看推荐视频
    if (num == 2) task.cardReceiveCoin(myHeader, myImei) //刮卡奖励
    if (num == 3) task.randCoin(myHeader, myImei, randomNum(15, 18)) //首页随机金币
    if (times <= 60) {
        setTimeout(myIntervalCoin, randomNum(30001, 40000), myHeader, myImei, times)
    }
}

// 查询
// myWithdraws(headerAndImei.myHeader2,headerAndImei.myImei2);
// mylogin(headerAndImei.myHeader2,headerAndImei.myImei2);
// myQuery(headerAndImei.myHeader2,headerAndImei.myImei2);
// myTask(headerAndImei.myHeader2, headerAndImei.myImei2);

// 日常刷1
var t1 = schedule.scheduleJob('0 0 8,9,13,14,20,21,22,23 * * ?', function () {
    mylogin(headerAndImei.myHeader1, headerAndImei.myImei1)
    setTimeout(myTask, randomNum(3600000, 7200000), headerAndImei.myHeader1, headerAndImei.myImei1, 0)
    setTimeout(myIntervalCoin, randomNum(300000, 600000), headerAndImei.myHeader1, headerAndImei.myImei1, 0)
})

// 日常刷2
var t2 = schedule.scheduleJob('0 0 7,8,11,12,16,17,18,23 * * ?', function () {
    mylogin(headerAndImei.myHeader2, headerAndImei.myImei2)
    setTimeout(myTask, randomNum(3600000, 7200000), headerAndImei.myHeader2, headerAndImei.myImei2, 0)
    setTimeout(myIntervalCoin, randomNum(300000, 600000), headerAndImei.myHeader2, headerAndImei.myImei2, 0)
})

// 无限刷
// for (var i=0;i<1000;i++) {
// setInterval(task.randCoin,1,headerAndImei.myHeader1, headerAndImei.myImei1, randomNum(15,18))
// setInterval(task.randCoin,1,headerAndImei.myHeader2, headerAndImei.myImei2, randomNum(15,18))
// }


//趣走
var i, j

function quzouRun(header, times) {
    times++
    i = randomNum(2, 4);
    j = [3, 5]
    if (times < 160) {
        setTimeout(quzouRun, randomNum(15011, 20000), header, times);
    }
    if (times <= 10) {
        quzouTask.games(header);
        quzouTask.richang(header);
    }
    if (i == 1) {
        quzouTask.news(header);
    }
    if (i == 2) {
        quzouTask.videos(header);
    }
    if (i == 3) {
        quzouTask.gameAll(header, j[randomNum(0, 1)]);
    }
    if (i == 4) {
        quzouTask.wechatShare(quzouHeader.wechatHeader)
    }
}

//整点领红包
var t3 = schedule.scheduleJob('0 0 * * * ?', function () {
    setTimeout(quzouTask.zhengDian, randomNum(0, 3000000), quzouHeader.appHeader);
})

// 日常刷
var t4 = schedule.scheduleJob('0 0 8,9,13,14,20,21,22,23 * * ?', function () {
    setTimeout(quzouRun, randomNum(300000, 600000), quzouHeader.appHeader, 0)
})
