export function sin(x) {
    return Math.sin(x);
  }
  
export function cos(x) {
    return Math.cos(x);
  }
  
export function tan(x) {
    return Math.tan(x);
  }
  
export function pow(x, y) {
    return Math.pow(x, y);
  }
  
export function sqrt(x) {
    return Math.sqrt(x);
  }
  
export function log(x) {
    return Math.log(x);
  }
  
export function log10(x) {
    return Math.log10(x);
  }
  
export function abs(x) {
    return Math.abs(x);
  }
  
export function factorial(x) {
    if (x < 0) {
      return NaN;
    }
    if (x === 0) {
      return 1;
    }
    let result = 1;
    for (let i = 1; i <= x; i++) {
      result *= i;
    }
    return result;
  }
  