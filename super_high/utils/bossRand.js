//产生不重复的随机数 mynum 产生数量  mywei 生成位数 callback 回调函数
function bossRand(myStart, myEnd, myNum) {
    var arr = [];
    var str = "";

    for (var i = myStart; i <= myEnd; i++) {
        arr.push(i);
    }

    arr.sort(
        function () {
            return 0.5 - Math.random();
        }
    );

    arr.length = myNum;

    for (var j = 0; j < arr.length; j++) {
        str += arr[j] + ",";
    }
    //去掉最后一个逗号(如果不需要去掉，就不用写)
    if (str.length > 0) {
        str = str.substr(0, str.length - 1);
    }
    return str;
}

module.exports = bossRand