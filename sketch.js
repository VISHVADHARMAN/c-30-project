const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var launcher, slingShot;



function setup(){
    var canvas = createCanvas(1400,500);
    
    engine = Engine.create();
    world = engine.world;
    
    
   
    
    ground = new Ground(590,350,300,20);
    ground1 = new Ground(960,300,250,20)
    ground2 = new Ground(700,490,1400,20)
    box1 = new Box(550,330,30,40);
    box2 = new Box(560,330,30,40);
    box3 = new Box(570,330,30,40);
    box4 = new Box(580,330,30,40);
    box5 = new Box(600,330,30,40);
    box6 = new Box(590,330,30,40);
    box7 = new Box(610,330,30,40);
    box8 = new Box1(555,310,30,40);
    box9 = new Box1(565,310,30,40);
    box10 = new Box1(575,310,30,40);
    box11 = new Box1(585,310,30,40);
    box12 = new Box1(595,310,30,40);
    box13 = new Box1(605,310,30,40);
    box14 = new Box2(568,285,30,40);
    box15 = new Box2(578,285,30,40);
    box16 = new Box2(588,285,30,40);
    box17 = new Box2(598,285,30,40);
    box18 = new Box3(572,255,30,40);
    box19 = new Box3(582,255,30,40);

   
    box20 = new Box2(930,280,30,40);
    box21 = new Box2(940,280,30,40);
    box22 = new Box2(950,280,30,40);
    box23 = new Box2(960,280,30,40);
    box24 = new Box2(970,280,30,40);
    box25 = new Box2(980,280,30,40);
    box26 = new Box3(940,250,30,40);
    box27 = new Box3(950,250,30,40);
    box28 = new Box3(960,250,30,40);
    box29 = new Box3(970,250,30,40);
    box30 = new Box(950,220,30,40);
    box31 = new Box(960,220,30,40);
    box32 = new Box1(955,190,30,40);
    




 
    
    launcher = new Launcher(200,150);


    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(launcher.body,{x:200, y:150});
}

function draw(){
    background(20);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    ground1.display();
    ground2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    slingshot.display();
    launcher.display();
    
    text("DRAG THE SQUARE STONE AND RELEASE IT, TO LAUNCH IT TOWARDS THE BLOCKS",500,40)
    text("PRESS SPACE TO GET THE SECOND CHANCE!!",1000,400);
    
}

function mouseDragged(){
    Matter.Body.setPosition(launcher.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(launcher.body);
    }
    
    
}