class Box3 extends BaseClass {
  constructor(x, y, width, height){
    
    super(x,y,width,height);
    this.Visibility = 255;
  }
  display(){
    fill("grey");
    if(this.body.speed<3){
      super.display();
    }
    else{
      World.remove(world,this.body);
      push();
      this.Visibility = this.Visibility-10;
      tint(255,this.Visibility);
      rect(-30,-30,this.width,this.height);
      pop();
    }
  }
};
