/* eslint-disable max-len */
/* global describe, test, expect */

// import {add, subtract} from '../src/index.cjs';
import maths from '../src/index.cjs';

describe('Main', function() {
  test('A first passing test', function() {
    const result_int = maths.add(2, 3);
    expect(result_int).toBe(5);
  });

  test('For full coverage', function() {
    const result_int = maths.subtract(3, 2);
    expect(result_int).toBe(1);
  });
});
