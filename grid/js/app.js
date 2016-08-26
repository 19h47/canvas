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
var linesTop = [];
var linesRight = [];
var linesBottom = [];
var linesLeft = [];
var rectangles = [];

// Integer
// var radius = null;

var app = function(){

	selector = 'myCanvas'
	canvas = document.getElementById(selector);
	context = canvas.getContext("2d");
	fillStyles = ['#5fc3ff', '#212591'];
	sizes = [239, 15];
	

	drawCanvas = function(){
		
		// Circle(x, y, radius, fillStyle, strokeStyle, strokeWidth)
		// Rectangle(x, y, width, height, fillStyle, lineWidth, strokeStyle)
		// Polygon(xCenter, yCenter, numberOfSides, size, fillStyle, lineWidth, strokeStyle)
		// Line(xMoveTo, yMoveTo, xLineTo, yLineTo, lineWidth, strokeStyle)

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		centerX = canvas.width / 2;
		centerY = canvas.height / 2;

		width10 = canvas.width / 10;
		height10 = canvas.height / 10;

		for (var i = 0; i < 11; i++) {
			linesTop.push(
				new Line(
					width10 * i, 
					0, 
					centerX,
					centerY,
					2, 
					fillStyles[0]
				)
			);

			linesRight.push(
				new Line(
					canvas.width, 
					height10 * i, 
					centerX, 
					centerY, 
					2, 
					fillStyles[0]
				)
			);

			linesBottom.push(
				new Line(
					width10 * i, 
					canvas.height, 
					centerX, 
					centerY, 
					2, 
					fillStyles[0]
				)
			);

			linesLeft.push(
				new Line(
					0, 
					height10 * i, 
					centerX, 
					centerY, 
					2, 
					fillStyles[0]
				)
			);

			rectangles.push( 
				new Rectangle
				(
					(width10 * i) - ((width10 * i) / 2), 
					(height10 * i) / 2, 
					canvas.width - ( width10 * i), 
					canvas.height - ( height10 * i), 
					transparent, 
					2, 
					fillStyles[0]
				)
			);
		}

		// rect0 = new Rectangle(0, 0, canvas.width, canvas.height, transparent, 2, fillStyles[0]);

		// rect0.draw(context);

		for (var i = 0; i < 11; i++) {
			linesTop[i].draw(context);
			linesRight[i].draw(context);
			linesBottom[i].draw(context);
			linesLeft[i].draw(context);

			rectangles[i].draw(context);

		}

		rect1 = new Rectangle(
			centerX - ((width10 - 2)/2), // x
			centerY - ((height10 - 2)/2), // y
			width10 - 2, // width
			height10 - 2, // height
			fillStyles[1], // Background color
			0, // border width
			transparent // border color
		);

		// rect1.draw(context);
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