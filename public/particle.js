/**
 * Constructor function for creating a
 * particle
 * @param x
 * @param y
 * @constructor
 */
function Particle(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, random(-8, -12));
    this.acceleration = createVector(0, 0);

    //force accumulation
    //force = mass * acceleration
    //I am eliminating mass for simplicity
    this.applyForce = function(force) {
        this.acceleration.add(force);

    }

    this.update = function () {
        //adds acceleration to the velocity
        this.velocity.add(this.acceleration);

        //adds velocity to the position
        this.position.add(this.velocity);

        //clear out acceleration since
        //we need to start for each frame
        //with 0 acceleration
        this.acceleration.mult(0);
    }

    this.show = function() {
        point(this.position.x, this.position.y);
    }
}
