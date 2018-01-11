# Traffic Light Challenge

A traffic light can only have one of three states – **red**, **amber** and **green**. (Ok pedants technically this isn’t entirely accurate, but for the sake of the exercise it is). Its starting state is red.

We can represent this in an object:

```
let lights = {
    possibleState: ['red', 'amber', 'green'],
    currentState: 'red'
};
```

By default in JavaScript we could modify this object maliciously and break the data that supports the correct usage of a traffic light.

The challenge is to use a [Javascript Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) to prevent this from happening and restrict any changes to its `currentState` to one of the values in the `possibleState` array.

Your proxy should throw a console warning if you attempt to set its `currentState` to any other colour.

It should also throw a warning if you try and access (get) any other property than its `currentState`, therefore essentially privatising the `possibleStates` array.

You should have an element on the page that displays the `currentState` of the traffic light. When the traffic light’s `currentState` is changed to an acceptable value, fire a custom DOM event (that you can capture on the window for example), which will trigger the traffic light element to update to the new `currentState`.

You will have to change the `currentState` in the dev console, unless you can be bothered to make another interface to update the value.

