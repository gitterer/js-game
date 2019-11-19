const imageDynamic = "js/player.png";
const imageStatic = "js/sprites_big.png";
var xStaticSpriteSize =20;
var yStaticSpriteSize =20;
var AdjustImage = 100;

var canvas = new SpriteProcessing();

canvas.canvasHeight = 200;
canvas.canvasWidth  = 1000;
canvas.canvasString = 'canvas'

canvas.invokeDraw( imageDynamic , 24 , 30, 10, 0, 0 + AdjustImage ,20);
canvas.renderStaticUnreavealingImage( imageStatic,20,40,1,0 , 30 + AdjustImage );
canvas.renderStaticImage( imageStatic , xStaticSpriteSize, yStaticSpriteSize, 1, 200 , 10 + AdjustImage,1);
canvas.renderStaticImage( imageStatic , xStaticSpriteSize, yStaticSpriteSize, 1, 400 , 10 + AdjustImage,4);
canvas.renderStaticImage( imageStatic , xStaticSpriteSize, yStaticSpriteSize, 1, 580 , 10 + AdjustImage,2);
canvas.renderStaticImage( imageStatic , xStaticSpriteSize, yStaticSpriteSize, 1, 700 , 10 + AdjustImage,2);
canvas.renderStaticImage( imageStatic , xStaticSpriteSize, yStaticSpriteSize, 1, 800 , 10 + AdjustImage,2);

canvas.renderCoin(imageStatic, 80, 25, 1, 150 ,  AdjustImage,1);
canvas.renderCoin(imageStatic, 80, 25, 1, 300 ,  AdjustImage,1);
canvas.renderCoin(imageStatic, 80, 25, 1, 490 ,  AdjustImage,1);
canvas.renderCoin(imageStatic, 80, 25, 1, 750 ,  AdjustImage,1);
canvas.renderCoin(imageStatic, 80, 25, 1, 650 ,  AdjustImage,1);
canvas.renderCoin(imageStatic, 80, 25, 1, 950 ,  AdjustImage,1); 
canvas.start();
