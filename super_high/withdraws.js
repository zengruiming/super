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

// 安卓提现
var androidImeiIndex = [0,12,14]
var androidIndex=0
withdraws.androidWithdraws.withdrawsConfirm(headerAndImei.myAndroidHeader, headerAndImei.myAndroidImei[androidImeiIndex[androidIndex]], androidImeiIndex[androidIndex], 100)

// ios提现
var IosImeiIndex = [0]
var IosIndex=0

withdraws.iosWithdraws.withdrawsConfirm(headerAndImei.myIosHeader[IosImeiIndex[IosIndex]], headerAndImei.myIosImei[IosImeiIndex[IosIndex]], IosImeiIndex[IosIndex], 100)