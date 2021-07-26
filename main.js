noseX=0;
noseY=0;

function preload(){
    clown_nose = loadImage('https://i.pinimg.com/originals/6b/66/7e/6b667e797a766356281aabdf4b5f1e86.png');
}

function setup(){
    canvas = creatCanvas(300, 300);
    canvas.center();
    video = creatCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose, gotPoses');
}

function modelLoaded(){
    console.log('poseNet Is Initialized');
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png');
}

