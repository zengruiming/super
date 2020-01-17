var request = require('request')
var url = 'https://used-api.paipai.com/auctionRecord/getCurrentAndOfferNum?auctionId=200615096'

request(url,function(error,response,body){
    if(!error && response.statusCode == 200){
        //输出返回的内容
        console.log(JSON.parse(body).data.currentPrice);
    }
});