//---------------------------------------------------------------------------
// adjustiframeheight.js
//     for inner frame document
//---------------------------------------------------------------------------
// Copyright (C) 2013 Kulikala.
//     Licensed under Apache License 2.0
//---------------------------------------------------------------------------


( function ( global ) {

//---------------------------------------------------------------------------
// AdjustHeight
//---------------------------------------------------------------------------
var AdjustHeight = {
	UPDATE_INTERVAL: 500,

	activated: false,

	autoAdjust: ( function () {
		if ( this.activated ) {
			return;
		}
		if ( !( 'parent' in global ) || global.parent === global ) {
			return;
		}
		var isSameOrigin = false;
		var isCrossOrigin = false;
		try {
			/*
			 * This is tricky code to prevent WebKit to raise uncatchable security exception:
			 *     Unsafe JavaScript attempt to access frame with URL http://foo/ from frame
			 *     with URL http://bar/. The frame requesting access has a protocol of 'https',
			 *     the frame being accessed has a protocol of 'http'. Protocols must match.
			 */
			'keys' in Object && Object.keys( global.frameElement );

			isSameOrigin = 'frameElement' in global && global.frameElement && !!global.frameElement.style;
		} catch ( e ) {
			isCrossOrigin = 'postMessage' in global.parent;
		}

		global.document.body.style.overflow = 'hidden';

		var lastHeight = {
			scroll: 0,
			offset: 0
		};
		var adjustHeight = ( function () {
			var currentHeight = {
				scroll: global.document.documentElement.scrollHeight,
				offset: global.document.documentElement.offsetHeight
			};

			var prop;
			if ( currentHeight.scroll != lastHeight.scroll ) {
				prop = 'scroll';
			} else if ( currentHeight.offset < lastHeight.offset ) {
				prop = 'offset';
			}
			if ( prop ) {
				if ( isSameOrigin ) {
					global.frameElement.style.height = currentHeight[ prop ] + 'px';
				} else if ( isCrossOrigin ) {
					// Post message to parent window so that
					// it can handle cross-origin script access
					try {
						global.parent.postMessage( {
							adjustHeight: currentHeight[ prop ]
						}, '*' );
					} catch ( e ) {}
				}

				lastHeight = currentHeight;
			}
		} );

		adjustHeight();
		setInterval( adjustHeight, AdjustHeight.UPDATE_INTERVAL );

		if ( 'addEventListener' in global ) {
			global.addEventListener( 'resize', adjustHeight, false );
		} else if ( 'attachEvent' in global ) {
			global.attachEvent( 'onresize', adjustHeight );
		}

		this.activated = true;
	} )
};


//---------------------------------------------------------------------------
// Export
//---------------------------------------------------------------------------
global.AdjustHeight = AdjustHeight;


//---------------------------------------------------------------------------
// Window load event
//---------------------------------------------------------------------------
if ( 'addEventListener' in global ) {
	global.addEventListener( 'DOMContentLoaded', AdjustHeight.autoAdjust, false );
	global.addEventListener( 'load', AdjustHeight.autoAdjust, false );
} else if ( 'attachEvent' in global ) {
	global.attachEvent( 'onload', AdjustHeight.autoAdjust );
}


//---------------------------------------------------------------------------
// End
//---------------------------------------------------------------------------

} )( window );
