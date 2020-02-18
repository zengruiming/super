var request = require('request')
var schedule = require('node-schedule')
var task = require('./service/zouluzhuan/task')
var query = require('./service/zouluzhuan/query')
var login = require('./service/zouluzhuan/login')
var withdraws = require('./service/zouluzhuan/withdraws')
var randomNum = require('./utils/randomNum')
var bossRand = require('./utils/bossRand')
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
    // login.updateUmengDeviceToken(myHeader, myImei, '2c40fa2a2236163a78ca2bd5f8a377a142f950fae79f86e54d310d92b80bdb02')
    login.newAdControl(myHeader, myImei, 'xinxiliu')
    login.homeTimestamp(myHeader, myImei)
    login.homeStep(myHeader, myImei, getNowFormatDate())
    login.newAdControl(myHeader, myImei, 'jili')
    login.versionIndex(myHeader, myImei)
}

// ios任务
function myIosTask(myHeader, myImei, times) {
    times++;
    if (times <= 2) {
        task.iosTask.signCoin(myHeader, myImei)//签到
        task.iosTask.signCoinDouble(myHeader, myImei) //签到翻倍
    }
    if (times <= 6) task.iosTask.advertisementCount(myHeader, myImei) //步数1-1
    if (times == 8) task.iosTask.exchangedCoin(myHeader, myImei, randomNum(10001, 20001)) //步数1-2
    if (times <= 15) {
        task.iosTask.turntableCoin(myHeader, myImei) //幸运大转盘
        setTimeout(myIosTask, randomNum(30001, 60000), myHeader, myImei, times)
    } else {
        task.iosTask.chestcoin(myHeader, myImei)
    }
    // console.log('--> 第' + times + '次')
}

// ios循环刷分
function myIosIntervalCoin(myHeader, myImei, times) {
    times++;
    num = randomNum(0, 3)
    if (num == 0) task.iosTask.newsVideoCoin(myHeader, myImei) //刷新闻视频
    if (num == 1) task.iosTask.videoCoin(myHeader, myImei) //看推荐视频
    if (num == 2) task.iosTask.cardReceiveCoin(myHeader, myImei) //刮卡奖励
    if (num == 3 && times % 2 == 1) task.iosTask.randCoin(myHeader, myImei, randomNum(15, 18)) //首页随机金币
    if (times <= 50) {
        setTimeout(myIosIntervalCoin, randomNum(30001, 40000), myHeader, myImei, times)
    }
}

// 提现
function myWithdraws(myHeader, myImei) {
    withdraws.withdrawsConfirm(myHeader, myImei, 100)
}

// android任务
function myAndroidTask(myHeader, myImei, times) {
    times++;
    if (times <= 2) {
        task.androidTask.signCoin(myHeader, myImei)//签到
        task.androidTask.signCoinDouble(myHeader, myImei) //签到翻倍
    }
    if (times <= 6) task.androidTask.advertisementCount(myHeader, myImei) //步数1-1
    if (times == 8) task.androidTask.exchangedCoin(myHeader, myImei, randomNum(10001, 20001)) //步数1-2
    if (times <= 15) {
        task.androidTask.turntableCoin(myHeader, myImei) //幸运大转盘
        setTimeout(myAndroidTask, randomNum(30001, 60000), myHeader, myImei, times)
    } else {
        task.androidTask.chestcoin(myHeader, myImei)
    }
    // console.log('--> 第' + times + '次')
}

// android循环刷分
function myAndroidIntervalCoin(myHeader, myImei, times) {
    times++;
    num = randomNum(0, 3)
    if (num == 0) task.androidTask.newsVideoCoin(myHeader, myImei) //刷新闻视频
    if (num == 1) task.androidTask.videoCoin(myHeader, myImei) //看推荐视频
    if (num == 2) task.androidTask.cardReceiveCoin(myHeader, myImei) //刮卡奖励
    if (num == 3 && times % 2 == 1) task.androidTask.randCoin(myHeader, myImei, randomNum(15, 18)) //首页随机金币
    if (times <= 50) {
        setTimeout(myAndroidIntervalCoin, randomNum(30001, 40000), myHeader, myImei, times)
    }
}

// 查询
// myWithdraws(headerAndImei.myHeader2,headerAndImei.myImei2);
// mylogin(headerAndImei.myHeader2,headerAndImei.myImei2);
// myQuery(headerAndImei.myHeader2,headerAndImei.myImei2);
// myIosTask(headerAndImei.myHeader2, headerAndImei.myImei2);

// 日常刷
schedule.scheduleJob('0 0 8,9,13,14,20,21,22,23 * * ?', function (myHeader, myImei) {
    myHeader = headerAndImei.myHeader1
    myImei = headerAndImei.myImei1
    mylogin(myHeader, myImei)
    setTimeout(myIosTask, randomNum(300000, 1200000), myHeader, myImei, 0)
    setTimeout(myIosIntervalCoin, randomNum(300000, 1200000), myHeader, myImei, 0)
})

schedule.scheduleJob('0 0 7,8,11,12,16,17,18,23 * * ?', function (myHeader, myImei) {
    myHeader = headerAndImei.myHeader2
    myImei = headerAndImei.myImei2
    mylogin(myHeader, myImei)
    setTimeout(myIosTask, randomNum(300000, 1200000), myHeader, myImei, 0)
    setTimeout(myIosIntervalCoin, randomNum(300000, 1200000), myHeader, myImei, 0)
})

var androidImei = headerAndImei.myAndroidImei
for (var j = 0; j < androidImei.length; j++) {
    schedule.scheduleJob('0 0 ' + bossRand(7, 23, 8) + ' * * ?', function (myHeader, myImei) {
        myHeader = headerAndImei.myAndroidHeader
        myImei = androidImei[j] + ""
        setTimeout(myAndroidTask, randomNum(300000, 1200000), myHeader, myImei, 0)
        setTimeout(myAndroidIntervalCoin, randomNum(300000, 1200000), myHeader, myImei, 0)
    })
}


// 无限刷
// for (var i=0;i<1000;i++) {
// setInterval(task.iosTask.randCoin,1,headerAndImei.myHeader1, headerAndImei.myImei1, randomNum(15,18))
// setInterval(task.iosTask.randCoin,1,headerAndImei.myHeader2, headerAndImei.myImei2, randomNum(15,18))
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
schedule.scheduleJob('0 0 * * * ?', function () {
    setTimeout(quzouTask.zhengDian, randomNum(0, 3000000), quzouHeader.appHeader);
})

// 日常刷
schedule.scheduleJob('0 0 8,9,13,14,20,21,22,23 * * ?', function () {
    setTimeout(quzouRun, randomNum(300000, 600000), quzouHeader.appHeader, 0)
})
