var ball = document.getElementById('ball');
var reverse = false;
var reverse2 = false;
var reverse3 = false;
var velocity = 5;
var velocity2 = 10;
var velocity3 = 1;
var positionX = 30;
var positionY = 50;
var positionZ = 0;

function moveBall() {

  var Xmin = 0;
  var Xmax = 300;
  var Ymin = 0;
  var Ymax = 300;
  var Zmin = 20;
  var Zmax = 150;

  if(reverse==false && positionX < Xmax){
    positionX = positionX + velocity;
  }
  else if(positionX >= Xmax){
    reverse = true;
    ball.style.background = "purple";
  }

  if(reverse==true && positionX > Xmin){
    positionX = positionX -velocity;
  }
  else if(positionX <= Xmin){
    reverse = false;
    ball.style.background = "maroon";
  }

  if(reverse2==false && positionY < Ymax){
    positionY = positionY + velocity2;
  }
  else if(positionY >= Ymax){
    reverse2 = true;
    ball.style.background = "teal";
  }

  if(reverse2==true && positionY > Ymin){
    positionY = positionY -velocity2;
  }
  else if(positionY <= Ymin){
    reverse2 = false;
    ball.style.background = "olive";
  }

  if(reverse3==false && positionZ < Zmax){
    positionZ = positionZ + velocity3;
  }
  else if(positionZ >= Zmax){
    reverse3 = true;
  }
    
  if(reverse3==true && positionZ > Zmin){
    positionZ = positionZ -velocity3;
  }
  else if(positionZ <= Zmin){
    reverse3 = false;
  }

  ball.style.left=(positionX)+'px';
  ball.style.top=(positionY)+'px';
  ball.style.width=(positionZ)+'px';
  ball.style.height=(positionZ)+'px';
  console.log(positionX);
  console.log(reverse);

}

function moveBall2(){
  var velocity = 10+Math.random()*5;
  var velocity2 = 20+Math.random()*5;
}

setInterval(moveBall, 60);
setInterval(moveBall2, 1000);
