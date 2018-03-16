var timeCount = 100;
var countRight = 0;
var countWrong = 0;

$(document).ready(function()    {
    $("#game-div").hide();
    $("#done-div").hide();

    $("#start-button").on("click", function()   {
        $("#start-div").hide();
        $("#game-div").show();
        startTimer();
        return;
    });

    function countDown()    {
        timeCount--;
        $("#timer").html(timeCount);
        $("#finish-button").on("click", function()  {
            timeCount = 0;
            return;
        });

        if(timeCount == -1) {
            timesUp();
            $("#game-div").hide();
        }
    }

    function startTimer()   {
        setInterval(countDown, 1000);
    }

    function timesUp()  {
        var answer1 = $('input:radio[name="question1"]:checked').val();
        var answer2 = $('input:radio[name="question2"]:checked').val();
        var answer3 = $('input:radio[name="question3"]:checked').val();
        var answer4 = $('input:radio[name="question4"]:checked').val();
        var answer5 = $('input:radio[name="question5"]:checked').val();
        var answer6 = $('input:radio[name="question6"]:checked').val();
        var answer7 = $('input:radio[name="question7"]:checked').val();
        var answer8 = $('input:radio[name="question8"]:checked').val();

        if(answer1 == "Sunset Arms")    {
            countRight++;
        }
        else{
            countWrong++;
        }

        if(answer2 == "Olga")   {
            countRight++;
        }
        else{
            countWrong++;
        }

        if(answer3 == "San Lorenzo")    {
            countRight++;
        }
        else{
            countWrong++;
        }

        if(answer4 == "Principal Wartz")    {
            countRight++;
        }
        else{
            countWrong++;
        }

        if(answer5 == "PS 118") {
            countRight++;
        }
        else{
            countWrong++;
        }

        if(answer6 == "Eugene") {
            countRight++;
        }
        else{
            countWrong++;
        }

        if(answer7 == "Fuzzy Slippers") {
            countRight++;
        }
        else{
            countWrong++;
        }

        if(answer8 == "love Arnold")    {
            countRight++;
        }
        else{
            countWrong++;
        }

        $("#right-answers").html(countRight);
        $("#wrong-answers").html(countWrong);
        $("#done-div").show();
    }
});