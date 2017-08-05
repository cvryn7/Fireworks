/**
 * Constructor function for containing
 * all the firework particles and logic
 * @constructor
 */
function Firework() {
    this.firework = new Particle(random(width), height);
    this.update = () => {
        if (this.firework) {
            this.firework.applyForce(gravity);
            this.firework.update();

            //remove the element if its velocity gets
            //positive i.e. it starts moving in positive y direction
            if (this.firework.velocity.y >= 0 ) {
                this.firework = null;
            }
        }


    }

    this.show = () => {
        if (this.firework) {
            this.firework.show();
        }
    }
}