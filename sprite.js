class Sprite {
    constructor(animation, x, y, speed) {
        this.x = x;
        this.y = y;
        this.animation = animation;
        this.speed = speed;
        this.len = this.animation.length;
        this.index = 0;
    }

    show() {
        image(this.animation[floor(this.index % this.len)], this.x, this.y);
    }
    animate() {
        this.index += 0.23;
        this.x += 0.7;
        this.y = (Math.sin(this.x * Math.PI / 180) * -125) + 200;
    }
}