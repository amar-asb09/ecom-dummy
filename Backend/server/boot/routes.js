module.exports = function (app) {
    var router = app.loopback.Router();
    router.get('/ping', function (req, res) {
        res.send('using router to route at this location...');
    });
    app.use(router);
}
