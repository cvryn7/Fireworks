/**
 * Constructor function for containing
 * all the firework particles and logic
 * @constructor
 */

// 0 -> simple firework
// 1 -> heart
var shapes = [0, 1];
function Firework() {
    this.hue = random(255)
    this.firework = new Particle(random(width), height, this.hue);
    this.particles = [];
    this.exploded = false;
    this.shapeType = 0;
    this.reappear = false;
    this.reappearLimit = random(2, 4);
    this.reappeared = 0;

    this.done = () => {
        if (this.exploded && this.particles.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    this.update = () => {
        if (!this.exploded) {
            this.firework.applyForce(gravity);
            this.firework.update();

            //remove the element if its velocity gets
            //positive i.e. it starts moving in positive y direction
            if (this.firework.velocity.y >= 0 ) {
                this.explode();
                this.exploded = true;
            }
        }

        if (this.reappear && this.reappeared < this.reappearLimit && random(1) > 0.9) {
            this.reappeared++;
            switch(this.shapeType) {
                //Draw simple firework
                case (0):
                    for (var i = 0; i < random(20, 600); i++) {
                        var p = new Particle(this.firework.position.x, this.firework.position.y, this.hue, true);
                        this.particles.push(p);
                    }
                    break;
                //Draw heart shaped firework
                case (1):
                    for (var i = 0; i < 100; i++) {
                        var xVel = 16 * pow(sin(i), 3);
                        var yVel = 13 * cos(i) - 5 * cos(2 * i) - 2 * cos(3 * i) - cos(4 * i);
                        var p = new Particle(this.firework.position.x, this.firework.position.y, this.hue, true, xVel, -yVel);
                        this.particles.push(p);
                    }
                    break;
            }
        }
        for (var i = this.particles.length -1; i >= 0; i--) {
            this.particles[i].applyForce(gravity);
            this.particles[i].update();
            if ((this.particles[i].done())) {
                this.particles.splice(i, 1);
            }
        }

    }

    this.explode = function () {

        var randCase = random(1);
        switch(true) {
            //Draw simple firework
            case (randCase < 0.7):
                for (var i = 0; i < random(20, 600); i++) {
                    var p = new Particle(this.firework.position.x, this.firework.position.y, this.hue, true);
                    this.particles.push(p);
                }
                this.shapeType = 0;
                break;
            //Draw heart shaped firework
            case (randCase >= 0.7):
                for (var i = 0; i < 100; i++) {
                    var xVel = 16 * pow(sin(i), 3);
                    var yVel = 13 * cos(i) - 5 * cos(2 * i) - 2 * cos(3 * i) - cos(4 * i);
                    var p = new Particle(this.firework.position.x, this.firework.position.y, this.hue, true, xVel, -yVel);
                    this.particles.push(p);
                }
                this.shapeType = 1;
                break;
        }

        var randVar = random(1);
        if (randVar >= 0.8) {
            this.reappear = true;
        }
    }


    this.show = () => {
        if (!this.exploded) {
            this.firework.show();
        }
        for (var i = 0; i < this.particles.length; i++) {
            this.particles[i].show();
        }

    }
}