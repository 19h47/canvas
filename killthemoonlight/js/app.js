// CONTROLLER
// String
var canvas = '';
var selector = '';
var context = '';
var transparent = 'rgba(0, 0, 0, 0)';

var centerX = 0;
var centerY = 0;

// Array
var fillStyles = [];
var sizes = [];
var arcs = [];

// Integer
// var radius = null;

var app = function(){

	selector = 'myCanvas'
	canvas = document.getElementById(selector);
	context = canvas.getContext("2d");
	fillStyles = ['#4b4b4d', '#232323'];
	sizes = [239, 15];
	

	drawCanvas = function(){
		
		// Circle(x, y, radius, fillStyle, strokeStyle, strokeWidth)
		// Rectangle(x, y, width, height, fillStyle, lineWidth, strokeStyle)
		// Polygon(xCenter, yCenter, numberOfSides, size, fillStyle, lineWidth, strokeStyle)
		// Line(xMoveTo, yMoveTo, xLineTo, yLineTo, lineWidth, strokeStyle)
		// Arc(x, y, radius, startAngle, endAngle, counterClockwise, lineWidth, strokeStyle, fillStyle)

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		centerX = canvas.width / 2;
		centerY = canvas.height / 2;

		width10 = canvas.width / 10;
		height10 = canvas.height / 10;


		for (var i = 0; i < 1000; i++) {
			arcs.push( new Arc(centerX, centerY, 50 + (i * Math.PI), 1.1 * Math.PI + (i * Math.PI), 1.9 * Math.PI + i, false, 5, fillStyles[0], transparent));
			arcs[i].draw(context);
		}
	}

	drawCanvas();

	$(window).on('resize', function() {
        resize();
        drawCanvas();
    });

}

function resize() {
	console.log('resize');
    this.resetViewportDimensions();
}

function resetViewportDimensions() {
    canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

function getRandomInt(min, max) {
  	min = Math.ceil(min);
  	max = Math.floor(max);
  	return Math.floor(Math.random() * (max - min)) + min;
}

var myapp = new app();