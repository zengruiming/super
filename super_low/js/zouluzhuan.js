var headerAndImei = require('../../super_high/domain/zouluzhuan/headerAndImei.js')

//首页金币
function zHome(zCoin) {
    $.ajax({
        type: "post",
        headers: headerAndImei.myIosHeader[0],
        url: "https://api.xiaomuyu888.com/api/member/randCoin",
        data: {"coin":zCoin,"device":"ios","double":"1","imei":headerAndImei.myIosImei[0],"source":"ios","version":"1.2.5"}
    })
    $.ajax({
        type: "post",
        headers: headerAndImei.myIosHeader[1],
        url: "https://api.xiaomuyu888.com/api/member/randCoin",
        data: {"coin":zCoin,"device":"ios","double":"1","imei":headerAndImei.myIosImei[1],"source":"ios","version":"1.2.5"}
    })
}