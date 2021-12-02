const sift = require('sift');
const { ServerError } = require('./errors');

class Server {

    constructor() {
        this.events = {};
        this.db = [];
        this.crashed = false;
    }

    on(event, callback) {
        this.events[event] = callback;
    }

    async query(queries) {
        await this.hardWork(1000);
        if (this.crashed) throw new ServerError('Error in database.');
        return JSON.stringify(this.db.filter(sift(queries)));
    }

    hardWork(timeout) {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

}

module.exports = Server;
