objectDetector = "";
status = "";
objects = [];
function preload() {
    img = loadImage("bedroom.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
  }
function modelLoaded() {
    status = true;
    console.log("Model loaded");
    objectDetector.detect(img,gotResult)
}

function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
    objects = results;
  }

  function draw() {
    image(img, 0, 0, 640, 420);
    if(status != "") {
  for(i=0;i<objects.length;i++) {
    document.getElementById("status").innerHTML = "Status: Objects detected!";
    fill("#c90c0c");
    percent = floor(objects[i].confidence*100);
    text(objects[i].label+" " + percent + "%",objects[i].x+15,objects[i].y+15);
    noFill();
    stroke("#c90c0c");
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
  }
    }
  }