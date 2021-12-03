
function createDb(faker) {
    const date = () => new Date(faker.fake('{{date.past}}')).getTime();
    const id = () => faker.fake('{{datatype.uuid}}');

    return {
        users: new Array(5).fill(0).map(() => ({ id: id(), name: faker.fake('{{name.firstName}} {{name.lastName}}'), createdAt: date() })),
        commits: new Array(5).fill(0).map(() => ({ id: id(), createdAt: date(), sha: faker.fake('{{git.commitSha}}') })),
        orgs: new Array(5).fill(0).map(() => ({ id: id(), name: faker.fake('{{company.companyName}}'), createdAt: date() })),
    };

}

module.exports = createDb;

