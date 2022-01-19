import { Hello } from '../src';

test('hello', () => {
  expect(new Hello().sayHello()).toBe('hello, world!');

  expect(new Hello().sayHello('austin')).toBe('hello, austin!');
});