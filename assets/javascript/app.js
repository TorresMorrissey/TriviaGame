
if (result == 0) {result2 = "I don't think you tried."};
if (result == 25) {result2 = "You need to spend more time. Try again."};
if (result == 50) {result2 = "I think you could do better. Try again."};
if (result == 75) {result2 = "So close. Try again."};
if (result == 100) {result2 = "Excellent! You're a riddle pro!"};

var timeLeft = 20;
var increment;
function runTimer() {
    increment = setInterval(decrement, 1000);
};
function decrement() {
    timer--;
    $("#timer").html("Time remaining: " + timer + " seconds");
    if (timer === 0) {
        stopTimer();
        userAnswers.length = 0;
        // record user answer to question
        var userSelection = $("#responses input:radio[name=options]:checked").val();
        userAnswers.push(userSelection);
        console.log(userAnswers);
        nextQ();
    };
};

// Need to find a timer that apears on the screen 

// Need to find a js way to create quiz, BUT HEY IT WORKS 