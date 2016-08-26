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
var shapes = [];
var rings = [];
var texts = [];

// Integer
// var radius = null;

var app = function(){

	selector = 'myCanvas'
	canvas = document.getElementById(selector);
	context = canvas.getContext("2d");
	fillStyles = ['#00a299', '#ffe335', '#f2323c', '#0080cb', '#010100'];
	sizes = [239, 15];
	

	drawCanvas = function(){
		
		// Circle(x, y, radius, fillStyle, strokeStyle, strokeWidth)
		// Rectangle(x, y, width, height, fillStyle, lineWidth, strokeStyle)
		// Polygon(xCenter, yCenter, numberOfSides, size, fillStyle, lineWidth, strokeStyle)

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		centerX = canvas.width / 2;
		centerY = canvas.height / 2;

		// Clip
		clip = new Circle(centerX, centerY, sizes[0], transparent, transparent, '0' );

		shapes.push(new Rectangle(0, 0, canvas.width, canvas.height, fillStyles[0], 0, transparent));
		
		shapes.push(new Polygon( centerX - sizes[0], centerY + sizes[0], '4', sizes[0], fillStyles[1], 0, transparent ));
		shapes.push(new Polygon( centerX - sizes[0], centerY - sizes[0], '4', sizes[0], fillStyles[2], 0, transparent ));
		shapes.push(new Polygon( centerX + sizes[0], centerY + sizes[0], '4', sizes[0], fillStyles[3], 0, transparent ));
		shapes.push(new Polygon( centerX + sizes[0], centerY - sizes[0], '4', sizes[0], fillStyles[4], 0, transparent ));

		texts.push(new Font("30pt Univers-light", ["Baden", centerX - 30, centerY + 50], fillStyles[4]));
		texts.push(new Font("30pt Univers-light", ["Baden", centerX - 30, centerY + 100 ], fillStyles[4]));
		texts.push(new Font("30pt Univers-light", ["1981", centerX - 30, centerY + 150 ], fillStyles[4]));


		rings.push(new Circle(centerX + 0, centerY - 20, sizes[1], transparent, fillStyles[4], 2));
		rings.push(new Circle(centerX + 35, centerY - 20, sizes[1], transparent, fillStyles[4], 2));
		rings.push(new Circle(centerX + 70, centerY - 20, sizes[1], transparent, fillStyles[4], 2));
		rings.push(new Circle(centerX + 17.5, centerY - 7.5, sizes[1], transparent, fillStyles[4], 2));
		rings.push(new Circle(centerX + 52.5, centerY - 7.5, sizes[1], transparent, fillStyles[4], 2));
		
		
		context.save();

			clip.draw(context);
	        context.clip();
			
			for (var i = 0; i < shapes.length; i++) {
				console.log(shapes[i]);

				shapes[i].draw(context);
			}

		context.restore();

		context.save();
			context.translate(0, centerY);
			context.rotate( -45 * Math.PI / 180);

			for (var i = 0; i < texts.length; i++) {
				texts[i].draw(context);
			}

			// RINGS
			for (var i = 0; i < rings.length; i++) {

				rings[i].draw(context);
			}

		context.restore();


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