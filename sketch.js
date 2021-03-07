const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint;


var engine, world;
var ground1;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;
var ball,ballp;
var score=0;
var slingShot;

function preload(){
    ballp = loadImage("polygon.png");
    getTime();
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    createCanvas(900,500)  

  ground1 = new Ground(width/2-100, height/2+150, 300, 20);

  ball = Bodies.circle(50, 200, 10);
  World.add(world, ball);

  slingShot = new SlingShot(this.ball, {x: 100, y: 200});

 
  box1=new Box(310,370,30,40)
  box2=new Box(340,370,30,40)
  box3=new Box(370,370,30,40)
  box4=new Box(400,370,30,40)
  box5=new Box(430,370,30,40)
  box6=new Box(460,370,30,40)
  box7=new Box(490,370,30,40)

  box8=new Box(340,330,30,40)
  box9=new Box(370,330,30,40)
  box10=new Box(400,330,30,40)
  box11=new Box(430,330,30,40)
  box12=new Box(460,330,30,40)

  box13=new Box(370,290,30,40)
  box14=new Box(400,290,30,40)
  box15=new Box(430,290,30,40)

  box16=new Box(400,250,30,40)
}

function draw(){
    Engine.update(engine);
    background(0); 

    ground1.display();
    fill("white")
    text ("Score "+score,width-300,50);

    fill("white")
  textSize(20)
  text("Drag the Hexagonal and realease it towards the Blocks ",200,40)
 
  fill(135, 205, 235);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill(255, 190, 200);
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill(65, 220, 210);
  box13.display();
  box14.display();
  box15.display();
  fill(130, 130, 130);  
  box16.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score(); 
  box16.score();

  imageMode(CENTER);
  image(ballp, ball.position.x, ball.position.y, 40, 40);

}

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32)
  Matter.Body.setPosition(ball, {x:50, y:200});
  slingShot.attach(ball);
}
  
async function getTime() {
  
  var getinfo= await   fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var infotype = await getinfo.json();
  console.log(infotype)
    
  var time = infotype.datetime;
  console.log(time);

  var hr = time.slice(11,13);
  console.log(hr);

  if(hr >= 6 && hr <=18) {
      bg = "daySky.jpg";
  } else {
      bg = "nightSky.jpg";

  }

  backgroundImage = loadImage(bg);
  console.log(backgroundImage)
}

