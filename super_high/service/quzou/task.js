var request = require('request');
var randomNum = require('../../utils/randomNum');

function QuzouTask() {

//生成md5签名
function md5(n, t) {
    function r(n, t) {
        return n << t | n >>> 32 - t
    }

    function e(n, t) {
        var r, e, u, o, f;
        return u = 2147483648 & n, o = 2147483648 & t, f = (1073741823 & n) + (1073741823 & t), (r = 1073741824 & n) & (e = 1073741824 & t) ? 2147483648 ^ f ^ u ^ o : r | e ? 1073741824 & f ? 3221225472 ^ f ^ u ^ o : 1073741824 ^ f ^ u ^ o : f ^ u ^ o
    }

    function u(n, t, u, o, f, i, c) {
        return n = e(n, e(e(function (n, t, r) {
            return n & u | ~n & o
        }(t), f), c)), e(r(n, i), t)
    }

    function o(n, t, u, o, f, i, c) {
        return n = e(n, e(e(function (n, t, r) {
            return n & o | u & ~o
        }(t), f), c)), e(r(n, i), t)
    }

    function f(n, t, u, o, f, i, c) {
        return n = e(n, e(e(function (n, t, r) {
            return n ^ u ^ o
        }(t), f), c)), e(r(n, i), t)
    }

    function i(n, t, u, o, f, i, c) {
        return n = e(n, e(e(function (n, t, r) {
            return u ^ (n | ~o)
        }(t), f), c)), e(r(n, i), t)
    }

    function c(n) {
        var t, r = "", e = "";
        for (t = 0; t <= 3; t++) r += (e = "0" + (n >>> 8 * t & 255).toString(16)).substr(e.length - 2, 2);
        return r
    }

    var a, d, s, p, l, v, y, h, g, m = n, b = Array();
    for (b = function (n) {
        for (var t, r = n.length, e = r + 8, u = 16 * ((e - e % 64) / 64 + 1), o = Array(u - 1), f = 0, i = 0; i < r;) f = i % 4 * 8, o[t = (i - i % 4) / 4] = o[t] | n.charCodeAt(i) << f, i++;
        return f = i % 4 * 8, o[t = (i - i % 4) / 4] = o[t] | 128 << f, o[u - 2] = r << 3, o[u - 1] = r >>> 29, o
    }(m), v = 1732584193, y = 4023233417, h = 2562383102, g = 271733878, a = 0; a < b.length; a += 16) d = v, s = y, p = h, l = g, y = i(y = i(y = i(y = i(y = f(y = f(y = f(y = f(y = o(y = o(y = o(y = o(y = u(y = u(y = u(y = u(y, h = u(h, g = u(g, v = u(v, y, h, g, b[a + 0], 7, 3614090360), y, h, b[a + 1], 12, 3905402710), v, y, b[a + 2], 17, 606105819), g, v, b[a + 3], 22, 3250441966), h = u(h, g = u(g, v = u(v, y, h, g, b[a + 4], 7, 4118548399), y, h, b[a + 5], 12, 1200080426), v, y, b[a + 6], 17, 2821735955), g, v, b[a + 7], 22, 4249261313), h = u(h, g = u(g, v = u(v, y, h, g, b[a + 8], 7, 1770035416), y, h, b[a + 9], 12, 2336552879), v, y, b[a + 10], 17, 4294925233), g, v, b[a + 11], 22, 2304563134), h = u(h, g = u(g, v = u(v, y, h, g, b[a + 12], 7, 1804603682), y, h, b[a + 13], 12, 4254626195), v, y, b[a + 14], 17, 2792965006), g, v, b[a + 15], 22, 1236535329), h = o(h, g = o(g, v = o(v, y, h, g, b[a + 1], 5, 4129170786), y, h, b[a + 6], 9, 3225465664), v, y, b[a + 11], 14, 643717713), g, v, b[a + 0], 20, 3921069994), h = o(h, g = o(g, v = o(v, y, h, g, b[a + 5], 5, 3593408605), y, h, b[a + 10], 9, 38016083), v, y, b[a + 15], 14, 3634488961), g, v, b[a + 4], 20, 3889429448), h = o(h, g = o(g, v = o(v, y, h, g, b[a + 9], 5, 568446438), y, h, b[a + 14], 9, 3275163606), v, y, b[a + 3], 14, 4107603335), g, v, b[a + 8], 20, 1163531501), h = o(h, g = o(g, v = o(v, y, h, g, b[a + 13], 5, 2850285829), y, h, b[a + 2], 9, 4243563512), v, y, b[a + 7], 14, 1735328473), g, v, b[a + 12], 20, 2368359562), h = f(h, g = f(g, v = f(v, y, h, g, b[a + 5], 4, 4294588738), y, h, b[a + 8], 11, 2272392833), v, y, b[a + 11], 16, 1839030562), g, v, b[a + 14], 23, 4259657740), h = f(h, g = f(g, v = f(v, y, h, g, b[a + 1], 4, 2763975236), y, h, b[a + 4], 11, 1272893353), v, y, b[a + 7], 16, 4139469664), g, v, b[a + 10], 23, 3200236656), h = f(h, g = f(g, v = f(v, y, h, g, b[a + 13], 4, 681279174), y, h, b[a + 0], 11, 3936430074), v, y, b[a + 3], 16, 3572445317), g, v, b[a + 6], 23, 76029189), h = f(h, g = f(g, v = f(v, y, h, g, b[a + 9], 4, 3654602809), y, h, b[a + 12], 11, 3873151461), v, y, b[a + 15], 16, 530742520), g, v, b[a + 2], 23, 3299628645), h = i(h, g = i(g, v = i(v, y, h, g, b[a + 0], 6, 4096336452), y, h, b[a + 7], 10, 1126891415), v, y, b[a + 14], 15, 2878612391), g, v, b[a + 5], 21, 4237533241), h = i(h, g = i(g, v = i(v, y, h, g, b[a + 12], 6, 1700485571), y, h, b[a + 3], 10, 2399980690), v, y, b[a + 10], 15, 4293915773), g, v, b[a + 1], 21, 2240044497), h = i(h, g = i(g, v = i(v, y, h, g, b[a + 8], 6, 1873313359), y, h, b[a + 15], 10, 4264355552), v, y, b[a + 6], 15, 2734768916), g, v, b[a + 13], 21, 1309151649), h = i(h, g = i(g, v = i(v, y, h, g, b[a + 4], 6, 4149444226), y, h, b[a + 11], 10, 3174756917), v, y, b[a + 2], 15, 718787259), g, v, b[a + 9], 21, 3951481745), v = e(v, d), y = e(y, s), h = e(h, p), g = e(g, l);
    return 32 == t ? c(v) + c(y) + c(h) + c(g) : c(y) + c(h)
}

//刷日常任务
this.richang = function (header) {

    //登录
    request({
        url: 'https://mobile01.91quzou.com/rebate/userInvitation/matchUserInviteInfo.do',
        method: 'POST',
        gzip: true,
        headers: header,
        body: unescape('brand=%E8%8B%B9%E6%9E%9C&deviceId=46C4E2C99C6A423CA1629A08C1D29556&devicePixelRatio=2&localIPv4=10.70.139.88%2C127.0.0.1%2C192.168.56.223&localIPv6=fe80%3A%3A18b6%3Ad653%3Aeb49%3A210%2Cfe80%3A%3A1%2Cfe80%3A%3Ab81a%3A67ff%3Afea0%3A2ba1&model=iPhoneSE&screenHeight=568&screenWidth=320&systemVersion=9.3.2'.trim())
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('登录:' + body)
        }
    })

    //领步数
    request({
        url: 'https://mobile01.91quzou.com/currency/getExpectExchangeCurrency.do',
        method: 'POST',
        gzip: true,
        headers: header
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('领步数1-1:' + body)
            var resp = JSON.parse(body)
            if (resp.code == '0' && resp.data.days.length > 0) {
                var datas = resp.data.days;
                var recordId = datas[0].recordId + "";
                var exchangeCurrency = datas[0].expectExchangecurrency + "";
                var category = datas[0].category + "";
                var saveDataAry = [];
                var saveData = {};
                var data1 = {
                    "recordId": recordId,
                    "exchangeCurrency": exchangeCurrency,
                    "category": category
                };
                saveDataAry.push(data1);
                saveData["exchangeReqs"] = saveDataAry;
                request({
                    url: 'https://mobile01.91quzou.com/currency/exchangeCurrency.do',
                    method: 'POST',
                    gzip: true,
                    headers: header,
                    body: JSON.stringify(saveData)
                }, function (error, res, body) {
                    if (!error && res.statusCode == 200) {
                        console.log('领步数1-2:' + body)
                    }
                })
            }
        }
    })

    //戳气球翻倍
    request({
        url: 'https://mobile01.91quzou.com/activity/balloon/givingScoreDouble.do',
        method: 'POST',
        gzip: true,
        headers: header
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('戳气球翻倍:' + body)
        }
    })

    //戳气球3轮奖励
    request({
        url: 'https://mobile01.91quzou.com/activity/balloon/receiveAward.do',
        method: 'POST',
        gzip: true,
        headers: header,
        body: unescape('count=3'.trim())
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('戳气球3轮奖励:' + body)
        }
    })

    //戳气球5轮奖励
    request({
        url: 'https://mobile01.91quzou.com/activity/balloon/receiveAward.do',
        method: 'POST',
        gzip: true,
        headers: header,
        body: unescape('count=5'.trim())
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('戳气球5轮奖励:' + body)
        }
    })

    //戳气球10轮奖励
    request({
        url: 'https://mobile01.91quzou.com/activity/balloon/receiveAward.do',
        method: 'POST',
        gzip: true,
        headers: header,
        body: unescape('count=10'.trim())
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('戳气球10轮奖励:' + body)
        }
    })

    //看小说1
    request({
        url: 'https://mobile01.91quzou.com/rebate/qz/task/completeTask.do',
        method: 'POST',
        gzip: true,
        headers: header,
        body: unescape('type=1&taskId=NK7CXVSB&count=1&completedMethod=0'.trim())
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('看小说1:' + body)
        }
    })

    //看小说1-1
    request({
        url: 'https://mobile01.91quzou.com/rebate/readbook/saveReadTime.do',
        method: 'POST',
        gzip: true,
        headers: header,
        body: unescape('booktime=86400&bookid=&bookname='.trim())
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('看小说1-1:' + body)
        }
    })

    //看小说2
    request({
        url: 'https://mobile01.91quzou.com/rebate/qz/task/completeTask.do',
        method: 'POST',
        gzip: true,
        headers: header,
        body: unescape('completedMethod=0&taskId=HAPKE6OP&type=1'.trim())
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('看小说2:' + body)
        }
    })

    //看小说2-1
    request({
        url: 'https://mobile01.91quzou.com/rebate/qz/task/receive.do',
        method: 'POST',
        gzip: true,
        headers: header,
        body: unescape('taskId=HAPKE6OP&type=1'.trim())
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('看小说2-1:' + body)
        }
    })

    //看小说3
    request({
        url: 'https://mobile01.91quzou.com/rebate/qz/task/receive.do',
        method: 'POST',
        gzip: true,
        headers: header,
        body: unescape('taskId=NK7CXVSB&type=1'.trim())
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('看小说3:' + body)
        }
    })

    //看广告1
    request({
        url: 'https://mobile01.91quzou.com/rebate/qz/task/receive.do',
        method: 'POST',
        gzip: true,
        headers: header,
        body: unescape('taskId=QWERQAZD'.trim())
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('看广告1:' + body)
        }
    })

    //看广告2
    request({
        url: 'https://mobile01.91quzou.com/rebate/qz/task/completeTask.do',
        method: 'POST',
        gzip: true,
        headers: header,
        body: unescape('type=1&taskId=HUYTY88R&count=1&completedMethod=1'.trim())
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('看广告2:' + body)
        }
    })

    //看广告3
    request({
        url: 'https://mobile01.91quzou.com/rebate/qz/task/receive.do',
        method: 'POST',
        gzip: true,
        headers: header,
        body: unescape('taskId=HUYTY88R&type=1'.trim())
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('看广告3:' + body)
        }
    })

    //看广告4
    request({
        url: 'https://mobile01.91quzou.com/rebate/qz/task/receive.do',
        method: 'POST',
        gzip: true,
        headers: header,
        body: unescape('taskId=TU232QYQ'.trim())
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('看广告4:' + body)
        }
    })

    //签到
    request({
        url: 'https://mobile01.91quzou.com/rebate/activity/sign/v4/signRecord.do',
        method: 'POST',
        gzip: true,
        headers: header,
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('签到:' + body)
        }
    })

    //分享1
    request({
        url: 'https://mobile01.91quzou.com/activity/shareCallback.do',
        method: 'POST',
        gzip: true,
        headers: header,
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('分享1:' + body)
        }
    })

    //分享2
    request({
        url: 'https://mobile01.91quzou.com/rebate/qz/task/receive.do',
        method: 'POST',
        gzip: true,
        headers: header,
        body: unescape('taskId=HAPKE6L4&type=1'.trim())
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('分享2:' + body)
        }
    })

    //分享3
    request({
        url: 'https://mobile01.91quzou.com/rebate/qz/task/receive.do',
        method: 'POST',
        gzip: true,
        headers: header,
        body: unescape('pageType=&taskId=HAPKE6L4&type=1'.trim())
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('分享3:' + body)
        }
    })

    //步数奖励1
    request({
        url: 'https://mobile01.91quzou.com/rebate/qz/task/receive.do',
        method: 'POST',
        gzip: true,
        headers: header,
        body: unescape('taskId=PVKW0QZ5&type=1'.trim())
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('步数奖励1:' + body)
        }
    })

    //步数奖励2
    request({
        url: 'https://mobile01.91quzou.com/rebate/qz/task/receive.do',
        method: 'POST',
        gzip: true,
        headers: header,
        body: unescape('taskId=FCLTQOVE&type=1'.trim())
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('步数奖励2:' + body)
        }
    })

    //步数奖励视频
    request({
        url: 'https://mobile01.91quzou.com/rebate/qz/task/completeTask.do',
        method: 'POST',
        gzip: true,
        headers: header,
        body: unescape('type=1&taskId=BEVV8DUH&count=1&completedMethod=1'.trim())
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('步数奖励视频:' + body)
        }
    })

    //步数奖励3
    request({
        url: 'https://mobile01.91quzou.com/rebate/qz/task/receive.do',
        method: 'POST',
        gzip: true,
        headers: header,
        body: unescape('taskId=BEVV8DUH&type=1'.trim())
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('步数奖励3:' + body)
        }
    })

    //步数奖励4
    request({
        url: 'https://mobile01.91quzou.com/rebate/qz/task/receive.do',
        method: 'POST',
        gzip: true,
        headers: header,
        body: unescape('taskId=91T7AZP6&type=1'.trim())
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('步数奖励4:' + body)
        }
    })

    //步数奖励5
    request({
        url: 'https://mobile01.91quzou.com/rebate/qz/task/receive.do',
        method: 'POST',
        gzip: true,
        headers: header,
        body: unescape('taskId=CF8M7VBH&type=1'.trim())
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('步数奖励5:' + body)
        }
    })

    //步数奖励6
    request({
        url: 'https://mobile01.91quzou.com/rebate/qz/task/receive.do',
        method: 'POST',
        gzip: true,
        headers: header,
        body: unescape('pageType=&taskId=FCLTQOVE&type=1'.trim())
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('步数奖励6:' + body)
        }
    })

    //偷步数1-1
    request({
        url: 'https://mobile01.91quzou.com/v4/huntStealWalk/huntSeeEncourageVideoCallback.do',
        method: 'POST',
        gzip: true,
        headers: header,
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('偷步数1-1:' + body)
        }
    })

    //偷步数1-2
    request({
        url: 'https://mobile01.91quzou.com/v4/huntStealWalk/huntFindStolenPerson.do',
        method: 'POST',
        gzip: true,
        headers: header,
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('偷步数1-2-1:' + body)
            var resp = JSON.parse(body)
            if (resp.code == '0' && resp.data.stolenPersonId.length > 0) {
                var numTou = randomNum(843, 1000);
                request({
                    url: 'https://mobile01.91quzou.com/v4/huntStealWalk/huntStealWalk.do',
                    method: 'POST',
                    gzip: true,
                    headers: header,
                    body: 'stealWalk='+numTou+'&stolenPersonId='+resp.data.stolenPersonId
                }, function (error, res, body) {
                    if (!error && res.statusCode == 200) {
                        //输出返回的内容
                        console.log('偷步数1-2-2:' + body)
                    }
                })
            }
        }
    })
}

