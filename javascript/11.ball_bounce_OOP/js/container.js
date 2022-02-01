function Container(size) {
  this.size = size;

  this.create = function (parent) {
    this.element = document.createElement("div");
    this.element.style.width = this.size + "px";
    this.element.style.height = this.size + "px";
    this.element.style.borderBottom = "5px solid blue";
    this.element.style.borderRadius = "50px";
    this.element.style.margin = "0 auto";
    this.element.style.position = "relative";

    parent.appendChild(this.element);
  };
}