function extractColorNumber(str) {
    const match = str.match(/(#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})|rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)|rgb\(\s*\d+\s*%\s*,\s*\d+\s*%\s*,\s*\d+\s*%\s*\))/);
    if (match) {
      let color = match[1].toUpperCase();
      if (color.startsWith("#")) {
        if (color.length === 4) {
          color = "#" + color[1] + color[1] + color[2] + color[2] + color[3] + color[3];
        }
      } else if (color.startsWith("RGB")) {
        const values = color.substring(4, color.length - 1).split(",").map(val => parseInt(val.trim()));
        color = "#" + values.map(val => val.toString(16).padStart(2, "0")).join("");
      }
      return color;
    }
    return null;
  }

console.log(extractColorNumber('border-color: #f34f21'));
console.log(extractColorNumber('border-color: #ff0'));
console.log(extractColorNumber('border-color: rgb(255,255,255)'));
console.log(extractColorNumber('border-color: rgb(50%, 50%, 50%)'));