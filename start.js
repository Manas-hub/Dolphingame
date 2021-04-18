class start{
    constructor(){
    }
    strt(){
    background(oceanimg)

	dolphin.visible=true
	man.visible=true
	hunter1.visible=true
	hunter2.visible=true
	hunter3.visible=true
	start.visible=false
	console.log(gamestate)

  if(bulletGroup1.isTouching(man))
  {
	  score = score+1;
  }
  if(bulletGroup2.isTouching(man))
  {
	  score = score+1;
  }
  if(bulletGroup3.isTouching(man))
  {
	  score = score+1;
  }

 Bullet1();
 Bullet2();
 Bullet3();

 if(bulletGroup1.isTouching(dolphin) || bulletGroup2.isTouching(dolphin) || bulletGroup3.isTouching(dolphin) )
 life = life-1;
}
Bullet1(){
if (frameCount % 200 === 0){
    var random1=random(-3,3);
    var random2=random(2,4);	
    var bullet=createSprite(hunter1.x,hunter1.y,5,5)
    bullet.addImage(bulletimg)
    bulletGroup1.add(bullet);
    bullet.velocityX=random1;
    bullet.velocityY=random2;
    
    }
}

Bullet2(){
	if (frameCount % 1250 === 0){
	var random1=random(-6,6);
	var random2=random(5,3);
	var bullet=createSprite(hunter2.x,hunter2.y,5,5)
	bullet.addImage(bulletimg)
	bulletGroup2.add(bullet);
	bullet.velocityX=random1;
	bullet.velocityY=random2;
	
	}
	
}

Bullet3(){
    if (frameCount % 3000 === 0){
    var random1=random(-5,6);
    var random2=random(6,4);
    var bullet=createSprite(hunter3.x,hunter3.y,5,5)
    bullet.addImage(bulletimg)	
    bulletGroup3.add(bullet);
    bullet.velocityX=random1;
    bullet.velocityY=random2;
    
    }
    
    }

}