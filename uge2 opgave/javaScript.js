function showValuta() {
    var x = document.getElementById("valutaPage")
    var y = document.getElementById("tipPage")
    var z = document.getElementById("toFrontPage")
    z.style.display = 'none'
    y.style.display = 'none'
    if(x.style.display === 'none') {
        x.style.display ='block'
    }
    else {
        x.style.display = 'none'
    }
}
function showTip() {
    var x = document.getElementById("tipPage")
    var y = document.getElementById("valutaPage")
    var z = document.getElementById("toFrontPage")
    z.style.display = 'none'
    y.style.display = 'none'
    if(x.style.display === 'none') {
        x.style.display ='block'
    }
    else {
        x.style.display = 'none'
    }
}
function showMain() {
    var x = document.getElementById("toFrontPage")
    var y = document.getElementById("valutaPage")
    var z = document.getElementById("tipPage")
    z.style.display = 'none'
    y.style.display = 'none'
    if(x.style.display === 'none') {
        x.style.display ='block'
    }
    else {
        x.style.display = 'none'
    }
}