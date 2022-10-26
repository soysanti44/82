var mouseevent ="empty"
 canvas =document.getElementById("myCanvas")
 ctx =canvas.getContext("2d");
 color ="black";
 grosor =2;
canvas.addEventListener("mousedown",eventomousedown);

function eventomousedown(e) {
    color =document.getElementById("color").value;
     grosor =document.getElementById("grosor").value;
     radios =document.getElementById("radius").value;
     mouseevent ="mouseDown";
    
}

canvas.addEventListener("mousemove",eventomove)

  function eventomove(e) {
    actualX =e.clientX - canvas.offsetLeft;
    actualY =e.clientY - canvas.offsetTop;
    if(mouseevent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle =color;
        ctx.lineWidth =grosor;
        ctx.arc(actualX,actualY,radios,0,2*Math.PI);
        ctx.stroke();

    }
  }

  canvas.addEventListener("mouseup",eventoup);

  function eventoup(e) {
    mouseevent ="mouseUp"
  }

  canvas.addEventListener("mouseleave",eventoleave);

  function eventoleave(e) {
    mouseevent ="mouseleave"
  }

  function limpiar() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)

  }