AdjustIframeHeight
===========================

## Summary

An extra light weight pure JavaScript library to automatically adjust
the iframe height to its contents height. What you need is just write
a script tag to load adjustiframeheight.js in the inner page.
Supports periodical updates of the height of the iframe.


## Browser Support

* Almost all modern browsers
	Tested manually on
	* Firefox 7, 8
	* Chrome 14
	* Safari 5
	* Opera 11.50
	* IE 8, 9


## Usage

* Set a script tag in your html to load adjustiframeheight.js or minified version.

-- The outer page --

	<html>
	<head>
	</head>
	<body>
		...
		<iframe src="( the url to the inner page )"></iframe>
		...
	</body>
	</html>


-- The inner page --

	<html>
	<head>
		...
		<script type="text/javascript" src="adjustiframeheight.js"></script>
		...
	</head>
	<body>
		...
	</body>
	</html>

* That's all.


## Note

* This script will NOT work if the inner page of the iframe comes from another domain.

* Google Chrome will throw security error when either the outer page
  or the inner page comes from local, i.e. the protocol is file:.
  This script works fine with local files in Firefox, Safari, Opera, and IE.


## Version

* v1.0 / 2011-10-29
	Initial release.


## License - "Apache License 2.0"

See [LICENSE](https://github.com/kulikala/AdjustIframeHeight/blob/master/LICENSE)

Copyright (C) 2011 Kulikala.