this.wechatShare = function (header) {
    //小程序分享
    request({
        url: 'https://mini1.91quzou.com/rebate/qz/task/receive.do',
        method: 'POST',
        gzip: true,
        headers: header,
        body: unescape('taskId=MINI_SHARE1&type=1'.trim())
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('小程序分享:' + body)
        }
    })

    //小程序视频红包
    request({
        url: 'https://mini1.91quzou.com/activity/inviteVideo/receive.do',
        method: 'POST',
        gzip: true,
        headers: header,
        body: unescape('ic=UKXR64'.trim())
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('小程序视频红包:' + body)
        }
    })
}

//刷游戏分数
this.games = function (header) {

    var score = randomNum(10, 100);
    var time = (new Date).getTime();
    var sign = md5("score" + score + "fromnull" + "timestamp" + time, 32);

    //戳气球增加游戏次数
    request({
        url: 'https://mobile01.91quzou.com/activity/balloon/chanceCallback.do',
        method: 'POST',
        gzip: true,
        headers: header,
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('戳气球增加游戏次数:' + body)
        }
    })

    //戳气球提交游戏分数
    request({
        url: 'https://mobile01.91quzou.com/activity/balloon/scoreSubmit.do',
        method: 'POST',
        gzip: true,
        headers: header,
        body: unescape('score='+score+'&from=null&sign='+sign+'&timestamp='+time)
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('戳气球提交游戏分数:' + body)
        }
    })

}

