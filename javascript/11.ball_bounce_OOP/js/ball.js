function Ball(size, id) {
    this.width = size;
    this.height = size;
  
    this.id = id;
  
    this.create = function (container, position) {
        this.element = document.createElement("div");
        this.element.setAttribute("id", this.id);
    
        this.element.style.width = this.width + "px";
        this.element.style.height = this.height + "px";
        this.element.style.borderRadius = "50%";
        this.element.style.background = "red";
        this.element.style.cursor = "pointer";
        this.element.style.position = "absolute";
        this.element.style.top = position.top + "px";
        this.element.style.left = position.left + "px";
        this.element.innerHTML = "click";
        this.element.style.padding = "12px";
    
        this.element.addEventListener("click", function (event) {
            event.target.innerHTML = "";
            event.target.style.background = "gold";
            console.log(this.id);
            var directionTop = 1;
            var directionLeft = 1;

            var interval = setInterval(function() {
                var newTop = parseInt(event.target.style.top) + 5 * directionTop + "px";
                event.target.style.top = newTop;
                if(parseInt(newTop) >= containerSize - defaultBallSize - 24) {
                    directionTop *= -1;
                }
                if (parseInt(newTop) <= 0) {
                    directionTop = 1;
                }

                var newLeft = parseInt(event.target.style.left) + 5 * directionLeft + "px";
                event.target.style.left = newLeft;
                if(parseInt(newLeft) >= containerWidth - defaultBallSize - 24) {
                    directionLeft *= -1;
                }
                if(parseInt(newLeft) <= 0) {
                    directionLeft = 1;
                }

            }, 1000/60);
        });  
        
        container.appendChild(this.element);
    };
}