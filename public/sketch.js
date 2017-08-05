var fireworks = [];
var gravity;

function setup() {
    createCanvas(400, 300);
    gravity = createVector(0, 0.2);

    fireworks.push(new Firework());
    //if we set stroke or any style element here
    //p5js can render lot faster
    stroke(255);
    strokeWeight(4);


}

function draw() {
    background(51);
    //In every frame there is 10% chance
    //of creating a new firework
    if (random(1) < 0.1) {
        fireworks.push(new Firework());
    }
    for (var i = 0; i < fireworks.length; i++) {
        if (fireworks[i].firework) {
            fireworks[i].update();
            fireworks[i].show();
        } else {
            //remove particle which are deleted by
            //Firework function
            fireworks.splice(i, 1);
            i--;
        }
    }

}