//刷新闻
this.news = function (header) {
    request({
        url: 'https://mobile01.91quzou.com/v4/lw/queryThreshold.do',
        method: 'POST',
        gzip: true,
        headers: header,
        body: unescape('type=1'.trim())
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('刷新闻1-1:' + body)
            request({
                url: 'https://mobile01.91quzou.com/v4/lw/getReward.do',
                method: 'POST',
                gzip: true,
                headers: header,
                body: unescape('encode=e487dbaa1c8f824323c59897b8ad7a06&id=20200123112256700'+randomNum(100, 999)+'&time=1579749656212&type=1'.trim())
            }, function (error, res, body) {
                if (!error && res.statusCode == 200) {
                    //输出返回的内容
                    console.log('刷新闻1-2:' + body)
                }
            })
        }
    })
}

//刷视频
this.videos = function (header) {
    request({
        url: 'https://mobile01.91quzou.com/v4/lw/queryThreshold.do',
        method: 'POST',
        gzip: true,
        headers: header,
        body: unescape('type=2'.trim())
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('刷视频1-1:' + body)
            request({
                url: 'https://mobile01.91quzou.com/v4/lw/getReward.do',
                method: 'POST',
                gzip: true,
                headers: header,
                body: unescape('type=2&id=8bcc6a24-21a4-4a1a-8918-69ac2298d4e1&time=1569130402371&encode=157f97c88c2fc06c239cf240a740886e'.trim())
            }, function (error, res, body) {
                if (!error && res.statusCode == 200) {
                    //输出返回的内容
                    console.log('刷视频1-2:' + body)
                }
            })
        }
    })
}

