document.addEventListener("DOMContentLoaded", function (event) 
{   

    var playerscore = document.getElementsByClassName("example")[0];

    
    

    document.getElementById("start").addEventListener("click", function () {
   
        StartGame();
   

    });

    //onmouseover : not working , re-check
    document.getElementById("end").addEventListener("mouseover", function () {
        ReachedEnd();

     


    });


    var boundaries = document.querySelectorAll(".boundary");
    for (var i=0 ; i <boundaries.length; i++){
        
        boundaries[i].onmouseover = Boundaries;
   

    }

    
    

});


function StartGame() {


   
    //In order to loop on all the boundary divs
    var boundaries = document.getElementsByClassName("boundary");


    for (var i = 0; i < boundaries.length; i++)

    {
        boundaries[i].style.backgroundColor = "#eeeeee";
        score();

        if (boundaries[i].style.backgroundColor != "red")

        {

            var state = document.getElementById("status").innerHTML = 'Begin by moving your mouse over the "S".';


        }


    }


}




function ReachedEnd() {



    var boundaries = document.getElementsByClassName("boundary");
    

    for (var i = 0; i < boundaries.length; i++) {

        if (boundaries[i].style.backgroundColor != "red") {

            var state = document.getElementById('status').innerHTML = " You Won ";
            score();
            
        
        }
    }
}




function Boundaries(){
    

    var boundaries = document.getElementsByClassName("boundary");

    for (var i=0; i<boundaries.length; i++){

        boundaries[i].style.backgroundColor = "red";

        if(boundaries[i].style.backgroundColor =="red")
        {

            var state = document.getElementById('status').innerHTML = "You Lost";
            
            
            
        }
    }
}


