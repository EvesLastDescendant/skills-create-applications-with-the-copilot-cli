const { add, sub, mul, div, modulo, power, squareRoot, compute } = require('../calculator');

describe('calculator basic operations', () => {
  test('addition using add and +', () => {
    expect(add(2, 3)).toBe(5);
    expect(compute('add', '2', '3')).toBe(5);
    expect(compute('+', '2', '3')).toBe(5);
  });

  test('subtraction using sub and -', () => {
    expect(sub(10, 4)).toBe(6);
    expect(compute('sub', '10', '4')).toBe(6);
    expect(compute('-', '10', '4')).toBe(6);
  });

  test('multiplication using mul and * and x', () => {
    expect(mul(45, 2)).toBe(90);
    expect(compute('mul', '45', '2')).toBe(90);
    expect(compute('*', '45', '2')).toBe(90);
    expect(compute('x', '45', '2')).toBe(90);
  });

  test('division using div and /', () => {
    expect(div(20, 5)).toBe(4);
    expect(compute('div', '20', '5')).toBe(4);
    expect(compute('/', '20', '5')).toBe(4);
  });

  test('division by zero throws', () => {
    expect(() => div(1, 0)).toThrow(/Division by zero/);
    expect(() => compute('/', '1', '0')).toThrow(/Division by zero/);
  });

  test('invalid numeric input throws', () => {
    expect(() => compute('+', 'a', '1')).toThrow(/Invalid number/);
    expect(() => compute('*', '2', 'b')).toThrow(/Invalid number/);
  });

  test('supports floating point numbers', () => {
    expect(compute('+', '1.5', '2.25')).toBeCloseTo(3.75);
    expect(compute('/', '7', '2')).toBeCloseTo(3.5);
  });

  test('modulo operation', () => {
    expect(modulo(5, 2)).toBe(1);
    expect(compute('mod', '5', '2')).toBe(1);
    expect(compute('%', '5', '2')).toBe(1);
  });

  test('power operation', () => {
    expect(power(2, 3)).toBe(8);
    expect(compute('pow', '2', '3')).toBe(8);
    expect(compute('^', '2', '3')).toBe(8);
  });

  test('square root operation and edge cases', () => {
    expect(squareRoot(16)).toBe(4);
    expect(compute('sqrt', '16')).toBe(4);
    expect(() => squareRoot(-1)).toThrow(/Square root of negative number/);
    expect(() => compute('sqrt', '-9')).toThrow(/Square root of negative number/);
  });
});
