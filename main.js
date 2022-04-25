var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
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

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed= e.keyCode;
    console.log(keypressed);
    if (e.shiftKey==true&&keypressed==80){
        console.log("Shift and p key is pressed together");
        block_image_width= block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("width").innerHTML=block_image_width;
        document.getElementById("height").innerHTML=block_image_height;
    }

    if (e.shiftKey==true && keypressed==77){
        console.log("Shift and m key is pressed together");
        block_image_width= block_image_width- 10;
        block_image_height= block_image_height - 10;
        document.getElementById("width").innerHTML= block_image_width;
        document.getElementById("height").innerHTML = block_image_height;
    }

    if (keypressed==67){
        new_image("cloud.jpg");
        console.log("C is pressed");
    }

    if(keypressed==68){
        new_image("dark_green.png");
        console.log("D is pressed");

    }

    if (keypressed==71){
        new_image("ground.png");
        console.log("G is pressed");
    }

    if(keypressed==76){
        new_image("light_green.png");
        console.log("L is pressed");
    }

    if (keypressed==82){
        new_image("roof.jpg");
        console.log("R is pressed");
    }

    if (keypressed==84){
        new_image("trunk.jpg");
        console.log("T is pressed");
    }

    if (keypressed==85){
        new_image("unique.png");
        console.log("U is pressed");
    }

    if (keypressed==87){
        new_image("wall.jpg");
        console.log("W is pressed");
    }

    if (keypressed==89){
        new_image("yellow_wall.png");
        console.log("Y is pressed");

    }

    if (keypressed==38){
        up();
        console.log("Up key is pressed");
    }

    if (keypressed==40){
        down();
        console.log("Down key is pressed");
    }

    if (keypressed==37){
        left();
        console.log("Left key is pressed");
    }

    if (keypressed==39){
        right();
        console.log("Right key is pressed");
    }
}

function up(){
    if (player_y>=0){
        player_y=player_y-block_image_height;
        console.log("Block image height = "+ block_image_height);
        console.log("When up key is pressed X = "+ player_x+"Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if (player_y<=500){
        player_y=player_y + block_image_height;
        console.log("Block image height =" + block_image_height);
        console.log("When down key is pressed X = "+ player_x + "Y = "+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x>=0){
        player_x= player_x - block_image_width;
        console.log("Block image width = " + block_image_width);
        console.log("When left key is pressed X = " + player_x + "Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if (player_x<=900){
        player_x=player_x + block_image_width;
        console.log("Block image width = "+ block_image_width);
        console.log("When right key is pressed X = "+ player_x+ "Y = "+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}