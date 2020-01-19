var task = require('./service/task')
var query = require('./service/query')
var login = require('./service/login')
var withdraws = require('./service/withdraws')
var randomNum = require('./utils/randomNum')
var getNowFormatDate = require('./utils/getNowFormatDate')
var headerAndImei = require('./domain/headerAndImei')
var l,m,num1,myTimeout,dayTimeout
var times = 0


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
function myTask(myHeader, myImei,tag) {
    times++;
    if (times <= 1) {
        task.signCoin(myHeader, myImei)//签到
        task.signCoinDouble(myHeader, myImei) //签到翻倍
    }
    if (times <= 3) task.advertisementCount(myHeader, myImei) //步数1-1
    if (times == 4) task.exchangedCoin(myHeader, myImei, randomNum(10000, 20000)) //步数1-2
    num1 = randomNum(0,2)
    if (num1 == 0)task.newsVideoCoin(myHeader,myImei) //刷新闻视频
    if (num1 == 1)task.videoCoin(myHeader,myImei) //开宝箱
    if (num1 == 2) task.randCoin(myHeader,myImei, randomNum(15,18)) //首页金币
    task.turntableCoin(myHeader,myImei) //幸运大转盘
    myTimeout = randomNum(30001,60000)
    console.log('第'+times+'次')
    if (times <= 1000 && tag == 1){
        clearInterval(l)
        l = setInterval(myTask, myTimeout, headerAndImei.myHeader1, headerAndImei.myImei1,1)
    }
    if (times <= 1000 && tag == 2){
        clearInterval(m)
        m = setInterval(myTask, myTimeout, headerAndImei.myHeader2, headerAndImei.myImei2,2)
    }
}

//提现
function myWithdraws(myHeader, myImei) {
    withdraws.withdrawsConfirm(myHeader, myImei, 100)
}

// myWithdraws(headerAndImei.myHeader2,headerAndImei.myImei2);
// mylogin(headerAndImei.myHeader2,headerAndImei.myImei2);
myQuery(headerAndImei.myHeader2,headerAndImei.myImei2);
// myTask(headerAndImei.myHeader2, headerAndImei.myImei2);

// myTask(headerAndImei.myHeader1, headerAndImei.myImei1,1)
// dayTimeout = randomNum(86400000-10800000,86400000+10800000)
// setInterval(myTask, dayTimeout, headerAndImei.myHeader1, headerAndImei.myImei1, 1)
//
// myTask(headerAndImei.myHeader2, headerAndImei.myImei2,2)
// dayTimeout = randomNum(86400000-10800000,86400000+10800000)
// setInterval(myTask, dayTimeout, headerAndImei.myHeader2, headerAndImei.myImei2, 2)


task.turntableCoin(headerAndImei.myHeader1,headerAndImei.myImei1) //幸运大转盘