var obj = [
    {"alikuaipao": {"1577154945827": "84f0bd93da81e28304f086c936ac7c5d"}},
    {"HuanLePengPengQiu": {"1577155029799": "c0d00c7ba372dd122cb39ec19f5a667d"}},
    {"chongzhuangmizhen": {"1577155132480": "9107690dc7f5917877028d447ad7e880"}},
    {"dianyinzhanche": {"1577156336991": "ef9e6b38b377d2eeb74df74049315413"}},
    {"KaiXinDiaoDiaoLe": {"1577156434322": "fb10f0327a5346808ae981eb6c33e609"}},
    {"ELuoSiFangKuai": {"1577156719457": "cadac88e42e87494bd45e5c2ee3c3c6b"}},
    {"fangunbaliubianxing": {"1577156906792": "c891fae664a3aa42f3c4deb96a1e8ff3"}},
    {"GangQinKuai2": {"1577157009923": "1fd48aba6ab2ce1507ae5f3a00f1360f"}},
    {"guanlangaoshou": {"1577157249813": "39c968707a0033b245f93a5ebe8ce0a6"}},
    {"gundongdetiankong2": {"1577157350119": "0e3e7ab1f5030c4eb65643381f973834"}},
    {"GunDongDeTianKong": {"1577157411394": "966a730523a0e640de2f118d2ec1e00b"}},
    {"guodongxiaochu": {"1577157467161": "376e11ae85ec9e5e8f95744b71960970"}},
    {"hanghai": {"1577157526549": "334c22de4cf323abb31f78001f14aa56"}},
    {"HuanLe1010": {"1577157567806": "72eac29ae893956543b444558f1bcae7"}},
    {"huanlecaizi": {"1577157605921": "f703a70f9754cfc399272b9668616fd8"}},
    {"huanlelianxian": {"1577157653173": "ff43f8ae30c5c657931cb3b46b85fff5"}},
    {"huanleqiuqiu": {"1577157696002": "bd6a50d52329992b122e60a2c1913de7"}},
    {"kaixinxiaonongchang": {"1577157736364": "17056b1d81c3380027c00cd88486d6b7"}},
    {"jiemichaoren": {"1577157956556": "c8b5ce8ab4ec23876e76956e05880e97"}},
    {"jisutanqiu": {"1577158041131": "7baef2396e274ff280b2a9f8ced47e00"}},
    {"kaixinduiduile": {"1577158102635": "cd6e9f755b8c29b12e8967b3c4ad6d85"}},
    {"kaixinduoduoshou": {"1577158142691": "86fbfb3742a951178be78cd75f96b19a"}},
    {"kaixintiaoyitiao": {"1577158183869": "8e0d5fec454167781fffd13e4d87da98"}},
    {"kuailaidangdaozhu": {"1577158183869": "8e0d5fec454167781fffd13e4d87da98"}},
    {"kuailepinpin": {"1577158262989": "953bd26db845ddf57201a6ee606ebd11"}},
    {"JINGDIANDAZHUANKUAI": {"1577158320355": "ba7f83917b0f69102b8b3aecdb561c14"}},
    {"zuiqiangdataowang": {"1577158364839": "1dd87987cee09e1bd2b991e61d3c4d6b"}},
    {"zumalaile": {"1577158402158": "96f2a99de38f3a4f9b1233c1e0c631f8"}},
    {"zuoyouhuaxiao": {"1577158445328": "b46bf540fbcec3204d86484a937c9396"}},
    {"kuailezuqiu": {"1577158492619": "4624b13575780158c9a219848c9f3f1a"}},
    {"KaiXinLiuJiaoXiaoChu": {"1577158529414": "397066fcd133c078ca2d8db1bb139b04"}},
    {"liujiaoxiaochunew": {"1577158567677": "2f1e9fd4905555a58e7d4189b2b88070"}},
    {"niangniangyangchengji": {"1577158604785": "3bf595c234d32d55314409d9c80e0206"}},
    {"kuailailianfangkuai": {"1577158643713": "22579dfd6912dc9fefadd65e62666192"}},
    {"quanmingxingzuqiu": {"1577158681296": "518cef32709f2db08d15bd27a10670c3"}},
    {"QuWeiXiaoXiaoLe": {"1577158720906": "f87b98f9b74ea5c1034eb0ef85556dfa"}},
    {"rexuelanqiu": {"1577158806645": "24bc850356fc9211bfdfaac290d6d1a9"}},
    {"ronghesekuai": {"1577158849605": "7123d1873bd1bb7d33a25f23a9ddd231"}},
    {"saoleidazuozhan": {"1577158898182": "e8a8b932065e261bc2c61c5ec564ce77"}},
    {"shuiguorenzhe": {"1577158934434": "2e6f9987cebb07fb94634bd6e0e17f94"}},
    {"tafangsanguo": {"1577158975913": "0ade1b22ff1bd7c963fb6f350c86c3aa"}},
    {"tanchilong": {"1577159015389": "edb929ac4dcca49f490914fc01c07d4b"}},
    {"tanchisheduiduipeng": {"1577159052729": "08b2c834b462f89de2bb460df37ca0cf"}},
    {"tanchushengtian": {"1577159092263": "62dbe67377fee91ff75e3f9654b4ac30"}},
    {"TiaoWuDeXian": {"1577159147240": "041cbb11cc1a5be9a52de5ea5397dab5"}},
    {"woshishenqiangshou": {"1577159192744": "659255f25e96d844bb238b11e657ec4a"}},
    {"WuJinPiaoYi": {"1577159230965": "a6418372e9f488906fb449bda41987bd"}},
    {"xiaomiexijun": {"1577159280389": "b00949db097ca52bcc283be29214a7f9"}},
    {"fengkuangxiaoxingxing": {"1577159326911": "ff1f8a491e2383eb88cd77e58b140d4b"}},
    {"xingxingxiaochuwangzhe": {"1577159374158": "fe3ad752f69dfb78f24e1996a8bfc48a"}},
    {"xuanyadataowang": {"1577159420041": "09c517a794ee2c809a3c0be6400e7dab"}},
    {"xunmiyufeixiang": {"1577159458585": "4d1379753ab3dc1fc5385d6b551729bc"}},
    {"zhezhibengyibeng": {"1577159493501": "2ab005058d944b8e7436d29f605d7d3a"}},
    {"ZhuanKuaiXiaoXiaoXiao": {"1577159534021": "f4e81a1b3ee219513a7f365b31b8b69b"}}
];

