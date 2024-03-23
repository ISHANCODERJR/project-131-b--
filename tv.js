tv_img = ""
status = ""

function preload() {
    img = loadImage('TV.jpg')
}

function createCanvas() {
    canvas = createCanvas(640 , 420)
    canvas.center()
    objectDector = ml5.objectDector('cocossd' , modelLoaded)
    document.getElementById("status").innerHTML = "status : detecting object"
}

function draw() {
    image(img , 0 , 0 , 640 , 420)
    fill("#FF0000")
    text("dog" , 45 , 75)
    noFill()
    stroke("#FF0000")
    rect(30 , 90 , 450 , 350)
}

function modelLoaded() {
    console.log("model is loaded");
    status = true
    objectDector.decting(img , gotResult)
}
function gotResult() {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
    }
}