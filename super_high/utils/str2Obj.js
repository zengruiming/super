// 把请求字符串转换成json对象
function str2Obj(val) {
    var myHeaders = {};
    var v2 = val.trim().split(/\n/)
    for (i = 0, len = v2.length; i < len; i++) {
        var v3 = v2[i].trim().split(/:\s/)
        var v3Value = v3[1]
        var v3Key = v3[0]
        myHeaders[v3Key] = v3Value
    }
    return myHeaders
    // console.log(myHeaders)
}

module.exports =  str2Obj