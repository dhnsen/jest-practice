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

test('fetchUser', () => {
    expect.assertions(1);
    return functions.fetchUser(1)
    .then(data => {
        expect(data).toEqual({
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
              "street": "Kulas Light",
              "suite": "Apt. 556",
              "city": "Gwenborough",
              "zipcode": "92998-3874",
              "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
              }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
              "name": "Romaguera-Crona",
              "catchPhrase": "Multi-layered client-server neural-net",
              "bs": "harness real-time e-markets"
            }
          })
    })
})