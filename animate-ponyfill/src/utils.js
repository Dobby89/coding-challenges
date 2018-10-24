/**
 * Returns a string if CSS @keyframes are supported,
 * otherwise a False is returned
 */
export function supportsKeyframe() {
  let supported = false;
  let prefix = "";
  const property = "animationName";
  const testEl = document.createElement("div");
  const prefixes = ["", "Webkit", "Moz", "ms", "O"];

  for (let i = 0; i < prefixes.length; i++) {
    prefix = prefixes[i];
    let prefixProperty = property;
    if (prefix.length) {
      prefixProperty = `${prefix}-${property.charAt(0).toUpperCase() +
        property.substr(1)}`;
    }

    if (testEl.style[prefixProperty] !== undefined) {
      supported = true;
    }
  }

  // Return the prefix string ("Webkit", "Moz", "ms", "O") or false
  return supported ? prefix : false;
}

export function supportsAnimate() {
  return document.documentElement.animate ? true : false;
}

/**
 * Credit: https://www.npmjs.com/package/array-linspace
 *
 * Example usage:
 * linspace(0, 1, 3);
 * [0, 0.5, 1]
 *
 * linspace(0, -1, 5);
 * [0, -0.25, -0.5, -0.75, -1]
 *
 * linspace(0, 1);
 * [0, ..., 1]  (100 values)
 */
export function linspace(x1, x2, n = 100) {
  var z = [];
  for (var i = 0, dx = (x2 - x1) / (n - 1); i < n; i++) {
    z[i] = x1 + i * dx;
  }
  return z;
}
