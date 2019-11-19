var canvas = document.getElementById('canvas');
let cx = canvas.getContext("2d"); 
let  img = document.createElement("img"); 
img.src = "js/player.png";  
let imgS = document.createElement("img"); 
imgS.src = "js/sprites_big.png"; 
var intervalID;
var intervalDynamicID;
var xDynamic;
var xDynamic;
var xStatic =[];
var yStatic;
var xStaticSpriteSize =0;
var yStaticSpriteSize =0;
var eDynamic = 0;
const UP_KEY     = 38;
var reliquitor   = 0 ;
var moveDynamic  = 0 ;
var arraySkipper = [];
var arrayHolder = [];
var  _IFV  = 0;
var  _ISV  = 0;
var  _ISX  = 0;
var  _LXA   = [];
var  _RN = 0;
var  _VN = 5;
var  _ICNSN = 0;
var  _MVDNC = 0;
var _DIFL = 0;
var _DAIFL = [];
var _XSTCIFL = [];
var _VALC = [];
var _ARRSY = 0;
var _RENDERSTATIC = 0;
var incrementor = 0;
    
function renderDynamicImage(img,spriteW,spriteH,renderSpeed,x,y,adjustMovement) {
   
   this.cycle = 0;
    if(_ISV==0){
       yFunc(y);
       xFunc(x);
       _XSTCIFL = xStatic;  
       computeDiff(xStatic)
       _DIFL = 0;
    }
    
   var intervalDynamicIDDynamic = setInterval(render, renderSpeed);
    function render() { 
        this.cycle= (this.cycle + 1) % 8; 
        cx.clearRect(x  - 1  , yStatic , spriteW, spriteH); 
        cx.drawImage(img,cycle * spriteW, 0, spriteW, spriteH, x, yStatic, spriteW, spriteH); 
        xDynamic =  cycle * spriteW;
       if (xStatic[_ICNSN] ==  eDynamic) {
            xStatic[_ICNSN] = 0;
            clearInterval(intervalDynamicIDDynamic);
            cx.clearRect(x - 1   , yStatic, spriteW, spriteH);
            reliquitor = (reliquitor == 0) ? adjustMovement : 0;    
            adjustDynamicImage(img,spriteW,spriteH,renderSpeed , x , yStatic - adjustMovement,adjustMovement)
        }
        var stp = 0;
        for(i=0 ; i < arraySkipper.length;i++){
            if (x == xStatic[arraySkipper[i]] - 21) {
                stp = 1;
            }
        }
        if ((x + spriteW) ==  xStatic[_ICNSN]  || stp == 1) {
            eDynamic = 0;
            clearInterval(intervalDynamicIDDynamic);
        }
         if ( x == canvas.width - 35) {
            eDynamic = 0;
            clearInterval(intervalDynamicIDDynamic);
            alert("Game Over");
        }
    x++
    }
   
}
function adjustDynamicImage(img,spriteW,spriteH,renderSpeed,x,y,adjustMovement) {
    this.cycle = 0;
    intervalDynamicID = setInterval(render, renderSpeed);
       function render(){   
  
        cx.clearRect(x -1   , y , spriteW, spriteH); 
        cx.drawImage(img,cycle * spriteW, 0, spriteW, spriteH, x, y, spriteW, spriteH);
        this.cycle= (this.cycle + 1) % 8; 
        xDynamic =  x + spriteW;
        
        if( (_LXA[_ICNSN] - x) <= _VN ){
            _ISX++;
            if(_DAIFL[_ICNSN] <= 20  || _DAIFL[_ICNSN] <= 40  || _DAIFL[_ICNSN] <= 60  && _DIFL == 0){
                   _DIFL = 1;
                   _RN = _RN + (_DAIFL[_ICNSN] - 3);
                
            }
            if( (_ISX) >= _RN ){
                _RENDER_EOB(x,y,spriteW,spriteH,intervalDynamicID,renderSpeed,adjustMovement);
            }
        }else{
           var _EOI = eDynamic - x;
           if (_EOI < 30){
                 _MVDNC = 5;
            }
            if ( xStatic[_ICNSN] ==  eDynamic || moveDynamic ==  (40  + _MVDNC)) {
               
                 _RENDER_EOB(x,y,spriteW,spriteH,intervalDynamicID,renderSpeed,adjustMovement);   
            }
        }
  
    x++
    moveDynamic ++
    xStatic[_ICNSN]++
    }
   
}
function _RENDER_EOB(x,y,spriteW,spriteH,intervalDynamicID,renderSpeed,adjustMovement) {
   xStatic[_ICNSN] = eDynamic;
   cx.clearRect(x - 1   , y, spriteW, spriteH);
   moveDynamic = 0 ;
   _DIFL = 0;
   clearInterval(intervalDynamicID);
   var stX = xStatic.length - 1;
   if(_ISX > 0){ 
       _ICNSN++; 
       if(xStatic[_ICNSN] == undefined){
           _ICNSN = 0;
       }
   _ISX = 0;
   }
    
   moveDynamic = 0;
   renderDynamicImage(img,spriteW,spriteH,renderSpeed,x,y,adjustMovement);
}
function renderStaticUnreavealingImage(img,spriteW,spriteH,renderSpeed,x,y) {
    img.addEventListener('load',function(e)  {
        this.cycle = 0;
        intervalID = setInterval(function render() {
        if(  x <canvas.width){
             cx.drawImage(img,spriteW, 0, spriteW, spriteH,x, y, spriteW, spriteH);
        }else{  
             clearInterval(intervalID);
        }
        x = x + spriteW; 
        }, renderSpeed);
     });
}
function yFunc(y) {
     _ISV = 1;
     yStatic= y;
}
function xFunc(x) {
     _XS = 1;
}
function isLargeNumber(element) {
  return element <= 20;
}
Math.diff = function() {
    var i =0;
    for(p = 0; p < arguments[0].length  ; p++){
        if(arguments[0][p + 1]  - (arguments[0][p] )  !=  1 && arguments[0][p + 1] != undefined ){
           arrayHolder[i] = p+ 1;
            i++;
        }
    }
    return arrayHolder;
};

