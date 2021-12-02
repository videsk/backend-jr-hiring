const Server = require('./server');
const { expect } = require('chai');
const faker = require('faker');
const createDb = require('./db');

module.exports = {
    Server,
    expect,
    faker,
    db: createDb(faker),
}
