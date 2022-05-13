const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var bala
var canvas, angle, tower, ground, cannon;
var tower
var barquito
var balas=[];
function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angle = 20;
  cannon = new Cannon(180,110,130,100,angle);
  bala = new Bala(cannon.x,cannon.y);
tower= new Tower (150,350,160,310);
//angleMODE(DEGREES);
//angle =15;
  barquito = new Barcos(width-79,height-60,170,170,-80);
  
}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);
  Matter.Body.setVelocity(baquito.body,{x:-0.9, y:0})
cannon.display();
bala.display();
tower.display();
barquito.display();
for (var i = 0; i < balas.length; i++) { showCannonBalls(balas[i]); }
 // rect(ground.position.x, ground.position.y, width * 2, 1);
  
keyReleased();
 
}
function keyReleased() { if (keyCode === DOWN_ARROW) { balas[balas.length - 1].disparar(); } }

function showCannonBalls(ball,i){
  if(ball){
    ball.display();
  }
}


function keyPressed() {
   if (keyCode === DOWN_ARROW) {
      var cannonBall = new Bala (cannon.x, cannon.y);
       cannonBall.trajectory = [];
        Matter.Body.setAngle(cannonBall.body, cannon.angle);
         balas.push(cannonBall);
         } }





