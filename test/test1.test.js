const { Server, expect } = require('./utils');
const Test1 = require('../test1');

const server = new Server();

describe('Test 1', function () {

    it('Expect fullname', async () => {
        const name = 'John Doe';
        setTimeout(() => server.events.name(name), 3000);
        const result = await Test1(server);
        expect(result).to.be.equal(name);
    }).timeout(3500);

});
