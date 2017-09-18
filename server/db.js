const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL, { logging: false });

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

const Comment = db.define('comment', {
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  comment: {
    type: Sequelize.TEXT,
  },
});

const Blog = db.define('blog', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

// use for testing, !!!!! needs to use return for test to work
const sync = () => {
  const syncDatabase = db.sync({ force: true });
  return syncDatabase;
};


// DB association
Comment.belongsTo(User);
Blog.belongsTo(User);
User.hasMany(Comment);
User.hasMany(Blog);
Comment.belongsTo(Blog);
Blog.hasMany(Comment);

module.exports = {
  models: {
    User,
    Blog,
    Comment,
  },
  sync,
};
