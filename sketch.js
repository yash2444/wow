var car, wall, speed, weight;

var deformation;

function setup (){
  createCanvas(400,400)
deformation=0.5*weight*speed*speed/22509

speed=random(55,90);
weight=random(400,1500);

car = createSprite(380,200,10,60);
wall=createSprite(20,200,20,20);
}

function draw (){
car.velocityX=speed;

if (wall.x-car.x < (car.width+wall.width)/2 ) {

if (deformation>180){
  car.ShapeColor=color(255,0,0);
}
 
if (deformation<180 && deformation>100){

car.ShapeColor=color(230,230,0);
}
if (deformation <100){
  car.ShapeColor=color(0,255,0);
}
}











}



























































