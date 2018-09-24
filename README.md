# SwiperJS
A Vanilla Javascript function to trigger functions on swipe event. 

This is useful if you want to trigger some action upon swiping a DOM element, works both for Web and Mobile devices.

### Basic Usage

```javascript
var sw = new Swiper(callback, elementId, direction);
```

| Property | Default | Type | Description |
|---|---|---|---|
|callback| `undefined` | `function` |A function to be triggered when the specified event occurs.|
|elementId| `undefined` | `string` |The id of the DOM element to be swiped.|
|direction| `right` | `string` |The direction of the swipe: `left` or `right`. |

### Example
```javascript
function testAlert(){
    alert("This is an alert!");
}

//Swipe Right
var swr = new Swiper(testAlert, 'myDOMElement', 'right');

//Swipe Left
var swl = new Swiper(testAlert, 'myDOMElement', 'left');
```

### License 

The MIT License (MIT)





