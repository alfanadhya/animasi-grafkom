let spritesheet;
let spritedata;
let animation = [];
let horse;
let bgImg;

function preload() {
    spritedata = loadJSON('horse.json');
    spritesheet = loadImage('horse.png');
    bgImg = loadImage('mipa.jpg');
}

function setup() {
    createCanvas(1200, 600);
    let frames = spritedata.frames;
    for (let i = 0; i < frames.length; i++) {
        let pos = frames[i].position;
        let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
        animation.push(img);
    }
    horse = new Sprite(animation, 0, 0, 0.4);

}

function draw() {
    background(bgImg);
    horse.show();
    horse.animate();
}