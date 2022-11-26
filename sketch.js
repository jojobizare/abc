var Youdad
var wall1,walll2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10
,wall11,wall12,walll13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22
var win
var dumb
var edge
function setup(){
createCanvas(500,500)
edge = createEdgeSprites()
wall1 = createSprite(76,25,10,100)
walll2 = createSprite(60,115,130,10)
wall3 = createSprite(300,100,293,10)
wall4 = createSprite(115,75,10,99) 
wall5 = createSprite(250,250,18,75)
wall6 = createSprite(250,250,19,75)
wall7 = createSprite(250,250,15,75)
wall8 = createSprite(250,250,10,75)
wall9 = createSprite(250,250,10,75)
wall10 = createSprite(445,100,10,155)
wall11 = createSprite(298,256,10,130)
wall12 = createSprite(330,100,10,156) 
wall13 = createSprite(219,210,500,10)
wall14 = createSprite(159,50,10,100)
wall15 = createSprite(199,160,315,10)
wall16 = createSprite(250,230,10,10)
wall17 = createSprite(250,250,12,50)
wall18 = createSprite(440,400,70,10)
wall19 = createSprite(400,300,10,310)
wall20 = createSprite(400,475,10,75) 
wall21 = createSprite(475,440,75,10)     
wall22 = createSprite(500,475,12,50)

Youdad = createSprite(475,25,19,19)
Youdad.shapeColor = 'blue'  
wall22.shapeColor = 'yellow'
win = 0
dumb = 0

}

function draw (){
background('orange')
Youdad.collide(edge)
text('vitoria: '+ win,400,25)
text('morte: '+ dumb,325,25)
strokeWeight(0)

if(keyDown('w')){
Youdad.velocityY = -3
Youdad.velocityX = 0
}else if(keyDown('s')){
Youdad.velocityY = 3
Youdad.velocityX = 0
}else
if(keyDown('a')){
Youdad.velocityX = -3
Youdad.velocityY = 0
}else
if(keyDown('d')){
Youdad.velocityX = 3
Youdad.velocityY = 0
}

if(Youdad.collide(wall22)){
win = win + 1
Youdad.x = 25
Youdad.y = 25
}

if(Youdad.collide(wall1)||
Youdad.collide(walll2)||
Youdad.collide(wall3)||
Youdad.collide(wall4)||
Youdad.collide(wall5)||
Youdad.collide(wall6)||
Youdad.collide(wall7)||
Youdad.collide(wall8)||
Youdad.collide(wall9)||
Youdad.collide(wall10)||
Youdad.collide(wall11)||
Youdad.collide(wall12)||
Youdad.collide(wall13)||
Youdad.collide(wall14)||
Youdad.collide(wall15)||
Youdad.collide(wall16)||
Youdad.collide(wall17)||
Youdad.collide(wall18)||
Youdad.collide(wall19)||
Youdad.collide(wall20)||
Youdad.collide(wall21)
){
Youdad.x =25
Youdad.y =25
dumb = dumb + 1
}

drawSprites()
}