import {add, minus} from './lib';
import { test } from '@jest/globals';

test('add two numbers and it should return the total', () => {
    expect(add(2,2)).toBe(4)
    expect(add(5,5)).toBe(10)
    expect(add(23,50)).toBe(73)
    expect(add(1000,4000)).toBe(5000)
})

test('add two numbers and it should return the total', () => {
    expect(add(2,2)).not.toBeNull()
    expect(add(2,2)).not.toBeNaN()
    expect(add(2,2)).not.toBeUndefined()
})