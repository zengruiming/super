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

login.updateUmengDeviceToken(headerAndImei.myHeader1, headerAndImei.myImei1, 'bc40fa2a2236163a78ca2bd5f8a377a1f2f950fae79f86e54d310d92b80bdf03')
// login.updateUmengDeviceToken(headerAndImei.myHeader2, headerAndImei.myImei2, '2c40fa2a2236163a78ca2bd5f8a377a142f950fae79f86e54d310d92b80bdb02')