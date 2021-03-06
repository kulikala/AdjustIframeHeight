//---------------------------------------------------------------------------
// adjustiframeheight-co.js
//     for parent document
//---------------------------------------------------------------------------
// Copyright (C) 2013 Kulikala.
//     Licensed under Apache License 2.0
//---------------------------------------------------------------------------


( function ( global ) {

//---------------------------------------------------------------------------
// AdjustHeightCO
//---------------------------------------------------------------------------
var AdjustHeightCO = {
	autoAdjust: function ( event ) {
		Array.prototype.slice.call( document.getElementsByTagName( 'iframe' ) ).forEach( ( function ( item ) {
			if ( event.source === item.contentWindow && 'object' == typeof event.data && 'adjustHeight' in event.data ) {
				item.style.height = event.data.adjustHeight + 'px';
			}
		} ) );
	}
};


//---------------------------------------------------------------------------
// Export
//---------------------------------------------------------------------------
global.AdjustHeightCO = AdjustHeightCO;


//---------------------------------------------------------------------------
// Window message event
//---------------------------------------------------------------------------
if ( 'addEventListener' in global ) {
	global.addEventListener( 'message', AdjustHeightCO.autoAdjust, false );
} else if ( 'attachEvent' in global ) {
	global.attachEvent( 'onmessage', AdjustHeightCO.autoAdjust );
}


//---------------------------------------------------------------------------
// End
//---------------------------------------------------------------------------

} )( window );
