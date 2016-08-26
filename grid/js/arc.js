// Arc object
function Arc(x, y, radius, startAngle, endAngle, counterClockwise, lineWidth, strokeStyle) {

    // constructor

    this.x = x || 0;
    this.y = y || 0;
    this.radius = radius || 0;
    this.startAngle = startAngle || 0;
    this.endAngle = endAngle || 0;
    this.counterClockwise = counterClockwise || false;
    this.lineWidth = lineWidth || 0;
    this.strokeStyle = strokeStyle || 0;

    
    // console.log( "x: " + this.x + ", y: " + this.y + ", radius: " + this.radius + ", fillStyle: " + this.fillStyle + ", strokeStyle: " + this.strokeStyle + ", strokeWidth: " + this.strokeWidth);

}

Arc.prototype.draw = function(context) {

    context.beginPath();
    context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.counterClockwise);
    context.fill();
    context.lineWidth = this.lineWidth;
  	context.strokeStyle = this.strokeStyle;
  	context.stroke();

};