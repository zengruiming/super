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

// 查询
function myQuery(myHeader, myImei) {
    query.queryEarningPage(myHeader, myImei) //查询收益详情
    query.queryIndex(myHeader, myImei) //查询账户金币|提现详情
}

// 提现
function myWithdraws(myHeader, myImei) {
    withdraws.withdrawsConfirm(myHeader, myImei, 1)
}

// myWithdraws(headerAndImei.myIosHeader[1],headerAndImei.myIosImei[1]);//提现

// task.iosTask.updateAmountStep(headerAndImei.myIosHeader[1],headerAndImei.myIosImei[1],118693)//更新总步数
// task.iosTask.memberIndex(headerAndImei.myIosHeader[1],headerAndImei.myIosImei[1])//查账户信息

myQuery(headerAndImei.myIosHeader[0],headerAndImei.myIosImei[0]);//查收益详情、账户金币和提现详情

// task.iosTask.updateUmengDeviceToken(headerAndImei.myIosHeader[0],headerAndImei.myIosImei[0],'bc40fa2a2236163a78ca2bd5f8a377a1f2f950fae79f86e54d310d92b80bdf03')//更新DeviceToken
// task.iosTask.updateUmengDeviceToken(headerAndImei.myIosHeader[1],headerAndImei.myIosImei[1],'c3d1a3fa6145227d76ba3bd6d6a357a242f330f2e78d82c24de12c76b38c3612')//更新DeviceToken
// task.iosTask.updateUmengDeviceToken(headerAndImei.myIosHeader[1],headerAndImei.myIosImei[1],'2c40fa2a2236163a78ca2bd5f8a377a142f950fae79f86e54d310d92b80bdb04')//更新DeviceToken

