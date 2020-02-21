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

// login.updateUmengDeviceToken(headerAndImei.myHeader1, headerAndImei.myImei1, 'bc40fa2a2236163a78ca2bd5f8a377a1f2f950fae79f86e54d310d92b80bdf03')
// login.updateUmengDeviceToken(headerAndImei.myHeader2, headerAndImei.myImei2, 'c3d1a3fa6145227d76ba3bd6d6a357a242f330f2e78d82c24de12c76b38c3612')

// var x = [], y = 0
//
// function run() {
//     for (var i = 0; i < 2; i++) {
//         y = randomNum(1, 100)
//         x.push(schedule.scheduleJob('*/2 * * * * ?', function (j) {
//             console.log(j)
//         }.bind(null, y)))
//     }
// }
//
// run()
//
// schedule.scheduleJob('1 * * * * ?', function () {
//     for (var i = 0; i < x.length; i++) {
//         x[i].cancel()
//         console.log('取消成功')
//     }
//     x.length = 0
//     run()
// })

// task.iosTask.updateAmountStep(headerAndImei.myIosHeader[1],headerAndImei.myIosImei[1],318693)
// task.iosTask.memberIndex(headerAndImei.myIosHeader[1],headerAndImei.myIosImei[1])
// task.iosTask.updateUmengDeviceToken(headerAndImei.myIosHeader[1],headerAndImei.myIosImei[1],'2c40fa2a2236163a78ca2bd5f8a377a142f950fae79f86e54d310d92b80bdb04')