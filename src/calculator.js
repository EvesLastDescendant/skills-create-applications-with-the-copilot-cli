/*
 * Calculator module
 * Supported operations:
 * - add: addition (a + b)
 * - sub: subtraction (a - b)
 * - mul: multiplication (a * b)
 * - div: division (a / b)
 *
 * This module provides the basic arithmetic functions and a compute() helper
 * that accepts either operation names (add, sub, mul, div) or symbols (+, -, *, /).
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

function compute(op, aRaw, bRaw) {
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
  compute,
};
