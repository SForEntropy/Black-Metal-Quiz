function result() {
    var score = 0;
    if (document.querySelector("#correct1 input").checked) {
        score++;
    }
    if (document.querySelector("#correct2 input").checked) {
        score++;
    }
    if (document.querySelector("#correct3 input").checked) {
        score++;
    }
    if (document.querySelector("#correct4 input").checked) {
        score++;
    }
    if (document.querySelector("#correct5 input").checked) {
        score++;
    }

    alert("Your score is: " + score);
}