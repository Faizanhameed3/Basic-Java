var Minute = 0;
var Second = 0;
var Milisecond = 0;

var minuteHTML = document.getElementById('Min')
var secondHTML = document.getElementById('Sec')
var milisecondHTML = document.getElementById('Msec')
Startbtn = document.getElementById('Startbtn')

var StopWatch

function Start() {
    StopWatch = setInterval(function () {
        Milisecond++
        if (Milisecond >=99) {
            Second++
            Milisecond = 0;
        
        if (Second >=59) {
            Minute++
            Second = 0;
        }
           
        }

  milisecondHTML.innerText = Milisecond
  secondHTML.innerText = Second < 10? "0" + Second: Second
  minuteHTML.innerText = Minute < 10? "0" + Minute: Minute
  Startbtn.disabled = true


    },10)
    
}

function Stop() {
    clearTimeout(StopWatch)
    Startbtn.disabled = false

}

function Reset() {
    clearTimeout(StopWatch)
    milisecondHTML.innerText = 0;
secondHTML.innerText = 0;
minuteHTML.innerText = 0;
Milisecond = 0;
Second = 0;
Minute = 0;
Startbtn.disabled = false

}
