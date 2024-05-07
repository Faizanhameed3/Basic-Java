


setInterval(function () {
    var date = new Date()
housr = date.getHours()
minute = date.getMinutes()
sexond = date.getSeconds()
var xdx;
xdx = housr < 12 ? "AM" + "PM":  xdx + xdx
housr = housr > 12 ? housr - 12: housr
housr = housr == 0 ? housr = 12: housr;


document.getElementById('hr').innerText = housr
document.getElementById('min').innerText = minute
document.getElementById('sec').innerText = sexond

    
},10)
