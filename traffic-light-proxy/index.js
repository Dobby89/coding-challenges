let lights = {
    possibleState: ['red', 'amber', 'green'],
    currentState: 'red'
};

let lightsValidator = {
    get: function(obj, prop) {
        if (prop !== 'currentState') {
            console.warn(`You cannot access "${prop}". Only "currentState" is readable.`);
            return;
        } else {
            return obj[prop];
        }
    },
    set: function(obj, prop, value) {
        if (prop === 'currentState') {
            if (obj.possibleState.includes(value)) {
                obj[prop] = value;
                window.dispatchEvent(new CustomEvent('lightChanged'));
                return true;
            }
        }

        console.warn(`"${value}" does not exist in possibleState array.`);
        return;
    }
}

const lightsProxy = new Proxy(lights, lightsValidator);

// Initial values
console.log('lightsProxy.currentState:', lightsProxy.currentState);
console.log('lightsProxy.possibleState:', lightsProxy.possibleState);

// Update DOM
let status = document.getElementById('status');
console.log(status);
status.innerHTML = lightsProxy.currentState;
window.addEventListener('lightChanged', function(evt) {
    status.innerHTML = lightsProxy.currentState;
});
