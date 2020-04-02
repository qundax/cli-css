// Arguments from command line

const myArgs = process.argv;



// Helper fucntions

const conversion = require("./modules/conversion.js");



// Display

if (myArgs[2] === "hex") {
  let hexColour = myArgs[3].slice(1);
  let rgb = conversion.hexToRgb(hexColour);
  let hsl = conversion.hexToHsl(hexColour);
  console.log(rgb);
  console.log(hsl);
} else if (myArgs[2] === "rgb") {
  let rgbColour = [parseInt(myArgs[3]), parseInt(myArgs[4]), parseInt(myArgs[5])];
  let hex = conversion.rgbToHex(rgbColour[0], rgbColour[1], rgbColour[2]);
  let hsl = conversion.rgbToHsl(rgbColour[0], rgbColour[1], rgbColour[2]);
  console.log(`\x1b[38;2;${parseInt(myArgs[3])};${parseInt(myArgs[4])};${parseInt(myArgs[5])}m%s\x1b[0m`, hex);
  console.log(`\x1b[38;2;${parseInt(myArgs[3])};${parseInt(myArgs[4])};${parseInt(myArgs[5])}m%s\x1b[0m`, hsl);
}