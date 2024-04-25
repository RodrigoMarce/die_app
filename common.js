var hit = 2;
var sink = 3;
var fgoal = 2;
var add = 0;

function incrementCounter1(btn) {
    var counterElement = document.getElementById("counter1");
    var fifaCounter = document.getElementById("fifaCounter1");
    var currentCount = parseInt(counterElement.innerText);
    if (btn.className == "one") {
        add = 1;
    }
    else if (btn.className == "hit" || btn.className == "fgoal") {
        add = 2;
    }
    else if (btn.className == "sink") {
        add = 3;
    }
    else if (btn.id == "fifaButton1") {
        add = 1;
        fifaCounter.innerText = parseInt(fifaCounter.innerText) + 1;
    }
    counterElement.innerText = currentCount + add;
}

function incrementCounter2(btn) {
    var counterElement = document.getElementById("counter2");
    var fifaCounter = document.getElementById("fifaCounter2");
    var currentCount = parseInt(counterElement.innerText);
    if (btn.className == "one") {
        add = 1;
    }
    else if (btn.className == "hit" || btn.className == "fgoal") {
        add = 2;
    }
    else if (btn.className == "sink") {
        add = 3;
    }
    else if (btn.id == "fifaButton2") {
        add = 1;
        fifaCounter.innerText = parseInt(fifaCounter.innerText) + 1;
    }
    counterElement.innerText = currentCount + add;
}

function undo1() {
    var counterElement = document.getElementById("counter1");
    var currentCount = parseInt(counterElement.innerText);
    counterElement.innerText = currentCount - add;
}

function undo2() {
    var counterElement = document.getElementById("counter2");
    var currentCount = parseInt(counterElement.innerText);
    counterElement.innerText = currentCount - add;
}