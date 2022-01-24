var container = document.createElement("div");
document.body.appendChild(container);

var heading = document.createElement("h1");
container.appendChild(heading);
heading.innerHTML = "Getting Started with Animations in JS";
heading.style = `
    margin: 50px auto;
    text-align: center;
`

var wrapper = document.createElement("div");
container.appendChild(wrapper);
wrapper.style = `
    width: 600px;
    height: 400px;
    position: relative;
    margin: 0px auto;
    background-color: black;
`;

var ball = document.createElement("div");
wrapper.appendChild(ball);
ball.style = `
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    top: 100px;
    left: 200px;
    background-color: #FFC900;
    padding: 15px;
`;
ball.innerHTML = "click";

ball.addEventListener("click", function (event) {
    ball.innerHTML = "";
    var direction = 1;
    var interval = setInterval(function() {
        var newTop = parseInt(event.target.style.top) + 5 * direction + "px";
        event.target.style.top = newTop;
        if(parseInt(newTop) >= wrapper.clientHeight - ball.clientHeight) {
            direction *= -1;
        }
        if (parseInt(newTop) <= 0) {
            direction = 1;
        }

        var newLeft = parseInt(event.target.style.left) + 5 * direction + "px";
        event.target.style.left = newLeft;
        if(parseInt(newLeft) >= wrapper.clientWidth - ball.clientWidth) {
            console.log(wrapper.clientWidth, ball.clientHeight);
            direction *= -1;
        }
        if (parseInt(newLeft) <= 0) {
            direction = 1;
        }
    }, 1000 / 60);
});