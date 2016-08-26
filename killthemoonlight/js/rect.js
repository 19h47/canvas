// Rectangle object
function Rectangle(x, y, width, height, fillStyle, lineWidth, strokeStyle) {
    // constructor
    if( arguments.length !== 7 )
    {
    	return;
    }

    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 0;
    this.height = height || 0;
    this.fillStyle = fillStyle || transparent; 
    this.lineWidth = lineWidth || 0;
    this.strokeStyle = strokeStyle || transparent;
}

Rectangle.prototype.draw = function(context) {

    context.beginPath();
    context.rect(this.x, this.y, this.width, this.height);
    context.fillStyle = this.fillStyle;
    context.fill();
    context.lineWidth = this.lineWidth;
  	context.strokeStyle = this.strokeStyle;
  	context.stroke();

};