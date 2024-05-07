var msht = document.getElementById('ms') 
var scht = document.getElementById('sec') 
var mnht = document.getElementById('min') 
var startbtn = document.getElementById('startbtn')

var milisecond = 0
var second = 0
var minute = 0


var watchInterval

function Start(){
 watchInterval = setInterval(function(){
        milisecond++
        if (milisecond >=99) {
            second++
            milisecond = 0
            if (second>=59) {
                minute++
                second = 0
            }
            
        }
        msht.innerText = milisecond
        scht.innerText = second < 10 ? "0" + second : second
        mnht.innerText = minute < 10? "0" + minute:minute
        startbtn.disabled = true
        

    },10)
}
function Stop(){
    clearTimeout(watchInterval)
    startbtn.disabled = false

}
function Reset(){
    clearTimeout(watchInterval)
    milisecond = 0
    second = 0
    minute = 0
    msht.innerText = 0
    scht.innerText = 0
    mnht.innerText = 0
    startbtn.disabled = false
    
}

