var canvas = new fabric.Canvas("myCanvas");

var player_x = 10;
var player_y = 10;

var block_width = 30;
var block_height = 30;

var player_object = "";
var block_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });

        canvas.add(player_object);

    });

}

function newImage(get_Image) {
    fabric.Image.fromURL(get_Image, function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });

        canvas.add(block_object);

    });
}

window.addEventListener('keydown', my_Keydown);

function my_Keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift are pressed together");
        if(block_width <= 580){
        block_width = block_width + 10;
        block_height = block_height + 10;
        
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
        }
    }

    if(e.shiftKey == true && keyPressed == '77') {
        console.log("m and shift are pressed together");
        if(block_width >= 10) {
        block_width = block_width - 10;
        block_height = block_height - 10;
        
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
        }
    }

    if(keyPressed == "37") {
        left();
        console.log("left");
    }
    if(keyPressed == "38") {
        up();
        console.log("up");
    }
    if(keyPressed == "39") {
        right();
        console.log("right");
    }
    if(keyPressed == "40") {
        down();
        console.log("down");
    }
    
    //BLOCK CHECKS
    
    if(keyPressed == "87") {
        newImage('wall.jpg');
        console.log("w");
    }

    if(keyPressed == "67") {
        newImage('cloud.jpg');
        console.log("c");
    }

    if(keyPressed == "68") {
        newImage('dark_green.png');
        console.log("d");
    }

    if(keyPressed == "71") {
        newImage('ground.png');
        console.log("g");
    }

    if(keyPressed == "76") {
        newImage('light_green.png');
        console.log("l");
    }

    if(keyPressed == "82") {
        newImage('roof.jpg');
        console.log("r");
    }

    if(keyPressed == "84") {
        newImage('trunk.jpg');
        console.log("t");
    }

    if(keyPressed == "85") {
        newImage("unique.png");
        console.log("u");
    }

    if(keyPressed == "89") {
        newImage('yellow_wall.png');
        console.log("y");
    }
}


function left() {
    if(player_x >= 0) {
        player_x = player_x - block_width;
        console.log("block width is " + block_width);
        console.log("When left arrow key is pressed X = "+ player_x + " Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function up() {
    if(player_y >= 0) {
        player_y = player_y - block_height;
        console.log("block height is " + block_height);
        console.log("When left arrow key is pressed X = "+ player_x + " Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if(player_x <= 850) {
        player_x = player_x + block_width;
        console.log("block width is " + block_width);
        console.log("When left arrow key is pressed X = "+ player_x + " Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if(player_y <= 450) {
        player_y = player_y + block_height;
        console.log("block height is " + block_height);
        console.log("When left arrow key is pressed X = "+ player_x + " Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

