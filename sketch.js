var dolphin , dolphinimg
var oceanimg 
var welcomepage
var startgame
var crydolphin , crydolphinimg
var happydolphin , happydolphinimg
var hunter1 , hunter2 , hunter3 , hunterimg
var man , manimg , manimgright
var bulletGroup1 , bulletGroup2  , bulletGroup3 , bulletimg
var score= 0
gamestate = 0
var life = 5
function preload()
{
	manimg=loadImage("superhero.png")
	manimgright=loadImage("superheroright.png")
	oceanimg=loadImage("ocean.jpg")
	dolphinimg=loadImage("dolphin 2.png")
	happydolphinimg=loadImage("happydolphin.png")
	crydolphinimg=loadImage("saddolphin.png")
	hunterimg=loadImage("hunter.png")
	bulletimg=loadImage("bullet1.png")
}

function setup() {
	createCanvas(displayWidth - 200 , displayHeight - 200);

	bulletGroup1=new Group()
	bulletGroup2=new Group()
	bulletGroup3=new Group()
	
	man=createSprite(width/2,height/2+150,50,50);
	man.addImage(manimg)
	
	dolphin=createSprite(width/2,height/2+210,10,10);
	dolphin.addImage(dolphinimg)

	welcomepage=new welcome();

	startgame=new start();

	happydolphin=createSprite(displayWidth-500,displayHeight-500,50,50)
	happydolphin.addImage(happydolphinimg)
	happydolphin.visible=false

	crydolphin=createSprite(displayWidth-500,displayHeight-500,50,50)
	crydolphin.addImage(crydolphinimg)
	crydolphin.visible=false

	hunter1=createSprite(10,10,10,10);
	hunter1.addImage(hunterimg)
	hunter2=createSprite(displayWidth-10,10,10,10);
	hunter2.addImage(hunterimg)
	hunter3=createSprite(width/2,10,10,10);
	hunter3.addImage(hunterimg)

	dolphin.visible=false
	man.visible=false
	hunter1.visible=false
	hunter2.visible=false
	hunter3.visible=false
}


function draw() {
if (gamestate === 0){
	welcomepage.display();

}

else if (gamestate===1) {
    startgame.strt();
}

else if (gamestate === 2){
    end();
}

else if (gamestate === 3){
	win();
}

if (life === 0){
	gamestate === 2
}

if (score === 200){
    gamestate === 3
}	

drawSprites();

text("score ="+score,displayWidth - 300 , displayHeight - 300);
}

function keyPressed() {
 if(keyCode  === 37) {
	man.addImage(manimg)
	man.scale=0.3
    man.velocityX=man.velocityX-2;
  }
  if(keyCode === 39){
	  man.addImage(manimgright)
	  man.scale=0.7
	  man.velocityX=man.velocityX+2
  }

}

	function end(){
		textSize(60);
		fill("red");
        text("GameOver",displayWidth/4,displayHeight/2);
		}

	function win(){
			textSize(60);
			fill("red");
			text("YouWin",displayWidth/4,displayHeight/2);
			}