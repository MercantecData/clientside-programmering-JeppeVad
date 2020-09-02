var url = "https://api.openweathermap.org/data/2.5/weather?q=Viborg&appid=365b3cd2aac9efd6efa0498429c2d453&units=metric"
var promise = fetch(url)
var promise2 = promise.then(data=>data.json())

function getWeather() {
    var x = document.getElementById("dataForCity").value;
    try {
    //document.getElementById("demo").innerHTML = x;
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + x + "&appid=365b3cd2aac9efd6efa0498429c2d453&units=metric"
    document.getElementById("demo1").innerHTML = "City or country doesn't exist"
    var promise = fetch(url)
    var promise2 = promise.then(data=>data.json())
    document.getElementById("demo").innerHTML = "Weather right now"
    }
    catch(error) {
        document.getElementById("demo").innerHTML = "City or country doesn't exist"
    }
    promise2.then(data=>document.getElementById("demo1").innerHTML = "Weather description: " + data.weather[0].description)
    promise2.then(data=>document.getElementById("demo2").innerHTML = "The temprature is: " + data.main.temp + " degrees")
    // JQ code for at køre det samme som i den over her.                                                                           
    //$("demo2").text("temp er  ${data.main.temp}");
    promise2.then(data=>document.getElementById("demo3").innerHTML = `Longitude: ${data.coord.lon}`)
    promise2.then(data=>document.getElementById("demo4").innerHTML = `Latitude: ${data.coord.lat}`)
}
function showLocation() {
    var urlForMaps = "https://www.google.dk/maps/@" + data.coord.lat + "56.16,"+ data.coord.lon +"10.21,13z"
    window.location = urlForMaps
    window.open(urlForMaps)
}


/* 
<button id="myButton" class="float-left submit-button" >Home</button>

<script type="text/javascript">
    document.getElementById("myButton").onclick = function () {
        location.href = "www.yoursite.com";
    };
</script>
 */