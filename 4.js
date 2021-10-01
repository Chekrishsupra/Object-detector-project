objectDetector = "";
status = "";
function preload() {
    img = loadImage("kitchen.jpg");
}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects";
}

function modelLoaded() {
    status = true;
    console.log("Model loaded");
}

function draw() {
    image(img,0,0,640,420);
}