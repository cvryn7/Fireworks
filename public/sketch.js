var fireworks = [];
var gravity;

function setup() {
    createCanvas(600, 400);
    gravity = createVector(0, 0.2);
    colorMode(HSB);
    fireworks.push(new Firework());
    //if we set stroke or any style element here
    //p5js can render lot faster
    stroke(255);
    strokeWeight(4);

    background(0)
}

function draw() {
    colorMode(RGB);
    background(0, 30);
    //In every frame there is 10% chance
    //of creating a new firework
    if (random(1) < 0.02) {
        fireworks.push(new Firework());
    }
    for (var i = fireworks.length - 1; i >= 0; i--) {
            fireworks[i].update();
            fireworks[i].show();
            if (fireworks[i].done()) {
                fireworks.splice(i, 1);
            }
    }
}