//刷游戏
this.gameAll = function (header,type) {
    var index = randomNum(0,54)
    for (var i in obj[index]) {
        for (var j in obj[index][i]) {
            request({
                url: 'https://mobile01.91quzou.com/v4/lw/getReward.do',
                method: 'POST',
                gzip: true,
                headers: header,
                body: unescape('type='+type+'&id='+i+'&time='+j+'&encode='+obj[index][i][j].trim())
            }, function (error, res, body) {
                if (!error && res.statusCode == 200) {
                    //输出返回的内容
                    console.log('刷游戏:' + body)
                }
            })
        }
    }
}

//整点领红包
this.zhengDian = function (header) {
    request({
        url: 'https://mobile01.91quzou.com/rebate/userInvitation/matchUserInviteInfo.do',
        method: 'POST',
        gzip: true,
        headers: header,
        body: unescape('screenWidth=360&screenHeight=640&devicePixelRatio=0.875&localIPv4=172.17.100.15&localIPv6=fe80::a00:27ff:fed7:5648%eth1&model=Google&brand=google&systemVersion=google Pixel 2&deviceId=00000000-0974-ac6b-0000-00004eae1b41'.trim())
    }, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            //输出返回的内容
            console.log('整点领红包-1:' + body)
            request({
                url: 'https://mobile01.91quzou.com/rebate/qz/task/completeTask.do',
                method: 'POST',
                gzip: true,
                headers: header,
                body: unescape('completedMethod=1&taskId=HUYTYIIS&type=1'.trim())
            }, function (error, res, body) {
                if (!error && res.statusCode == 200) {
                    //输出返回的内容
                    console.log('整点领红包-2:' + body)
                    request({
                        url: 'https://mobile01.91quzou.com/rebate/qz/task/receive.do',
                        method: 'POST',
                        gzip: true,
                        headers: header,
                        body: unescape('taskId=HUYTYIIS&type=1'.trim())
                }, function (error, res, body) {
                        if (!error && res.statusCode == 200) {
                            //输出返回的内容
                            console.log('整点领红包-3:' + body)
                            // this.richang();
                        }
                    })
                }
            })
        }
    })
}


}


module.exports = new QuzouTask()