const expect = require('chai').expect;
const client = require('supertest');
const db = require('../server/db');
const app = require('../server/server');

describe('routes', () => {
  // sync test database first
  before((done) => {
    db.sync()
      .then(() => done())
      .catch(done);
  });

  // delete tables each time the test runs
  beforeEach((done) => {
    db.truncate()
      .then(() => done())
      .catch(done);
  });

  describe('Users Table', () => {
    it('creates a admin user and be able to get the user', (done) => {
      client(app)
        .post('/api/user')
        .send({
          name: 'foo',
          password: 'bar',
          isAdmin: true,
        })
        .then((result) => {
          expect(result.status).to.equal(200);
          expect(result.body.name).to.equal('foo');
          expect(result.body.id).to.equal(1);
          expect(result.body.isAdmin).to.equal(true);
          return client(app).get('/api/user/1');
        })
        .then((result) => {
          expect(result.status).to.equal(200);
          expect(result.body.length).to.equal(1);
          expect(result.body[0].name).to.equal('foo');
          expect(result.body[0].id).to.equal(1);
          expect(result.body[0].isAdmin).to.equal(true);
          done();
        });
    });
  });
});
