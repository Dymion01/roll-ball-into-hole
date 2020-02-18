var ball   = document.querySelector('.ball');
var playGround = document.querySelector('.playGround');
var holee;

var maxX = playGround.clientWidth  - ball.clientWidth;
var maxY = playGround.clientHeight - ball.clientHeight;
var ballX = 0;
var ballY = 0;
var holeX = 100;
var holeY =100;
var data1;

function handleOrientation(event) {
  var x = event.beta;
  var y = event.gamma; 


  if (x >  90) { x =  90};
  if (x < -90) { x = -90};

  x += 90;
  y += 90;

  
  ball.style.top  = (maxY*y/180 - 10) + "px";
  ball.style.left = (maxX*x/180 - 10) + "px";
  ballX = (maxX*x/180 - 10);
  ballY =(maxY*y/180 - 10);
  console.log(ballY,ballX);
  
  if(ballX >= holeX && ballX <= holeX +20 && ballY >= holeY && ballY <= holeY + 20 ){
    won = true;
    console.log(won);
    var data2 = Date.now();
    document.getElementById("para").innerHTML = "Twój czas to: " +  (data2-data1)/1000 + " sekund";
  }
}
// if(ballX >= xx && ballX <= xx + 20 && ballY >= yy && ballY <= yy + 20)
 
function placeHole(){
  holee = document.createElement('div');
  holee.classList.add('hole');
  holee.id = "Hole" ;
   holeX = Math.random() * (playGround.clientWidth - 10)
   holeY = Math.random() * (playGround.clientHeight - 10)
  holee.style.transform =  "translateX(" + holeX  + "px) translateY(" + holeY + "px)";
  playGround.appendChild(holee);
  console.log(holeX, holeY);
  data1 = Date.now();
}
var won = false

startbutton= document.querySelector('.startBtn');
startbutton.addEventListener('click', placeHole);

window.addEventListener('deviceorientation', handleOrientation);