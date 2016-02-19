# share-popups

> Turn any DOM element into a share button


## Installation

### Bower

```bower install --save share-popups```

### NPM

```npm install --save-dev share-popups```

## Getting started

Add the `data-share` attribute to any DOM element:

```html
<a href="#" data-share="facebook">Share on Facebook</a>
<a href="#" data-share="twitter">Share on Twitter</a>
<a href="#" data-share="linkedin">Share on Linkedin</a>
<a href="#" data-share="googleplus">Share on Google+</a>
```

Twitter allows more parameters to be passed, all options are being used below:

```html
<a href="#"
   data-share="twitter"
   data-text="Tweet text"
   data-hashtags="hashtag"
   data-via="sumocoders">
    Share on Twitter
</a>
```

The default link being shared is the current page. It can be changed with the data-url parameter:

```html
<a href="#" data-share="facebook" data-url="https://www.github.com">Share on Facebook</a>
```
