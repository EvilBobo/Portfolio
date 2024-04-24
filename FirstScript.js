//Changing Colour

function myFunction()
{
    document.body.style.backgroundColor = "green";
};


function pink(){ document.body.style.backgroundColor = "pink"; }
function sky(){ document.body.style.background = "skyblue"; }

//Rotate Image
let timer;
let turn = 0;
function turnOn() {
  timer = setInterval(turnFan, 200);
  let x = document.getElementById("on");
  x.disabled = true;
}

function turnOff() {
  clearInterval(timer);
  let x = document.getElementById("on");
  x.disabled = false;
}

function turnFan() {
  let x = document.getElementById("myFan");
  turn += 60;
  x.style.transform = "rotate("+ (turn % 360) +"deg)"
}

//animate the dice

function gifattack() {
    var gifimg = document.getElementById('gifimg');
    var rub = new SuperGif({ gif: gifimg, progressbar_height: 0, loop_mode:false } );
   
    rub.load();
   }
   
   
   gifattack();
   
//Animate a few arrows
function myMove() 
{
  var elemBluefish = document.getElementById("bluefish");
  var elemBluefishWin = document.getElementById("bluefishwin");
  var elemTurtle = document.getElementById("turtle");
  var elemTurtleWin = document.getElementById("turtlewin");
  
  var posBluefish = 0;
  var posTurtle = 0;

  var hasWinner = false;
  elemBluefishWin.style.display = 'none';
  elemTurtleWin.style.display = 'none';
  
  var id = setInterval(frame, 5);
  function frame()
  {
    if(posBluefish >= 350 && posTurtle >= 350)
    {
      clearInterval(id);
      return;
    }

    if(posBluefish < 350)
    {
      posBluefish += Math.round(Math.random()*10);
      if(posBluefish >= 350)
      {
        posBluefish = 350;
        if(!hasWinner){
          hasWinner = true;
          elemBluefishWin.style.display = 'unset';
        }
      }
      elemBluefish.style.left = posBluefish + 'px';
    }

    if(posTurtle < 350)
    {
      posTurtle += Math.round(Math.random()*10);
      if(posTurtle >= 350)
      {
        posTurtle = 350;
        if(!hasWinner){
          hasWinner = true;
          elemTurtleWin.style.display = 'unset';
        }
      }
      elemTurtle.style.left = posTurtle + 'px';
    }
  }
}