/**
 * Constructor function for containing
 * all the firework particles and logic
 * @constructor
 */
function Firework() {
    this.hue = random(255)
    this.firework = new Particle(random(width), height, this.hue);
    this.particles = [];
    this.exploded = false;

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
        for (var i = this.particles.length -1; i >= 0; i--) {
            this.particles[i].applyForce(gravity);
            this.particles[i].update();
            if ((this.particles[i].done())) {
                this.particles.splice(i, 1);
            }
        }

    }

    this.explode = function () {
        for (var i = 0; i < 50; i++) {
            var p = new Particle(this.firework.position.x, this.firework.position.y, this.hue, true);
            this.particles.push(p);
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