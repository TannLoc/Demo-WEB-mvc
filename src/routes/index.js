const homeRouter = require('./home/home.router')

let initWebRouters = (app) => {
    app.use('/', homeRouter);

}

module.exports = initWebRouters;