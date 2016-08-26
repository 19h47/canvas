// Font object
function Font(font, fillText, fillStyle) {
    // constructor
    if( arguments.length !== 3 )
    {
    	return;
    }

    this.font = font || '';
    this.fillText = fillText || [];
    this.fillStyle = fillStyle || '';

}

Font.prototype.draw = function(context) {
    // console.log('Font.draw');

    context.font = this.font;
    context.fillStyle = this.fillStyle;
    context.fillText.apply( context, this.fillText);

};