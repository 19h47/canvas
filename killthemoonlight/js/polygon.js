// http://scienceprimer.com/drawing-regular-polygons-javascript-canvas
function Polygon(xCenter, yCenter, numberOfSides, size, fillStyle, lineWidth, strokeStyle){
	// constructor
    if( arguments.length !== 7 )
    {
    	console.log('error');
    	return;
    }

    this.xCenter = xCenter || 0;
    this.yCenter = yCenter || 0;
    this.numberOfSides = numberOfSides || 0;
    this.size = size || 0; 
    this.fillStyle = fillStyle || transparent;
    this.lineWidth = lineWidth || 0;
    this.strokeStyle = strokeStyle || transparent;
}

Polygon.prototype.draw = function(context) {

	context.beginPath();
	context.moveTo (this.xCenter + this.size * Math.cos(0), this.yCenter + this.size * Math.sin(0));          
	 
	for (var i = 1; i <= this.numberOfSides;i += 1) {
	    context.lineTo (
	    	this.xCenter + this.size * Math.cos(i * 2 * Math.PI / this.numberOfSides), 
	    	this.yCenter + this.size * Math.sin(i * 2 * Math.PI / this.numberOfSides)
	    );
	}
	context.fillStyle = this.fillStyle;
    context.fill();
	context.strokeStyle = this.strokeStyle;
	context.lineWidth = this.lineWidth;
	context.stroke();
};