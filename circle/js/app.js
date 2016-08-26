// CONTROLLER
// String
var canvas = '';
var selector = '';
var context = '';

// Array
var colors = [];
var circles = [];
var radius = [];

// Integer
// var radius = null;

var app = function(){

	selector = 'canvas'
	canvas = document.getElementById(selector);
	context = canvas.getContext("2d");
	colors = ['#f5b223', '#ea6953', '#4297cd', '#e6e1e7'];
	radius = [65, 49, 38, 35, 13]
	
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	// x, y, radius, color
	// var circle = new Circle(240, 210, radius[4], colors[2]);

	drawCircle = function(){
		for (var i = 0; i < 500; i++) {
			
			var circle = new Circle(getRandomInt(0, canvas.width), getRandomInt(0, canvas.height), radius[getRandomInt(0, 5)], colors[getRandomInt(0, 4)]);
			
			circle.draw(context);
		}
	}

	$(window).on('resize', function() {
        resize();
        drawCircle();
    });

    drawCircle();
}

function resize() {
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