const { Server, expect, db } = require('./utils');
const Test2 = require('../test2');

const server = new Server();

server.db = db.users;

describe('Test 2', function () {

    it('Expect callback returned value as object', async () => {
        const output = await Test2(server, { createdAt: { $gte: server.db[0].createdAt } }).catch(e => e);
        expect(Array.isArray(output)).to.be.equal(true);
    }).timeout(4000); // API do hard work

    it('Expect callback returned value as NotFound', async () => {
        const output = await Test2(server, { sha: 'no-valid-sha' }).catch(e => e);
        expect(typeof output).to.be.equal('object');
        expect('message' in output).to.be.equal(true);
        expect('code' in output).to.be.equal(true);
        expect('name' in output).to.be.equal(true);
        expect(output.name).to.be.equal('NotFound');
        expect(output.code).to.be.equal(404);
        expect(output.message).to.be.equal('No data found.');
    }).timeout(4000); // API do hard work

    it('Expect callback returned value as ServerError with simulated error in database', async () => {
        server.crashed = true;
        const output = await Test2(server, { sha: 'no-valid-sha' }).catch(e => e);
        expect(typeof output).to.be.equal('object');
        expect('message' in output).to.be.equal(true);
        expect('code' in output).to.be.equal(true);
        expect('name' in output).to.be.equal(true);
        expect(output.name).to.be.equal('ServerError');
        expect(output.code).to.be.equal(500);
        expect(output.message).to.be.equal('Error in database.');
        server.crashed = false;
    }).timeout(4000); // API do hard work

});
