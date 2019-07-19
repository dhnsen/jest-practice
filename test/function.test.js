const functions = require('../function');

test('add', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('isNull', () => {
    expect(functions.isNull()).toBeNull();
});

test('checkValue', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

test('function.createUser', () => {
    expect(functions.createUser('Dan')).toEqual({ name: 'Dan' });
});