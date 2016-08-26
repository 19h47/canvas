// CONTROLLER
// String
var canvas = '';
var selector = '';
var context = '';

var centerX = 0;
var centerY = 0;

// Array
var fillStyles = [];
var radius = [];

// Integer
// var radius = null;

var app = function(){

	selector = 'myCanvas'
	canvas = document.getElementById(selector);
	context = canvas.getContext("2d");
	fillStyles = ['rgba(0, 0, 0, 0', '#fcab39', '#cf6b19', '#ffffff', '#916340'];
	
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	centerX = canvas.width / 2;
	centerY = canvas.height / 2;

	drawCanvas = function(){

		// Clip
		circleClip = new Circle(centerX, centerY, 211, fillStyles[0], fillStyles[0], 1 )
		
		circle0 = new Circle(centerX + 50, centerY, 180, fillStyles[0], fillStyles[4], 5);
		circle1 = new Circle(centerX, centerY, 180, fillStyles[0], fillStyles[1], 60);
		circle2 = new Circle(centerX, centerY, 210, fillStyles[0], fillStyles[2], 1);
		circle3 = new Circle(centerX, centerY, 180, fillStyles[0], fillStyles[2], 1);
		circle4 = new Circle(centerX, centerY, 150, fillStyles[3], fillStyles[2], 1);
		
		// Horizontal
		line1 =  new Line(0, centerY, canvas.height, centerY);
		// Vertical
		line2 =  new Line(centerX, 0, centerX, canvas.height);
		line3 =  new Line(0, centerY / 2, centerX, centerY);
		line4 =  new Line(0, ( centerY / 2 ) * 3, centerX, centerY);


		context.save();

		circleClip.draw(context);
        context.clip();

		circle1.draw(context);
		circle2.draw(context);
		circle3.draw(context);
		line1.draw(context);
		line2.draw(context);
		line3.draw(context);
		line4.draw(context);
		circle4.draw(context);

		context.restore();

		circle0.draw(context);
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