Array.diff = function() {
    for(p = 0; p < arguments[0].length  ; p++){
        
        if(arguments[0][p]   == arguments[1]){
            if(arguments[0][p + 1] == arguments[1] ){
                   var pos = arguments[0].indexOf(arguments[0].find(isLargeNumber));
                   var fir_v = 0;
                   fir_v = computeGross(arguments[0],_VALC,arrayHolder);
                    arguments[0] = sumNonConsective(arguments[0] , arguments[1],pos)
                   arguments[0][pos]=fir_v;
            }else{
                arguments[0][p - 1] = arguments[0][p] + arguments[0][p - 1]
                arguments[0].splice(p , 1);
            }
            
        }
    }
    return arguments[0];
};
function sumNonConsective(arraydel ,argument,pos){
    var start = 0;
    for(i = pos; i< arraydel.length ;i++){
      if(arraydel[i] == argument){
         //delete a val
            arraydel.splice(i, 1);
      }else{
          
          break;
      }
    }
    return arraydel
}
Array.detect = function() {
    var i = [];
    var j = [];
    var occ = -1;
  
    
    for(p =  1 ; p < arguments[0].length ; p++){
            if((arguments[0][p] - arguments[0][p -1]) == 1 ){
                
                i[p-1] = arguments[0][p -1];
                j[p-1] = arguments[0][p];
            }
        
     //  
    }
    i = i.concat(j)
    i.sort(function(a, b) {
        return a - b;
    });
    j = []
    let counter = 0;
    i.forEach(function(element) {
    if(element != occ){ j[counter] = element;occ = element; counter ++; };
    });
    occ = 0;
    arraySkipper = arguments[0];
    var sumVAL = j.length;
    arraySkipper = sumConsective(arraySkipper , j , sumVAL);
    
    return arraySkipper;
};
function sumConsective(arraySkipper , j, sumVAL){
      var fir_v = 0;
      for(p = 0; p < j.length ; p++){
        var index = arraySkipper.indexOf(j[p])
        if (fir_v == 0){
        fir_v = index
        }
        arraySkipper.splice(index, 1)
        if(p == j.length - 1 ){arraySkipper.splice(fir_v, 0, sumVAL )}
      }
    return arraySkipper
}
function computeGross(_DAIFL,_VALC,arrayHolder) {
    var index = 0;
    for(i = 0; i< _DAIFL.length ; i++){
        for(p = 0; p < _VALC.length ; p++){
            if(_VALC[p] ==  i && arrayHolder.includes(p) == false){
            index = index + _DAIFL[i];
            }
        }
    }
  return index;
}


