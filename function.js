const axios = require('axios');

module.exports = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: (inputName) => {
       return { "name": inputName }
    },
    fetchUser: (userId) => axios
    .get('https://jsonplaceholder.typicode.com/users/' + userId)
    .then(res => res.data)
    .catch(err => 'error')
};