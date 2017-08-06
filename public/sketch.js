var fireworks = [];
var gravity;
var stars = [];
var song;
var muteImg;
var soundImg;
var img;

function preload() {
    song = loadSound('edith.mp3');
}
function setup() {
    muteImg = loadImage("mute.png");
    soundImg = loadImage("sound.png");
    img = soundImg;
    createCanvas(800, 500);
    gravity = createVector(0, 0.2);
    colorMode(HSB);
    fireworks.push(new Firework());
    //if we set stroke or any style element here
    //p5js can render lot faster
    stroke(255);
    strokeWeight(4);
    for (var i = 0; i < 100; i++) {
        stars[i] = createVector(random(0, width), random(0, height));
    }
    background(0)
    song.loop();
}

function draw() {
    colorMode(RGB);
    background(0, 30);

    for (var i = 0; i < stars.length; i++) {
        stroke(random(255));
        strokeWeight(random(1, 6));
        point(stars[i].x, stars[i].y);
    }
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
    image(img, 5, 5, 30, 30);
}

function mousePressed() {
    if ( song.isPlaying() ) { // .isPlaying() returns a boolean
        song.pause();
        img = muteImg;

    } else {
        song.loop();
        img = soundImg;
    }
}