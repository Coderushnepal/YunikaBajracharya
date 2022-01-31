var defaultBallSize = 50;
var containerSize = 700;

function position(size) {
    return {
        top: parseInt(Math.random()*size),
        left: parseInt(Math.random() * size),
    };
}

var container = new Container(containerSize);
container.create(document.body);
console.log(container.element);

for (var i = 0; i < 10; i++) {
    var ball = new Ball(defaultBallSize, i);
    ball.create(container.element, position(containerSize - defaultBallSize));
}