// Helper functions

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return `rgb( ${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)} )`;
}

function rgbToHsl(r, g, b) {
  let rPrime = r/255;
  let gPrime = g/255;
  let bPrime = b/255;
  let cMax = Math.max(rPrime, gPrime, bPrime);
  let cMin = Math.min(rPrime, gPrime, bPrime);
  let delta = cMax - cMin;

  let h;
  let s;
  let l = Math.round((cMax + cMin) / 2 * 100);

  if (delta === 0) {
    h = 0;
  } else if (cMax === rPrime) {
    h = Math.round(60 * ((gPrime - bPrime) / delta) % 6);
  } else if (cMax === gPrime) {
    h = Math.round(60 * ((bPrime - rPrime) / delta + 2));
  } else if (cMax === bPrime) {
    h = Math.round(60 * ((rPrime - gPrime) / delta + 4));
  }

  if (h < 0) {
    h += 360;
  }

  if (delta === 0) {
    s = 0;
  } else {
    s = Math.round(delta / (1 - Math.abs(2*l/100 - 1)) * 100);
  }

  return `hsl( ${h}°, ${s}%, ${l}% )`;
}

function hexToHsl(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  let r = parseInt(result[1], 16);
  let g = parseInt(result[2], 16);
  let b = parseInt(result[3], 16);


  let rPrime = r/255;
  let gPrime = g/255;
  let bPrime = b/255;
  let cMax = Math.max(rPrime, gPrime, bPrime);
  let cMin = Math.min(rPrime, gPrime, bPrime);
  let delta = cMax - cMin;

  let h;
  let s;
  let l = Math.round((cMax + cMin) / 2 * 100);

  if (delta === 0) {
    h = 0;
  } else if (cMax === rPrime) {
    h = Math.round(60 * ((gPrime - bPrime) / delta) % 6);
  } else if (cMax === gPrime) {
    h = Math.round(60 * ((bPrime - rPrime) / delta + 2));
  } else if (cMax === bPrime) {
    h = Math.round(60 * ((rPrime - gPrime) / delta + 4));
  }

  if (h < 0) {
    h += 360;
  }

  if (delta === 0) {
    s = 0;
  } else {
    s = Math.round(delta / (1 - Math.abs(2*l/100 - 1)) * 100);
  }

  return `hsl( ${h}°, ${s}%, ${l}% )`;
}



// Export methods

module.exports = {componentToHex, rgbToHex, hexToRgb, rgbToHsl, hexToHsl};