function computeDiff(xStatic) {
    for(i = 0; i< xStatic.length - 1; i++){
        _DIFL = xStatic[i + 1] - xStatic[i];
        _DAIFL[i] = _DIFL;
    } 
    const _ARRAY_FIL = _DAIFL.filter(_ARRAYV => _ARRAYV <= 20);
    
    var elem = 0;
    var _VALC_INDEX = _DAIFL.indexOf(_ARRAY_FIL[elem]);
    while (_VALC_INDEX != -1) {
        _VALC.push(_VALC_INDEX);
        _VALC_INDEX = _DAIFL.indexOf(_ARRAY_FIL[elem], _VALC_INDEX + 1);
         elem ++;
    }
    var i =0;
    var index = 0;
    arrayHolder = Math.diff(_VALC);
   
    Array.detect(_VALC);
    index = computeGross(_DAIFL,_VALC,arrayHolder);
   
    for(i = 0; i< _VALC.length; i++){
        if((_VALC[i+1] - _VALC[i]) == 1){
           _DAIFL.splice(_VALC[i], 1);
        } 
    }
    var pos = _DAIFL.indexOf(_DAIFL.find(isLargeNumber));
    _DAIFL = Array.diff(_DAIFL,xStaticSpriteSize)
    
}
onkeydown = function(e) {
    var key = e.keyCode;
    if ((key == UP_KEY) ) {
         eDynamic = xStatic[_ICNSN];
    }
};
function renderStaticImage(img,spriteW,spriteH,staticR,x,y,length) {
   
         staticR = 1;
         yStatic = y;
        _IFV = spriteW;
        _RN = spriteH;
        _RN = _RN + 10;
    
        var staticIncrementator = 0;
        for(var i = 0; i< length ;i++){
                if(length > 1){
                    _DAIFL[_RENDERSTATIC] =staticIncrementator;
                }else{
                _DAIFL[_RENDERSTATIC] = x;
                }
                xStatic[incrementor] = x + staticIncrementator;
                _LXA[incrementor] = x + staticIncrementator;
                 staticIncrementator += 20;
                incrementor++
        }
        _RENDERSTATIC++;
        img.addEventListener('load',function(e)  {
        this.cycle = 0;
        //Note to self an array in a function setinterval leads to  undefined behavior
        var intervalIDStatic = setInterval(function render() {
            staticIncrementator = 0;
            for(var i = 0; i< length ;i++){
                cx.drawImage(img,spriteW, 10, spriteW, spriteH,x + staticIncrementator, y, spriteW, spriteH);
                staticIncrementator += 20;
             }
            clearInterval(intervalIDStatic);
        }
        , );
        }); 
}
function renderCoin(img,spriteW,spriteH,staticR,x,y,length) {
        var staticIncrementator = 0;
        img.addEventListener('load',function(e)  {
        this.cycle = 0;
        //Note to self an array in a function setinterval leads to  undefined behavior
        var intervalIDStatic = setInterval(function render() {
            staticIncrementator = 0;
            for(var i = 0; i< length ;i++){
                cx.drawImage(img,spriteW, 10, spriteW, spriteH,x + staticIncrementator, y, spriteW, spriteH);
                staticIncrementator += 20;
             }
            clearInterval(intervalIDStatic);
        }
        , );
        }); 
}

function invokeDraw(img,spriteW,spriteH,renderSpeed,x,y,adjustMovement) {
    window.addEventListener("load", function(){renderDynamicImage(img,spriteW,spriteH,renderSpeed,x,y,adjustMovement)}, false);
}
function invokeDraw(img,spriteW,spriteH,renderSpeed,x,y,adjustMovement) {
    window.addEventListener("load", function(){renderDynamicImage(img,spriteW,spriteH,renderSpeed,x,y,adjustMovement)}, false);
}


let AdjustImage = 50;
canvas.width  = 1000
var xStaticSpriteSize =20;
var yStaticSpriteSize =20;


// Parameters are purely editable

invokeDraw(img,24,30,10,0 , 0 + AdjustImage ,20);

renderStaticImage(imgS, xStaticSpriteSize, yStaticSpriteSize, 1, 100 , 10 + AdjustImage,1);
renderStaticImage(imgS, xStaticSpriteSize, yStaticSpriteSize, 1, 200 , 10 + AdjustImage,1); 
renderStaticImage(imgS, xStaticSpriteSize, yStaticSpriteSize, 1, 400 , 10 + AdjustImage,4);
renderStaticImage(imgS, xStaticSpriteSize, yStaticSpriteSize, 1, 580 , 10 + AdjustImage,2);
renderStaticImage(imgS, xStaticSpriteSize, yStaticSpriteSize, 1, 700 , 10 + AdjustImage,2);
renderStaticImage(imgS, xStaticSpriteSize, yStaticSpriteSize, 1, 800 , 10 + AdjustImage,2);

renderCoin(imgS, 80, 25, 1, 150 ,  AdjustImage,1);
renderCoin(imgS, 80, 25, 1, 300 ,  AdjustImage,1);
renderCoin(imgS, 80, 25, 1, 490 ,  AdjustImage,1);
renderCoin(imgS, 80, 25, 1, 750 ,  AdjustImage,1);
renderCoin(imgS, 80, 25, 1, 650 ,  AdjustImage,1);
renderCoin(imgS, 80, 25, 1, 950 ,  AdjustImage,1);

renderStaticUnreavealingImage(imgS, xStaticSpriteSize, 40, 1, 0 , 30 + AdjustImage);
