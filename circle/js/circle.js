// Circle object
function Circle(x, y, radius, color) {

    // constructor

    this.x = x || 0;
    this.y = y || 0;
    this.radius = radius || 0;
    this.color = color || 0;

    
    console.log( "x: " + this.x + ", y: " + this.y + ", radius: " + this.radius + ", color: " + this.color);

}

Circle.prototype.draw = function(context) {

    if(!this.x || !this.y || !this.radius || !this.color) {
        console.error('Circle requires an x, y, radius and color');
        return;
    }
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    context.fillStyle = this.color;
    context.fill();

};