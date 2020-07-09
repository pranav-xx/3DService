const faker = require('faker');

module.exports = (threshold) => {
    const users = [];
    for (let i = 1; i<= threshold; i++) {
        users.push({
            id: i,
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            image: faker.image.people(), 
        });
    }
    return users;
};
