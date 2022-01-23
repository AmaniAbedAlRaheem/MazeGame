document.addEventListener("DOMContentLoaded", function (event) 
{   


  

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


    document.getElementsByClassName("example")[0].innerHTML =0;
    //In order to loop on all the boundary divs
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

    var score = 0;
 
    var boundaries = document.getElementsByClassName("boundary");
  


    for (var i = 0; i < boundaries.length; i++) {



        if (boundaries[i].style.backgroundColor != "red") {

            var state = document.getElementById('status').innerHTML = " You Won ";
            document.getElementsByClassName("example")[0].innerHTML =  score +5;
            
            
        
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

