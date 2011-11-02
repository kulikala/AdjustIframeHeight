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
		
		var lastHeight = {
			scroll: 0,
			offset: 0
		};
		var adjustHeight = function () {
			var currentHeight = {
				scroll: window.document.documentElement.scrollHeight,
				offset: window.document.documentElement.offsetHeight
			};
			
			var prop;
			if ( currentHeight.scroll != lastHeight.scroll ) {
				prop = 'scroll';
			} else if ( currentHeight.offset < lastHeight.offset ) {
				prop = 'offset';
			}
			if ( prop ) {
				window.frameElement.style.height = currentHeight[ prop ] + 'px';
				
				lastHeight = currentHeight;
			}
		};
		
		adjustHeight();
		setInterval( adjustHeight, 500 );
		
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
