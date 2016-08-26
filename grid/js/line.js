// Line object
function Line(xMoveTo, yMoveTo, xLineTo, yLineTo, lineWidth, strokeStyle) {

    // constructor

    this.xMoveTo = xMoveTo || 0;
    this.yMoveTo = yMoveTo || 0;
    this.xLineTo = xLineTo || 0;
	this.yLineTo = yLineTo || 0;
    this.lineWidth = lineWidth || 0;
    // this.radius = radius || 0;
    // this.fillStyle = fillStyle || 0;
    this.strokeStyle = strokeStyle || transparent;
    // this.strokeWidth = strokeWidth || 0;
}

Line.prototype.draw = function(context) {

    // if(!this.x || !this.y || !this.radius || !this.fillStyle || !this.strokeStyle || !this.strokeWidth ) {
    //     console.error('Circle requires an x, y, radius, fillStyle, strokeStyle and strokeColor');
    //     return;
    // }
    context.beginPath();
    context.moveTo(this.xMoveTo, this.yMoveTo);
    context.lineTo(this.xLineTo, this.yLineTo);
    context.lineWidth = this.lineWidth;
    context.strokeStyle = this.strokeStyle;
  	context.stroke();
};