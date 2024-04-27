/* import React from 'react';
import { createRoot } from 'react-dom/client';

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

var el = document.getElementById("container");
el.style.top = "150px";
el.style.left = "100px";

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

/* Shrink animation 

let imageResizing = false;

function zoomUnzoomImage(resizeEvent) {
    if (!resizeEvent && this.classList.contains('zoomed')) {
        this.classList.remove('zoomed');
        this.style.transform = "";
        document.querySelector('.image-backdrop').classList.remove('zoomed');
        removeZoomOutListeners();
        removeResizeListener();

    } else {
        let imageCordinates
        if (resizeEvent) {
            imageCordinates = this._originalImageCordinates;
        }
        else {
            imageCordinates = getBoundingClientRect(this);
            this._originalImageCordinates = imageCordinates;
        }

        const deviceRatio = window.innerHeight / window.innerWidth;
        const imageRatio = imageCordinates.height / imageCordinates.width;

        // Scale image according to the device and image size
        const imageScale = deviceRatio > imageRatio ?
            window.innerWidth / imageCordinates.width :
            window.innerHeight / imageCordinates.height;

        const imageX = ((imageCordinates.left + (imageCordinates.width) / 2));
        const imageY = ((imageCordinates.top + (imageCordinates.height) / 2));

        const bodyX = (window.innerWidth) / 2;
        const bodyY = (window.innerHeight) / 2;


        const xOffset = (bodyX - imageX) / (imageScale);
        const yOffset = (bodyY - imageY) / (imageScale);


        this.style.transform = "scale(" + imageScale + ") translate(" + xOffset + "px," + yOffset + "px) ";
        this.classList.add('zoomed');
        document.querySelector('.image-backdrop').classList.add('zoomed');
        registersZoomOutListeners();
        registerResizeListener();
    }
}

function registersZoomOutListeners() {
    // zoom out on scroll
    document.addEventListener('scroll', scrollZoomOut);
    // zoom out on escape
    document.addEventListener('keyup', escapeClickZoomOut);
    // zoom out on clicking the backdrop
    document.querySelector('.image-backdrop').addEventListener('click', backDropClickZoomOut);
}

function removeZoomOutListeners() {
    document.removeEventListener('scroll', scrollZoomOut);
    document.removeEventListener('keyup', escapeClickZoomOut);
    document.querySelector('.image-backdrop').removeEventListener('click', backDropClickZoomOut);
}

function registerResizeListener() {
    window.addEventListener('resize', onWindowResize)
}

function removeResizeListener() {
    window.removeEventListener('resize', onWindowResize)
}

function scrollZoomOut() {
    if (document.querySelector('.zoomable-image.zoomed') && !imageResizing) {
        zoomUnzoomImage.call(document.querySelector('.zoomable-image.zoomed'));
    }
}

function backDropClickZoomOut() {
    if (document.querySelector('.zoomable-image.zoomed')) {
        zoomUnzoomImage.call(document.querySelector('.zoomable-image.zoomed'));
    }
}

function escapeClickZoomOut(event) {
    if (event.key === "Escape" && document.querySelector('.zoomable-image.zoomed')) {
        zoomUnzoomImage.call(document.querySelector('.zoomable-image.zoomed'));
    }
}

function onWindowResize() {
    imageResizing = true;
    if (document.querySelector('.zoomable-image.zoomed')) {
        debounce(
            function () {
                zoomUnzoomImage.call(document.querySelector('.zoomable-image.zoomed'), true)
                imageResizing = false;
            }, 100)()
    }
}

function getBoundingClientRect(element) {
    var rect = element.getBoundingClientRect();
    return {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        x: rect.x,
        y: rect.y
    };
}
function debounce(func, delay) {
    let debounceTimer
    return function () {
        const context = this
        const args = arguments
        clearTimeout(debounceTimer)
        debounceTimer
            = setTimeout(() => func.apply(context, args), delay)
    }
}

document.addEventListener('click', function (event) {
    if (event && event.target && event.target.className.includes('zoomable-image')) {
        zoomUnzoomImage.call(event.target)
    }
});
*/
//Dice Roll.

$("body").on("click", ".dice", function() {
  var roll = Math.floor(Math.random() * 6 + 1);
  $(this).attr("class", "dice");
  setTimeout(function() {
    $(".dice").addClass("roll-" + roll);
  }, 1);
});
