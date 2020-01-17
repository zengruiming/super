//安装:npm i request

//get请求
request(url,function(error,response,body){
  if(!error && response.statusCode == 200){
      //输出返回的内容
      console.log(body);
  }
});

//post请求
var options = { 
  uri: 'https://www.googleapis.com/urlshortener/v1/url', 
  method: 'POST', 
  json: { "longUrl": "http://www.google.com/" }
};

request({
    url: 'http://xxx.xxx.com',
    method: 'POST',
    body: formData
}, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        //输出返回的内容
        console.log(body);
    }
});