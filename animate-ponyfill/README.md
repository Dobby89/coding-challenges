# AO-Animate

## Task

To write a wrapper around the Web Animations API that provides a suitable fallback for non-supporting browsers.

### Overview

The `Web Animations API` allows CSS Keyframe animations to be defined and triggered via JavaScript. 

Keyframe animations are defined in CSS like so:

```css
@keyframes my-css-animation {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
```
and then attached to an element:

```css
.some-element {
  opacity: 0;
  animation: my-css-animation 9s ease-out 9s;
}
```

The CSS animation property is a shorthand way of combining all the available animation options and translates to:

```css
.some-element {
  opacity: 0;
  animation-name: my-css-animation;
  animation-duration: 9s; 
  animation-timing-function: ease-out; 
  animation-delay: 9s;
}
```

There are additional animation configuration properties that aren't used in the above example:

* animation-direction
* animation-iteration-count
* animation-fill-mode
* animation-play-state

### Why the need for the Web Animations API when I can just use CSS?

The Web Animations API is built to leverage the timing and animation engines within browsers to enable it to provide the most performant animations possible, without the need for excessive code and over reliance on methods such as `requestAnimationFrame`.

Prior to its availability, any animations meant for use at some point after the page has loaded would have to be triggered through the adding and removing of classes from DOM elements. With the Web Animations API you can do away with modifying a DOM element's classList and now directly call its `animate` method, passing in a keyframe configuration and animation settings, to trigger the animation.

### Example usage of the Web Animations API

Let's say you want to use the keyframe animation defined in CSS earlier. 

```css
@keyframes my-css-animation {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
```

First you'd need to create an object to represent that in JavaScript.

```javascript
const keyframes = [
  { opacity: 0 },
  { opacity: 1 },
  { opacity: 1 },
  { opacity: 0 }
];
```

The definition is just an array that contains a bunch of objects with CSS properties and values. The one thing missing from this definition is the timing criteria.

If the above is passed to the Web Animations API, without any additional timing info, it will simply distribute the amount of objects evenly between 0 and 100%, like so:

```css
0% {
  opacity: 0;
}
33% {
  opacity: 1;
}
66% {
  opacity: 1;
}
100% {
  opacity: 0;
}
```

If we add an additional `offset` property to each object (whose value is not a percentage but instead a number between 0 and 1) we can override the above default behaviour.

```javascript
const keyframes = [
  { opacity: 0, offset: 0 },
  { opacity: 1, offset: 0.2 },
  { opacity: 1, offset: 0.9 },
  { opacity: 0, offset: 1 }
];
```

This would produce the equivalent CSS

```css
@keyframes my-css-animation {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
```

You can add multiple CSS properies and values to each object in your array for more complex animations.

```javascript
const keyframes = [
  { opacity: 0, color: '#fff' offset: 0 },
  { opacity: 1, color: '#999', offset: 0.2 },
  { opacity: 1, color: '#333', offset: 0.9 },
  { opacity: 0, color: '#000', offset: 1 }
];
```

Next you'll want to create a configuration for your keyframes. This can set everything listed earlier in the description of CSS animations. The only real changes of note from CSS is the absence of the `animation` prefix for property names, `timing-function` is now referred to as `easing`, `iteration-count` is `iterations` (and the itertaions value `infinite` in CSS needs to be `Infinity` in JavaScript) and all numerical values must be given in milliseconds [see here for exact API details](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect). These differences are important when polyfilling the animate method as they will need to be converted back into a format that CSS recognises.

To recreate the animation options defined in CSS earlier you'd do the following:

```javascript
const options = {
  duration: 9000,
  delay: 9000,
  easing: 'ease-out'
}
```

Now you have your keyframe definition and animation configuration you're ready to rock and roll. So to trigger the animation simply grab the DOM element to animate and call its `animate` method, passing in your definition and config. Easy!

```javascript
const elementToAnimate = document.querySelector('.thing-i-want-to-animate');
elementToAnimate.animate(keyframes, options);
```

### What else can the Web Animations API do?

Ok so the above is nice, but what if we want to have more control over the animation once its underway? Previously we'd be able to start and stop the animation through adding and removing classes and extract animation details through some heavy duty interrogation of CSS properties.

The Web Animations API returns an instance of the `Animation` constructor from a call to `animate` with a bunch of useful methods to make all that stuff trivial.

```javascript
const elementToAnimate = document.querySelector('.thing-i-want-to-animate');
const animation = elementToAnimate.animate(keyframes, options);

// pause
animation.pause();

// play
animation.play();

// reverse
animation.reverse();
```

### What's the downside?

Limited browser support. Some limitations of the API compared to the CSS equivalents. Not much else.

## The Task

Create a wrapper around the Web Animations API with a single and clear rule set.

The overarching goal is:

* to mimic the Web Animations API for browsers that don't support the Web Animations API but support keyframe animations

### The API

The API should provide the following:

* a test to check if the Web Animations API is available
* a test to check if CSS Keyframe animations are available
* an animate method that takes two arguments - the first an array of keyframe data - CSS properties and values including timing data via an offset property, the second an object of animation configuration options
* when animate is called it should return an object that contains a start, pause and cancel method

#### API Requirements

* The API should take an element as an argument and throw if whatever is passed isn't a HTML element or is not in the document
* The API should throw an error if the element doesn't support both the Web Animations API and CSS Keyframe Animations
* If the element supports the Web Animations API, the API should simply return the element
* If the element supports CSS Keyframes but not Web Animation then the animate method should be monkey patched to the element, but *not* via its prototype, and returned
* The keyframe array passed to the animate method should throw if it doesn't have a length greater than 1
* The keyframe array must contain an object with an offset of 0 and an object with an offset of 1 (Firefox throws if it doesn't have start [0] and stop [1] values) and throw if it does not
* Each keyframe option passed *must* contain an offset value and must be in numerical order. The API should throw otherwise
* The animate method should throw if it does not receive an animation configuration object
* The animation config should support duration, delay, iterations and easing properties
* If the animation options config object does not contain a duration property the monkey patched polyfill should throw an error

### Challenge

You will be given three animations from Codepen -

[An animated bird](https://codepen.io/pmk/pen/ByXOOq)  
[A shape shifting accordion effect](https://codepen.io/yemon/pen/WzpXBx)  
[The Star Wars opening crawl](https://codepen.io/TimPietrusky/pen/eHGfj)  

You will pair up with another member of the team and work together to write the API. You will be given a maximum of four hours (two workshops) to work together as a team to tackle the API.

Your job is to create the API and prove it works by converting as many of the above Codepen animations to use it, removing the CSS from them and relying entirely on the JavaScript. The animations must work in Chrome, Firefox and IE10.

After four hours you will pass your API to another pair of developers who will test it with the animations they have used when creating their API.

Unit tests are desirable but, given the time allowance, not compulsory. You have a limited period of time so choose carefully how you spend it, given the often lengthy time setting up build tools can take. You will be expected to present back to the team about how you planned your time, how you worked together, what design decisions you made, and then provide feedback / demo the API you've been passed from another pair of devs.

The team will vote on who wins the challenge based on the quality demonstrated in teamwork, the effectiveness of the API and how appropriately each Codepen animation worked in JavaScript. Good luck!
