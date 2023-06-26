let canvas = document.getElementById('canvas');

let context = canvas.getContext('2d');

var window_width = window.innerWidth;
var window_height = window.innerHeight;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.backgroundColor = '#ff8';

class Circle {
    constructor(xpos, ypos, radius, color) {
        this.xpos = xpos
        this.ypos = ypos
        this.radius = radius
        this.color = color
    }
    draw(context) {
        context.beginPath();
        context.lineWidth = 10;
        context.strokeStyle = this.color;
        context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
        context.stroke();
        context.closePath();
    }
}

let all_Circles = [];

function createCircle(circle) {
    circle.draw(context);
}


for(let amount = 0; amount <= 50; amount++) {
    let random_x = Math.random() * window_width;
    let random_y = Math.random() * window_height;
    let circle = new Circle(random_x, random_y, 100, 'black');
    all_Circles.push(circle);
    createCircle(all_Circles[amount]);
}