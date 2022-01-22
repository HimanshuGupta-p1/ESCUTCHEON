var showimg=null;
var hideimg=null;
var extracthide=null;
var fcanvas;
var hcanvas;
var ecanvas;

 function loadShowImage(){
    var file=document.getElementById("faceimage");
    showimg=new SimpleImage(file);
    fcanvas=document.getElementById("face");
    showimg.drawTo(fcanvas);
    
}

function loadHiddenImage(){
    var file=document.getElementById("hideimage");
    hideimg=new SimpleImage(file);
    hcanvas=document.getElementById("hide");
    hideimg.drawTo(hcanvas);
}

function clearbits(colorval){
    var x=Math.floor(colorval/16)*16;
    return x;
}
function extractBits(colorval){
    var x=(colorval%16)*16;
    return x;
}
function chop2hide(image){
    for (var px of image.values()){
        px.setRed(clearbits(px.getRed()));
        px.setGreen(clearbits(px.getGreen()));
        px.setBlue(clearbits(px.getBlue()));
        
    }
    return image;
}
function shift(image){
    for(var px of image.values()){
        px.setRed(px.getRed()/16);
        px.setGreen(px.getGreen()/16);
        px.setBlue(px.getBlue()/16);
    }
    return image;
}
function combine(show,hide){
    
    var answer= new SimpleImage(show.getWidth(),show.getHeight());
    
    for(var px of answer.values()){
        var x=px.getX();
        var y=px.getY();
        
        var showPixel=show.getPixel(x,y);
        var hidePixel=hide.getPixel(x,y);
        
        px.setRed(showPixel.getRed()+hidePixel.getRed());
        px.setGreen(showPixel.getGreen()+hidePixel.getGreen());
        px.setBlue(showPixel.getBlue()+hidePixel.getBlue());
        
    }
    return answer;
}

function crop(image,width,height){
    for(var px of image.values()){
        if(px.getX() > width){
            px.setRed(255);
            px.setGreen(255);
            px.setBlue(255);
        }
         if(px.getY() > height){
            px.setRed(255);
            px.setGreen(255);
            px.setBlue(255);
        }
    }
    return image;
 }
 
 function printCombine(){
    showimg=chop2hide(showimg);
    hideimg=shift(hideimg);
     var combineimg=combine(showimg,hideimg);
     combineimg.drawTo(fcanvas);
     hideimg.drawTo(hcanvas);
 }
 function loadextractHiddenImage(){
     var file=document.getElementById("extractHiddenImage");
     extracthide=new SimpleImage(file);
     ecanvas=document.getElementById("extract");
     extracthide.drawTo(ecanvas); 
 }
 function extractHiddenImage(){
     var image=new SimpleImage(extracthide);
     for(var px of image.values()){
         px.setRed(extractBits(px.getRed()));
         px.setGreen(extractBits(px.getGreen()));
         px.setBlue(extractBits(px.getBlue()));
     }
     fcanvas=document.getElementById("face");
     image.drawTo(fcanvas);


 }
function clearCanvas() {
    doClear(fcanvas);
    doClear(hcanvas);
    doClear(ecanvas);
    showimg=null;
    hideimg=null;
    extracthide=null;
  }
  
  function doClear(canvas) {
    var context = canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);
  }