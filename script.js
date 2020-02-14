var ball   = document.querySelector('.ball');
var playGround = document.querySelector('.playGround');
var holee;

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
  holee = document.createElement('div');
  holee.classList.add('hole');
  holee.id = "Hole" ;
  holee.style.transform =  "translateX(" +Math.random() *( playGround.clientWidth-10)   + "px) translateY(" + Math.random() * (playGround.clientHeight- 10) + "px)";
  playGround.appendChild(holee);
    // var CoordX = (Math.floor(Math.random() * playGround.clientWidth) + 1);
    
    // var CoordY = (Math.floor(Math.random() * playGround.clientWidth ) + 1);
    // console.log(CoordX , CoordY);
    // // playGround.getElementById("Hole").style.left = CoordX;
    // // playGround.getElementById("Hole").style.top = CoordY;
    // // document.querySelector('.playGround').getElementsByClassName('.hole').style.left = CoordX
    // // document.querySelector('.playGround').getElementsByClassName("hole").style.top = CoordY
    // document.getElementById("Hole").style.left = CoordX;
    // document.getElementById("Hole").style.top = CoordY;
    
// return CoordX, CoordY;

}
startbutton= document.querySelector('.startBtn');
startbutton.addEventListener('click', placeHole);


window.addEventListener('deviceorientation', handleOrientation);