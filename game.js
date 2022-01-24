document.addEventListener("DOMContentLoaded", function (event) {

    var score = 0;

    document.getElementById("start").addEventListener("click", function () {

        StartGame();
    });

    document.getElementById("end").addEventListener("mouseover", function () {
        ReachedEnd();

    });


    var boundaries = document.querySelectorAll(".boundary");
    for (var i = 0; i < boundaries.length; i++) {

        boundaries[i].onmouseover = Boundaries;

    }

});



//Note: Score is calculated in the div of class ="example"

function StartGame() {


    score = 0;
    document.getElementsByClassName("example")[0].innerHTML = score;

    var boundaries = document.getElementsByClassName("boundary");


    for (var i = 0; i < boundaries.length; i++)

    {
        boundaries[i].style.backgroundColor = "#eeeeee";

        if (boundaries[i].style.backgroundColor != "red")

        {

            var state = document.getElementById("status").innerHTML = 'Begin by moving your mouse over the "S".';
        }


    }

}

function ReachedEnd() {


    score += 5;
    document.getElementsByClassName("example")[0].innerHTML = score;

    for (var i = 0; i < boundaries.length; i++) {

        if (boundaries[i].style.backgroundColor != "red") {

            var state = document.getElementById('status').innerHTML = " You Won ";
            document.getElementsByClassName("example")[0].innerHTML = score + 5;

        }
    }
}

function Boundaries() {
 
    if (score != 0){
        score -= 10;
        document.getElementsByClassName("example")[0].innerHTML = score;
    }
    var boundaries = document.getElementsByClassName("boundary");

    for (var i = 0; i < boundaries.length; i++) {

        boundaries[i].style.backgroundColor = "red";

        if (boundaries[i].style.backgroundColor == "red") {

            var state = document.getElementById('status').innerHTML = "You Lost";

        }
    }
}