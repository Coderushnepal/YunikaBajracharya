var defaultBallSize = 30;
var containerSize = 500;
var containerWidth = 800;

function position(size) {
    return {
        top: parseInt(Math.random()*size),
        left: parseInt(Math.random() * size),
    };
}

var back = document.body.style.background = "radial-gradient(circle farthest-side, #1D23D2, rgb(16,22,36))";
document.appendChild = "back";

var container = new Container(containerSize, containerWidth);
container.create(document.body);
console.log(container.element);

for (var i = 0; i < 15; i++) {
    var ball = new Ball(defaultBallSize, i);
    ball.create(container.element, position(containerSize - defaultBallSize - 24));
}