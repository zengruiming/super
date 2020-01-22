const Qs = require('qs')
// 把查询字符串转换成json对象
function queryString2Obj (val){
    Qs.parse(unescape(val.trim()))
}

module.exports = queryString2Obj