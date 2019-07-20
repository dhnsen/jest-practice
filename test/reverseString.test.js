const reverseString = require('../reverseString');

test('reverseString', () => {
    expect(reverseString('hello')).toEqual('olleh');
});