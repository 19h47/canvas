// Circle object
function Circle(x, y, radius, fillStyle, strokeStyle, strokeWidth) {

    // constructor

    this.x = x || 0;
    this.y = y || 0;
    this.radius = radius || 0;
    this.fillStyle = fillStyle || 0;
    this.strokeStyle = strokeStyle || 'transparent';
    this.strokeWidth = strokeWidth || 0;

    
    // console.log( "x: " + this.x + ", y: " + this.y + ", radius: " + this.radius + ", fillStyle: " + this.fillStyle + ", strokeStyle: " + this.strokeStyle + ", strokeWidth: " + this.strokeWidth);

}

Circle.prototype.draw = function(context) {

    if(!this.x || !this.y || !this.radius || !this.fillStyle || !this.strokeStyle || !this.strokeWidth ) {
        console.error('Circle requires an x, y, radius, fillStyle, strokeStyle and strokeColor');
        return;
    }
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    context.fillStyle = this.fillStyle;
    context.fill();
    context.lineWidth = this.strokeWidth;
  	context.strokeStyle = this.strokeStyle;
  	context.stroke();

};