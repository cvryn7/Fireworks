var firework;

function setup() {
    createCanvas(400, 300);

    //if we set stroke or any style element here
    //p5js can render lot faster
    stroke(255);
    strokeWeight(4);
    firework = new Particle(200, 150);
}

function draw() {
    background(51);
    firework.update();
    firework.show();
}