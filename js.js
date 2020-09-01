var url = "https://api.openweathermap.org/data/2.5/weather?q=Viborg&appid=365b3cd2aac9efd6efa0498429c2d453"
var promise = fetch(url)
var promise2 = promise.then(data=>data.text())
promise2.then(data=>console.log(data))