AdjustIframeHeight
===========================

## Summary

An extra light weight pure JavaScript library to automatically adjust
the iframe height to its contents height.

What you need is just write a script tag to load adjustiframeheight.js in the inner page.

Supports periodical updates of the height of the iframe.


## Browser Support

* Firefox 6.0+
* Chrome 5+
* Safari 5+
* Opera 10.60+
* IE 8+


## Usage

* Set a script tag in your html to load adjustiframeheight.js or minified version.

-- The outer page --

```
	<html>
	<head>
		...
	</head>
	<body>
		...
		<iframe src="( the relative url to the inner page )"></iframe>
		...
	</body>
	</html>
```


-- The inner page --

```
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
```

* That's all.


## Note

* You need to load aajustiframeheight-co.js in the outer page
  if the inner page of the iframe comes from another domain.
  See the section below.

* Google Chrome will throw security error when either the outer page
  or the inner page comes from local, i.e. the protocol is file:.
  This script works fine with local files in Firefox, Safari, Opera, and IE.

* Do not set margin to the root html element of the inner page.
  This script cannot handle the margin except Firefox.


## For cross-origin iframes

* Load adjustiframeheight-co.js in the outer page.

-- The outer page --

```
	<html>
	<head>
		...
		<script type="text/javascript" src="adjustiframeheight-co.js"></script>
		...
	</head>
	<body>
		...
		<iframe src="( the absolute url of the inner page )"></iframe>
		...
	</body>
	</html>
```


## Sample

* See [Sample](https://github.com/kulikala/AdjustIframeHeight/blob/master/sample/outer.html)


## Version

* v2.0 / 2013-03-11
	* Supported cross-origin iframes.
	* Added sample html files.

* v1.0.1 / 2011-11-02
	* Modified the height calculating logic so that the iframe can shrink
	  its height when the content shrunk.

* v1.0 / 2011-10-29
	* Initial release.


## License - "Apache License 2.0"

See [LICENSE](https://github.com/kulikala/AdjustIframeHeight/blob/master/LICENSE)

Copyright (C) 2013 Kulikala.
