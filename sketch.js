var database;
var menu;
var team1Count, team2Count;
var gameState=0;
var measure1,measure2;

function setup(){
  createCanvas(1280,720);
  database = firebase.database();

  menu = new Menu();

  //measure1 = createSprite(640,360);

}

function draw() {

  background("black");

  if(gameState===0){
    menu.display(); 
  }

  //drawSprites();    

}