const { expect, db } = require('./utils');
const Server = require('../test3');

const server = new Server(db);

describe('Test 3', function () {

    it('Query users expect array of objects', async () => {
        const { createdAt } = db.users[0];
        const result = await server.find('users', { createdAt: { $ne: createdAt } });
        expect(result instanceof Array).to.be.equal(true);
        expect(result[0] instanceof Object).to.be.equal(true);
    });

    it('Query users expect array of objects', async () => {
        const result = await server.find('users', { createdAt: 874398324432 });
        expect(typeof result).to.be.equal('object');
        expect('message' in result).to.be.equal(true);
        expect('code' in result).to.be.equal(true);
        expect('name' in result).to.be.equal(true);
        expect(result.name).to.be.equal('NotFound');
        expect(result.code).to.be.equal(404);
        expect(result.message).to.be.equal('No data found.');
    });

    it('Query one user expect object', async () => {
        const { id } = db.users[0];
        const result = await server.findOne('users', id);
        expect(!Array.isArray(result) && typeof result === 'object').to.be.equal(true);
        expect(result.id).to.be.equal(id);
    });

    it('Query user with null id', async () => {
        const result = await server.findOne('users', null);
        expect(typeof result).to.be.equal('object');
        expect('message' in result).to.be.equal(true);
        expect('code' in result).to.be.equal(true);
        expect('name' in result).to.be.equal(true);
        expect(result.name).to.be.equal('NotFound');
        expect(result.code).to.be.equal(404);
        expect(result.message).to.be.equal('No data found with the id equal as "null".');
    });

    it('Update org', async () => {
        const name = 'Videsk';
        const { id } = db.orgs[2];
        const result = await server.updateOne('orgs', id, { name });
        expect(!Array.isArray(result) && typeof result === 'object').to.be.equal(true);
        expect(result.id).to.be.equal(id);
        expect(result.name).to.be.equal(name);
    });

    it('Update not found org', async () => {
        const name = 'Videsk';
        const result = await server.updateOne('orgs', null, { name });
        expect(typeof result).to.be.equal('object');
        expect('message' in result).to.be.equal(true);
        expect('code' in result).to.be.equal(true);
        expect('name' in result).to.be.equal(true);
        expect(result.name).to.be.equal('NotFound');
        expect(result.code).to.be.equal(404);
        expect(result.message).to.be.equal('No data for update found with the id equal as "null".');
    });

});
