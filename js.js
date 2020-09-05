//var url = "https://api.openweathermap.org/data/2.5/weather?q=Viborg&appid=365b3cd2aac9efd6efa0498429c2d453&units=metric"
var url = "http://api.openweathermap.org/data/2.5/forecast?q=viborg&appid=365b3cd2aac9efd6efa0498429c2d453&units=metric"
var promise = fetch(url)
var promise2 = promise.then(data=>data.json())

function getWeather() {
    var x = document.getElementById("dataForCity").value;
    try {
    var url = "http://api.openweathermap.org/data/2.5/forecast?q=" + x + "&appid=365b3cd2aac9efd6efa0498429c2d453&units=metric"
    document.getElementById("demo1").innerHTML = "City or country doesn't exist"
    document.getElementById("Somespace").innerHTML = "--------------------"
    var promise = fetch(url)
    var promise2 = promise.then(data=>data.json())
    document.getElementById("demo").innerHTML = "Weather right now"
    }
    catch(error) {
        document.getElementById("demo").innerHTML = "City or country doesn't exist"
    }
    showData("demo1","demo2","demo3","demo4","three1","three2","three3","three4","three")
    
}
function getNewWeather() {
    var x = document.getElementById("dataForNewCity").value;
    try {
    var url = "http://api.openweathermap.org/data/2.5/forecast?q=" + x + "&appid=365b3cd2aac9efd6efa0498429c2d453&units=metric"
    document.getElementById("newNow1").innerHTML = "City or country doesn't exist"
    document.getElementById("SomeNewspace").innerHTML = "--------------------"
    var promise = fetch(url)
    var promise2 = promise.then(data=>data.json())
    document.getElementById("newNow").innerHTML = "Weather right now"
    }
    catch(error) {
        document.getElementById("newNow").innerHTML = "City or country doesn't exist"
    }
    showData("newNow1","newNow2","newNow3","newNow4","newThree1","newThree2","newThree3","newThree4","newThree")
    
}

function showData(des="",temp="", windSpeed="", windDir="", des3="", temp3="", windSpeed3="", windDir3="",test="") {
    promise2.then(data=>document.getElementById(des).innerHTML = "Weather description: " + data.list[0].weather[0].description)
    promise2.then(data=>document.getElementById(temp).innerHTML = "The temprature is: " + data.list[0].main.temp + " degrees")
    promise2.then(data=>document.getElementById(windSpeed).innerHTML = `Wind speed: ${data.list[0].wind.speed}`)
    promise2.then(data=>document.getElementById(windDir).innerHTML = `Wind direction: ${data.list[0].wind.deg} degrees`)
    document.getElementById(test).innerHTML = "Weather in 3 hours"
    promise2.then(data=>document.getElementById(des3).innerHTML = "Weather description: " + data.list[1].weather[0].description)
    promise2.then(data=>document.getElementById(temp3).innerHTML = "The temprature is: " + data.list[1].main.temp + " degrees")
    promise2.then(data=>document.getElementById(windSpeed3).innerHTML = `Wind speed: ${data.list[1].wind.speed}`)
    promise2.then(data=>document.getElementById(windDir3).innerHTML = `Wind direction: ${data.list[1].wind.deg} degrees`)
    
}
    