/*
 * Calculator module
 * Supported operations:
 * - add: addition (a + b)
 * - sub: subtraction (a - b)
 * - mul: multiplication (a * b)
 * - div: division (a / b)
 * - modulo: remainder (a % b)
 * - power: exponentiation (base ** exponent)
 * - squareRoot: square root (unary)
 *
 * This module provides the basic arithmetic functions and a compute() helper
 * that accepts operation names or common symbols. squareRoot is unary and only
 * requires one argument.
 */

function parseNumber(value) {
  const n = Number(value);
  if (Number.isNaN(n)) {
    throw new Error(`Invalid number: ${value}`);
  }
  return n;
}

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

function modulo(a, b) {
  if (b === 0) throw new Error('Modulo by zero');
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) throw new Error('Square root of negative number');
  return Math.sqrt(n);
}

function compute(op, aRaw, bRaw) {
  // Handle unary sqrt operation separately
  if (op === 'sqrt' || op === 'squareRoot' || op === '√') {
    const a = parseNumber(aRaw);
    return squareRoot(a);
  }

  const a = parseNumber(aRaw);
  const b = parseNumber(bRaw);

  switch (op) {
    case 'add':
    case '+':
      return add(a, b);
    case 'sub':
    case '-':
      return sub(a, b);
    case 'mul':
    case 'x':
    case 'X':
    case '*':
      return mul(a, b);
    case 'div':
    case '/':
      return div(a, b);
    case 'mod':
    case 'modulo':
    case '%':
      return modulo(a, b);
    case 'pow':
    case 'power':
    case '^':
    case '**':
      return power(a, b);
    default:
      throw new Error(`Unsupported operation: ${op}`);
  }
}

module.exports = {
  parseNumber,
  add,
  sub,
  mul,
  div,
  modulo,
  power,
  squareRoot,
  compute,
};
