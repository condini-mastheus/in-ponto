const employees = require('./employees');
const auth = require('./auth');

module.exports = (app) => {
    employees(app)
    auth(app)
};