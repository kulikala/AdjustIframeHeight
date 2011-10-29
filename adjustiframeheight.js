//---------------------------------------------------------------------------
// adjustiframeheight.js
//---------------------------------------------------------------------------
// Copyright (C) 2011 Kulikala.
//---------------------------------------------------------------------------


( function () {

//---------------------------------------------------------------------------
// AdjustHeight
//---------------------------------------------------------------------------
var AdjustHeight = {
	activated: false,

	autoAdjust: function () {
		if ( this.activated ) return;
		if ( !window.frameElement ) return;
		
		window.document.body.style.overflow = 'hidden';
		
		var lastHeight = 0;
		var adjustHeight = function () {
			var currentHeight = window.document.documentElement.scrollHeight;
			
			if ( currentHeight != lastHeight ) {
				window.frameElement.style.height = currentHeight + 'px';
				
				lastHeight = currentHeight;
			}
		};
		
		adjustHeight();
		setInterval( adjustHeight, 1000 );
		
		if ( window.addEventListener ) {
			window.addEventListener( 'resize', adjustHeight, false );
		} else {
			window.attachEvent( 'onresize', adjustHeight );
		}
		
		this.activated = true;
	}
};


//---------------------------------------------------------------------------
// Export
//---------------------------------------------------------------------------
window.AdjustHeight = AdjustHeight;


//---------------------------------------------------------------------------
// Window load event
//---------------------------------------------------------------------------
if ( window.addEventListener ) {
	window.addEventListener( 'DOMContentLoaded', AdjustHeight.autoAdjust, false );
	window.addEventListener( 'load', AdjustHeight.autoAdjust, false );
} else {
	window.attachEvent( 'onload', AdjustHeight.autoAdjust );
}


//---------------------------------------------------------------------------
// End
//---------------------------------------------------------------------------

} )();
