const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;


var bg = "sunset12.png";

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
   
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
 


}

function draw(){

    // add condition to check if any background image is there to add
   if(backgroundImg)
      background(backgroundImg);

    Engine.update(engine);

   
    


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJson = await response.json();
    var datetime = responseJson.datetime;

    // write code slice the datetime
    hour = datetime.slice(11,13);



    // add conditions to change the background images from sunrise to sunset
    if(hour>=0 && hour<=04){
        bg = "sunset12.png";
     } else if(hour>=04 && hour<=05){
        bg = "sunrise1.png";
     } else if(hour>=05 && hour<=06){
        bg = "sunrise2.png";
     } else if(hour>=06 && hour<=07){
        bg = "sunrise3.png";
     } else if(hour>=07 && hour<=08){
        bg = "sunrise4.png";
     } else if(hour>=11 && hour<=14){
        bg = "sunrise5.png";
     } else if(hour>=14 && hour<=16){
        bg = "sunrise6.png";
     } else if(hour>=16 && hour<=18){
        bg = "sunset7.png";
     } else if(hour>=18 && hour<=19){
        bg = "sunset8.png";
     } else if(hour>=19 && hour<=20){
        bg = "sunset10.png";
     } else if(hour>=20 && hour<=21){
        bg = "sunset11.png";
     } else{
        bg = "sunset12.png";}
      
    //load the image in backgroundImg variable here
      backgroundImg = loadImage(bg);
}
