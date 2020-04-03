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

/*myIos = {}

for (var i = 0; i < headerAndImei.myIosImei.length; i++) {
    myIos[headerAndImei.myIosImei[i]] = headerAndImei.myIosHeader[i]
}

function run() {
    for (var key in myIos) {
        setInterval(function (key) {
            task.iosTask.randCoin(myIos[key], key, randomNum(14, 26))
        }, 0, key)
    }

    for (var i = 0; i < headerAndImei.myAndroidImei.length; i++) {
        setInterval(function (i) {
            task.androidTask.randCoin(headerAndImei.myAndroidHeader, headerAndImei.myAndroidImei[i] + "", randomNum(14, 26))
        }, 0, i)
    }
}*/

/*setInterval(function () {
task.iosTask.randCoin(headerAndImei.myIosHeader[0],headerAndImei.myIosImei[0],randomNum(14, 26))
},10)*/


setInterval(function () {
    task.iosTask.randCoin(headerAndImei.myIosHeader[0], headerAndImei.myIosImei[0], randomNum(14, 26))
    task.androidTask.randCoin(headerAndImei.myAndroidHeader, headerAndImei.myAndroidImei[0], randomNum(14, 26))
    task.androidTask.randCoin(headerAndImei.myAndroidHeader, headerAndImei.myAndroidImei[12], randomNum(14, 26))
    task.androidTask.randCoin(headerAndImei.myAndroidHeader, headerAndImei.myAndroidImei[14], randomNum(14, 26))
}, 2)

