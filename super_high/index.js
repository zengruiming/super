var request = require('request')
var schedule = require('node-schedule')
var task = require('./service/zouluzhuan/task')
var query = require('./service/zouluzhuan/query')
var withdraws = require('./service/zouluzhuan/withdraws')
var randomNum = require('./utils/randomNum')
var bossRand = require('./utils/bossRand')
var getNowFormatDate = require('./utils/getNowFormatDate')
var headerAndImei = require('./domain/zouluzhuan/headerAndImei')
var quzouTask = require('./service/quzou/task')
var quzouHeader = require('./domain/quzou/header')
var num = 0, myIos = {}, myStep = 0, myTimes = "", mySetTimes = []

// 更新登录信息
function myUpdate(myHeader, myImei, myAllTask) {
    // 更新步数
    myStep = randomNum(10001, 20001)
    if (myImei !== headerAndImei.myIosImei[0]) myAllTask.updateAmountStep(myHeader, myImei, myStep)
    // 登录
    myStep = randomNum(10001, 20001)
    myAllTask.homeTab(myHeader, myImei)
    myAllTask.homeStep(myHeader, myImei, '1990-01-01', 0)
    myAllTask.memberIndex(myHeader, myImei)
    myAllTask.newAdControl(myHeader, myImei, 'jili')
    myAllTask.memberIndex(myHeader, '00322add0a8252f3f6c7a9a134d47df9af87e821')
    myAllTask.versionIndex(myHeader, myImei)
    myAllTask.newAdControl(myHeader, myImei, 'xinxiliu')
    myAllTask.homeTimestamp(myHeader, myImei)
    myAllTask.signCoin(myHeader, myImei)
    myAllTask.homeStep(myHeader, myImei, getNowFormatDate(), myStep)
    myAllTask.homeStep(myHeader, myImei, getNowFormatDate(), myStep)
    // 签到翻倍
    setTimeout(myAllTask.signCoinDouble, 21000, myHeader, myImei)
    setTimeout(myAllTask.advertisementCount, 22000, myHeader, myImei)
    // 兑换步数
    setTimeout(myAllTask.exchangedCoin, 62000, myHeader, myImei, myStep)
}

// 登录
function mylogin(myHeader, myImei, myAllTask) {
    myStep = randomNum(10001, 20001)
    myAllTask.homeTab(myHeader, myImei)
    myAllTask.homeStep(myHeader, myImei, '1990-01-01', 0)
    myAllTask.memberIndex(myHeader, myImei)
    myAllTask.newAdControl(myHeader, myImei, 'jili')
    myAllTask.memberIndex(myHeader, '00322add0a8252f3f6c7a9a134d47df9af87e821')
    myAllTask.versionIndex(myHeader, myImei)
    myAllTask.newAdControl(myHeader, myImei, 'xinxiliu')
    myAllTask.homeTimestamp(myHeader, myImei)
    myAllTask.signCoin(myHeader, myImei)
    myAllTask.homeStep(myHeader, myImei, getNowFormatDate(), myStep)
    myAllTask.homeStep(myHeader, myImei, getNowFormatDate(), myStep)
}

// 循环刷分
function myIntervalCoin(myHeader, myImei, myAllTask, times) {
    times++;
    if (times == 1) mylogin(myHeader, myImei, myAllTask) //登录
    myAllTask.memberIndex(myHeader, myImei)//登录
    num = randomNum(1, 4)
    if (num == 1) myAllTask.newsVideoCoin(myHeader, myImei) //刷新闻视频
    if (num == 2) myAllTask.videoCoin(myHeader, myImei) //看推荐视频
    if (num == 3) myAllTask.cardReceiveCoin(myHeader, myImei) //刮卡奖励
    if (num == 4) myAllTask.turntableCoin(myHeader, myImei) //幸运大转盘
    if (myAllTask == task.androidTask && num == 4 && times % 3 == 1) setTimeout(myAllTask.randCoin, randomNum(10001, 20000), myHeader, myImei, randomNum(5, 15)) //首页随机金币
    if (myAllTask == task.iosTask && num == 4 && times % 3 == 1) setTimeout(myAllTask.randCoin, randomNum(10001, 20000), myHeader, myImei, randomNum(11, 26)) //首页随机金币
    if (num != 1) myAllTask.advertisementCount(myHeader, myImei)//广告
    if (times < 70) {
        setTimeout(myIntervalCoin, randomNum(30001, 40000), myHeader, myImei, myAllTask, times)
    } else {
        myAllTask.chestcoin(myHeader, myImei)
    }
}

// 日常刷-iPhone
for (var i = 0; i < headerAndImei.myIosImei.length; i++) {
    myIos[headerAndImei.myIosImei[i]] = headerAndImei.myIosHeader[i]
}

function run() {
    for (var key in myIos) {
        myTimes = bossRand(8, 23, 8)
        mySetTimes.push(schedule.scheduleJob('0 0 ' + Math.min.apply(null, myTimes.split(',')) + ' * * ?', function (key) {
            setTimeout(myUpdate, randomNum(0, 300000), myIos[key], key, task.iosTask)
        }.bind(null, key)))
        mySetTimes.push(schedule.scheduleJob('0 0 ' + myTimes + ' * * ?', function (key) {
            setTimeout(myIntervalCoin, randomNum(300000, 1200000), myIos[key], key, task.iosTask, 0)
        }.bind(null, key)))
    }

// 日常刷-android
    for (var i = 0; i < headerAndImei.myAndroidImei.length; i++) {
        myTimes = bossRand(8, 23, 8)
        mySetTimes.push(schedule.scheduleJob('0 0 ' + Math.min.apply(null, myTimes.split(',')) + ' * * ?', function (myImei) {
            setTimeout(myUpdate, randomNum(0, 300000), headerAndImei.myAndroidHeader, myImei, task.androidTask)
        }.bind(null, headerAndImei.myAndroidImei[i] + "")))
        mySetTimes.push(schedule.scheduleJob('0 0 ' + myTimes + ' * * ?', function (myImei) {
            setTimeout(myIntervalCoin, randomNum(300000, 1200000), headerAndImei.myAndroidHeader, myImei, task.androidTask, 0)
        }.bind(null, headerAndImei.myAndroidImei[i] + "")))
    }
}

//启动每日刷
run()
schedule.scheduleJob('0 0 1 * * ? ', function () {
    for (var i = 0; i < mySetTimes.length; i++) {
        mySetTimes[i].cancel()
        console.log('取消成功')
    }
    mySetTimes.length = 0
    run()
})

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
