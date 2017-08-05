/**
 * Constructor function for creating a
 * particle
 * @param x
 * @param y
 * @constructor
 */
function Particle(x, y, hue, firework) {
    this.hue = hue;
    this.firework = firework;
    this.position = createVector(x, y);
    this.lifespan = 255;

    if (!this.firework) {
        this.velocity = createVector(0, random(-8, -12));
    } else {
        //this will distributed exploded particles
        //in a perfect circle
        this.velocity = p5.Vector.random2D();
        //so add a random magnitude between 1 and 6
        //so that particles doesn't form perfect circle
        this.velocity.mult(random(1, 8));
    }

    this.acceleration = createVector(0, 0);

    //force accumulation
    //force = mass * acceleration
    //I am eliminating mass for simplicity
    this.applyForce = function(force) {
        this.acceleration.add(force);

    }

    this.update = function () {
        //slow down the particle if its a
        //firework explosion particle
        if (this.firework) {
            this.velocity.mult(0.9);
            this.lifespan -= 4;
        }
        //adds acceleration to the velocity
        this.velocity.add(this.acceleration);

        //adds velocity to the position
        this.position.add(this.velocity);

        //clear out acceleration since
        //we need to start for each frame
        //with 0 acceleration
        this.acceleration.mult(0);
    }

    this.done = () => {
        if (this.lifespan < 0) {
            return true;
        } else {
            return false;
        }
    }

    this.show = function() {
        colorMode(HSB)
        if (this.firework) {
            //fades out particle if its firework explosion
            //particle
            strokeWeight(2);
            stroke(this.hue, 255, this.lifespan, this.lifespan);
        } else {
            strokeWeight(4);
            stroke(this.hue, 255, 255);
        }
        point(this.position.x, this.position.y);
    }
}
