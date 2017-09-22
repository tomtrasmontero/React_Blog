const expect = require('chai').expect;
const client = require('supertest');
const db = require('../server/db');
const app = require('../server/server');

const createBlog = () => {
  const blogData = client(app)
    .post('/api/blog/create')
    .send({
      title: 'test blog title',
      body: 'test blog body',
      userId: 1,
    });

  return blogData;
};

const createUser = () => {
  const userData = client(app)
    .post('/api/user')
    .send({
      name: 'blog foo',
      password: 'blog bar',
      isAdmin: true,
    });

  return userData;
};

const createComment = () => {
  const userComment = client(app)
    .post('/api/blog/comment')
    .send({
      userId: 1,
      userName: 'blog foo',
      blogId: 1,
      comment: 'comment foo',
    });

  return userComment;
};

describe('routes', () => {
  // sync test database first
  before((done) => {
    db.sync()
      .then(() => done())
      .catch(done);
  });

  // delete tables each time the test runs

  describe('Users Table', () => {
    beforeEach((done) => {
      db.sync()
        .then(() => done())
        .catch(done);
    });

    it('Creates a admin user and be able to get the user', (done) => {
      createUser()
        .then((result) => {
          expect(result.status).to.equal(200);
          expect(result.body.name).to.equal('blog foo');
          expect(result.body.id).to.equal(1);
          expect(result.body.isAdmin).to.equal(true);
          return client(app).get('/api/user/1');
        })
        .then((result) => {
          expect(result.status).to.equal(200);
          expect(result.body.length).to.equal(1);
          expect(result.body[0].name).to.equal('blog foo');
          expect(result.body[0].id).to.equal(1);
          expect(result.body[0].isAdmin).to.equal(true);
          done();
        });
    });

    it('Creates a non administrative user by default', (done) => {
      client(app)
        .post('/api/user')
        .send({
          name: 'baz',
          password: 'foo',
        })
        .then((result) => {
          expect(result.status).to.equal(200);
          expect(result.body.name).to.equal('baz');
          expect(result.body.id).to.equal(1);
          expect(result.body.isAdmin).to.equal(false);
          return client(app).get('/api/user/1');
        })
        .then((result) => {
          expect(result.status).to.equal(200);
          expect(result.body[0].name).to.equal('baz');
          expect(result.body[0].id).to.equal(1);
          expect(result.body[0].isAdmin).to.equal(false);
          done();
        });
    });
  });

  describe('Blog Table', () => {
    // creates user for each test. Blog table associated with User Fkey
    before((done) => {
      createUser()
        .then(() => done())
        .catch(done);
    });

    it('creates a new blog with a title and be able to fetch it', (done) => {
      createBlog()
        .then((result) => {
          expect(result.body.title).to.equal('test blog title');
          expect(result.body.body).to.equal('test blog body');
          expect(result.body.userId).to.equal(1);
          return client(app).get('/api/blog/1');
        })
        .then((result) => {
          expect(result.body[0].title).to.equal('test blog title');
          expect(result.body[0].body).to.equal('test blog body');
          expect(result.body[0].userId).to.equal(1);
          done();
        });
    });

    it('fetches all blogs', (done) => {
      createBlog()
        .then(() => {
          client(app).get('/api/blogs')
            .then((result) => {
              expect(result.body.length).to.equal(2);
              done();
            });
        });
    });

    it('can edit blog post', (done) => {
      createBlog()
        .then(() => {
          const updateData = client(app).put('/api/blog/1')
            .send({
              title: 'edited blog title',
              body: 'edited blog body',
              id: 1,
            });
          return updateData;
        })
        .then(() => {
          const fetchData = client(app).get('/api/blog/1');
          return fetchData;
        })
        .then((result) => {
          expect(result.body[0].title).to.equal('edited blog title');
          expect(result.body[0].body).to.equal('edited blog body');
          done();
        });
    });
  });

  describe('Comments Table', () => {
    beforeEach((done) => {
      db.sync()
        .then(() => createUser())
        .then(() => createBlog())
        .then(() => done())
        .catch(done);
    });

    it('create a comment', (done) => {
      createComment()
        .then((result) => {
          expect(result.body.userName).to.equal('blog foo');
          expect(result.body.comment).to.equal('comment foo');
          done();
        });
    });

    it('fetches all comment from a specific user', (done) => {
      Promise.all([createComment(), createComment()])
        .then(() => client(app).get('/api/blog/1/comments'))
        .then((result) => {
          expect(result.body.length).to.equal(2);
          done();
        });
    });
  });
});
