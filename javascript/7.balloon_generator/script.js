var hippoImg = document.createElement("img");
hippoImg.setAttribute("src", "img/hippoImg.png");
document.body.append(hippoImg);
hippoImg.className = "hippoImg";

var button = document.createElement("button");
button.innerHTML = "Generate Balloons"
document.body.append(button);

var balloonBox = document.createElement("div");
document.body.append(balloonBox);
balloonBox.className = "balloonBox";

button.addEventListener('click', function(event) {
    var balloons = document.createElement("div");
    balloonBox.append(balloons);

    balloons.style.borderRadius = "50%";
    balloons.style.height = "50px";
    balloons.style.width = "50px";
    balloons.style.position = "absolute";
    balloons.style.top = 550 * Math.random() + "px";
    balloons.style.left = 750 * Math.random() + "px";

    function generateRandomColor() {
        var myRandomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        return myRandomColor;
    }
    balloons.style.backgroundColor = generateRandomColor();
    
    var girlImg = document.createElement("img");
    girlImg.setAttribute("src", "img/balloon.png");
    document.body.append(girlImg);
    girlImg.className = "girlImg";
});





