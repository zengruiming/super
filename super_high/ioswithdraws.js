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

// ios提现
var iosImeiIndex = [0]
var iosIndex=0

withdraws.iosWithdraws.withdrawsConfirm(headerAndImei.myIosHeader[iosImeiIndex[iosIndex]], headerAndImei.myIosImei[iosImeiIndex[iosIndex]], iosImeiIndex[iosIndex], 100)