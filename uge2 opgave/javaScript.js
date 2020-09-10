function show(showID) {
    var front = document.getElementById("toFrontPage")
    var tip = document.getElementById("tipPage")
    var valuta = document.getElementById("valutaPage")
    var arrayOfButtons = [front, tip, valuta]
    arrayOfButtons.forEach(element => {
        element.style.display = 'none'
    });
    if(showID == "front") {
        front.style.display = 'block'
    }
    else if(showID == "tip") {
        tip.style.display = 'block'
    }
    else if(showID == "valuta") {
        valuta.style.display = 'block'
    }
}
function calculateTip() {
    var x = document.getElementById("dataForTip").value;
    var sum = Math.round(x * 0.2)
    document.getElementById("sumForTip").innerHTML = "Drikke penge beløb: " + sum
}