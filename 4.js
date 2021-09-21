objectDetector = "";
function preload() {
    img = loadImage("kithen.jpg");
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