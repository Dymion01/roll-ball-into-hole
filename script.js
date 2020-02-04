var ball   = document.querySelector('.ball');
var playGround = document.querySelector('.playGround');


var maxX = playGround.clientWidth  - ball.clientWidth;
var maxY = playGround.clientHeight - ball.clientHeight;

function handleOrientation(event) {
  var x = event.beta;
  var y = event.gamma; 


  if (x >  90) { x =  90};
  if (x < -90) { x = -90};

  x += 90;
  y += 90;

  
  ball.style.top  = (maxY*y/180 - 10) + "px";
  ball.style.left = (maxX*x/180 - 10) + "px";
}

function placeHole(){
 
    var CoordX = (Math.floor(Math.random() * playGround.clientWidth) + 1);
    
    var CoordY = (Math.floor(Math.random() * playGround.clientWidth ) + 1);
    console.log(CoordX , CoordY);
    playGround.querySelector('.hole').style.left = CoordX;
    playGround.querySelector('.hole').style.top = CoordY;
return CoordX, CoordY;
}
startbutton= document.querySelector('.startBtn');
startbutton.addEventListener('click', placeHole);


window.addEventListener('deviceorientation', handleOrientation);