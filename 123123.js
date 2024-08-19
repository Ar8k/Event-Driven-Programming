//function that gets activated when the start button is clicked
function start()
{
    //once the start button is clicked, make it disabled, and make the stop button enabled
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    //once the start button is clicked, start the interval start function
    intervalStart();
    
}
//function that gets activated when the stop button is clicked
function stop()
{
    //once the stop button is clicked, make it disabled, and make the start button enabled
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    //once the stop button is clicked, start the interval stop function
    intervalStop();
}

//function to start the interval based animation for the curtain images, basically what makes them move
function intervalStart()
{
    //linking the images below, and giving them a variable
    var image = document.getElementById("curtainImg");
    var image2 = document.getElementById("curtainImg2");
    //make the variable change mean 100, later will be used to add 100 px 
    var change = 100;
    intervalID = setInterval(function() {
        //add 5 pixels every time to the change variable
        change += 5;
        //change the position of the first image to the left, since its right and we are adding so its moving away from the right
        image.style.right = change + 'px';
        //change the position of the second image to the right, since its left and we are adding so its moving away from the left
        image2.style.left = change + 'px';
        //thats the time it should take in ms, 1000 ms is 1 second
    }, 10);
}
//function to stop the movment, should get played once the stop button is clicked
function intervalStop()
{
//clears  the  intervel set by intervalStart so it stops the movment
clearInterval(intervalID);
clearInterval
    
}