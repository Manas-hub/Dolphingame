class welcome{
    constructor(){
		this.box=createButton("Start")
    }
    display(){
		background("ligtblue")
        tint(255,40)
		image(dolphinimg,width/2-450,height/2-260,900,500)
		push()
		textSize(100);
        fill("red")
		text ("The Dolphin Game",displayWidth/5,300);
		pop()
	    this.box.position(displayWidth/2,displayHeight/2)
        this.box.style("background-color",'red')
	    this.box.mousePressed(()=>{
          gamestate = 1
		})	
    }
}