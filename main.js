var canvas = new fabric.Canvas('myCanvas');

playerX= 10;
playerY=10;

blockImageWidth=30;
blockImageHeight=30;

playerObject="";
blockImageObject="";

function playerUpdate(){
    fabric.Image.fromURL("player.png", function(Img) {
        playerObject=Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(playerObject);
    });
}
function newImage(getImage){
    fabric.Image.fromURL(getImage, function(Img) {
        blockImageObject=Img;
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(blockImageObject);
    });
}
window.addEventListener("keydown",myKeyDown);

function myKeyDown(e){
    keyPressed = e.keyCode;
    if(e.shiftKey==true && keyPressed == "80"){
        blockImageWidth=blockImageWidth+10;
        blockImageHeight=blockImageHeight+10;
        document.getElementById("current_width").innerHTML=blockImageWidth;
        document.getElementById("current_height").innerHTML=blockImageHeight;
    }
    if(e.shiftKey==true && keyPressed == "77"){
        blockImageWidth=blockImageWidth-10;
        blockImageHeight=blockImageHeight-10;
        document.getElementById("current_width").innerHTML=blockImageWidth;
        document.getElementById("current_height").innerHTML=blockImageHeight;
    }  
    if(keyPressed == "38"){
        up();
        console.log("up arrow is pressed");
    }
    if(keyPressed == "40"){
        down();
        console.log("down arrow is pressed");
    }
    if(keyPressed == "37"){
        left();
        console.log("left arrow is pressed");
    }
    if(keyPressed == "39"){
        right();
        console.log("right arrow is pressed");
    }
    if(keyPressed == "87"){
        newImage("wall.jpg");
        console.log("W key is pressed");
    }
    if(keyPressed == "71"){
        newImage("ground.png");
        console.log("G key is pressed");
    }
    if(keyPressed == "76"){
        newImage("light_green.png");
        console.log("L key is pressed");
    }
    if(keyPressed == "84"){
        newImage("trunk.jpg");
        console.log("T key is pressed");
    }
    if(keyPressed == "82"){
        newImage("roof.jpg");
        console.log("R key is pressed");
    }
    if(keyPressed == "89"){
        newImage("yellow_wall.png");
        console.log("Y key is pressed");
    }
    if(keyPressed == "68"){
        newImage("dark_green.png");
        console.log("D key is pressed");
    }
    if(keyPressed == "85"){
        newImage("unique.png");
        console.log("U key is pressed");
    }
    if(keyPressed == "67"){
        newImage("cloud.jpg");
        console.log("C key is pressed");
    }
}