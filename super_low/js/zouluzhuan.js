var headerAndImei = require('super_high/domain/headerAndImei.js')

//首页金币
function zHome(zCoin) {
    $.ajax({
        type: "post",
        headers: headerAndImei.myHeader1,
        url: "https://api.xiaomuyu888.com/api/member/randCoin",
        data: {"coin":zCoin,"device":"ios","double":"1","imei":headerAndImei.myImei1,"source":"ios","version":"1.2.5"}
    })
    $.ajax({
        type: "post",
        headers: headerAndImei.myHeader2,
        url: "https://api.xiaomuyu888.com/api/member/randCoin",
        data: {"coin":zCoin,"device":"ios","double":"1","imei":headerAndImei.myImei2,"source":"ios","version":"1.2.5"}
    })
}