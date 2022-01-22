document.addEventListener("DOMContentLoaded", function(event){

    document.getElementById("start").addEventListener("click",function(){
        StartGame();

    });


    document.getElementById("end").addEventListener('onmouseover',function(){
        EndGame();
    });


});


function StartGame()
{


    //In order to loop on all the boundary divs
    var boundaries = document.getElementsByClassName("boundary");

    for (var i = 0 ; i<boundaries.length ; i++)

    {   
        boundaries[i].style.backgroundColor ="#eeeeee";
        if (boundaries[i].style.backgroundColor !="red")

        {

            var  stat = document.getElementById("status").innerHTML  = 'Begin by moving your mouse over the "S".';
            

        }
       

    }

 

 }





    




