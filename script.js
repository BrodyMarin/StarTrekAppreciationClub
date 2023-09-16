function viewscore() {
    var name = document.getElementById("name").value;
    var q1 = "0";
    if(document.querySelector('input[name="q1"]:checked')) {
        q1 = document.querySelector('input[name="q1"]:checked').value;
    }
    var q2 = "0";
    if(document.querySelector('input[name="q2"]:checked')) {
        q2 = document.querySelector('input[name="q2"]:checked').value;
    }
    var q3 = [];
    for (var i = 0; i < document.querySelectorAll('input[name="q3"]').length; i++) {
        if(document.querySelectorAll('input[name="q3"]')[i].checked === true) {
            q3.push(true);
        }
        else {
            q3.push(false);
        }
    }
    var q4 = [];
    for (var i = 0; i < document.querySelectorAll('input[name="q4"]').length; i++) {
        if(document.querySelectorAll('input[name="q4"]')[i].checked === true) {
            q4.push(true);
        }
        else {
            q4.push(false);
        }
    }
    var q5 = document.getElementById("q5").value;
    var q6 = document.getElementById("q6").value;
    var correct = 0;
    if(q1 === "2") {
        correct += 1;
    }
    if(q2 === "4") {
        correct += 1;
    }
    if(q3[0] === false && q3[1] === true && q3[2] === true && q3[3] === false) {
        correct += 1;
    }
    if(q4[0] === true && q4[1] === false && q4[2] === true && q4[3] === true) {
        correct += 1;
    }
    if(q5 === "1966-09-08") {
        correct += 1;
    }
    if(q6 === "2364") {
        correct += 1;
    }
    var startmsg = "";
    if(name) {
        startmsg = "Well done, " + name + ". "
    }
    window.alert(startmsg + "Your score is " + correct + "/6 (" + (correct * 100 / 6).toFixed(2) + "%).");
}
function submitemail() {
    window.alert("You will now receive updates via email. (Note: you won't actually receive updates as this feature is unimplemented.)")
}
if(document.getElementById("viewscore")) {
    document.getElementById("viewscore").onclick = function(){viewscore();};
}
if(document.getElementById("submitemail")) {
    document.getElementById("submitemail").onclick = function(){submitemail();};
}