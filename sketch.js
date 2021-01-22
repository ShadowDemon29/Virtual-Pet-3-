var dog, happyDog
var foodS, foodStock
var database

function preload()
{
  dog = loadImage("../images/dogImg1.png");
  dogHappy = loadImage("../images/dogImg.png");
}

function setup() {
  createCanvas(500,500);
  foodStock=database.ref('Food')
  foodStock.on("value",readStock);

  dog.createSprite(200,200,10,10);
  dog.addImage()

}


function draw() {  
  background(46,139,87);

  fedTime = database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed = data.val();
  })

  if(gameState = 'Hungry'){
    feed.hide();
    addFood.hide();
    dog.remove();
  }else{
    feed.show();
    addFood();
  }
  
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  datavase.ref('/').update({
    Food : x
  })
}

display(); {
  var x =80, y = 100;

  imageMode(CENTER);
  image(this.image,720,220,70,70);

  if(this.foodStock = 0){
   for(var i=0; i<this.foodStock;i++){
     if(i%10==0){
       x=80;
       y=y+50
     }
     i,age(this.image,x,y,50,50);
     x=x+30;
   }
  }

}

readState = database.ref('gameState')
readState.on("value",function(data){
  gameState= data.val();  
})
