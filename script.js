let start = new Date().getTime();

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for(var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() *16)];
    }
    return color;
}

function move() {
   var left;
   var top;
   var wh;
   left = Math.random()*300;
   top = Math.random()*300;
   wh = ((Math.random() *400) +100);

   document.getElementById("boxes").style.left =  left + "px";
   document.getElementById("boxes").style.top =  top + "px";
   document.getElementById("boxes").style.width =  wh + "px";
   document.getElementById("boxes").style.height =  wh + "px";

   document.getElementById("boxes").style.display = "block";
   document.getElementById("boxes").style.backgroundColor = getRandomColor();
   start = new Date().getTime();
}
move();
document.getElementById("boxes").onclick = function() {
    document.getElementById("boxes").style.display = "none";
    var end = new Date().getTime();
    var timeTaken = (end-start)/1000;
   alert(timeTaken.toFixed(3) + " seconds");
    move(); 
}