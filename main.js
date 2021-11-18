
mustachex=0;
mustachey=0;

function preload(){
mustache=loadImage(" https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
canvas=createCanvas(400,400);
canvas.center();
video= createCapture(VIDEO);
video.hide();

poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw(){
image(video,0,0,400,400);
image(mustache,mustachex,mustachey,70,50);
}

function takeSnapShot(){
    save("Junk.png")
}

function modelLoaded(){
    console.log("poseNet is loaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        mustachex=results[0].pose.nose.x-175;
        mustachey=results[0].pose.nose.y-50;
    }
}