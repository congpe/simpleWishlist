/**
 * Created by cong on 4/12/17.
 */

// load the model
var Wish = require('./models/wish');

// routes
module.exports = function(app) {
    // get all wishs
    app.get('/api/wishs', function(req, res) {
        Wish.find(function(err, wishs) {
            if (err)
                res.send(err)
            res.json(wishs);
        });
    });

    //create wishs
    app.post('/api/wishs', function(req, res) {
        Wish.create({
            text : req.body.text,
            done : false
        }, function(err, wish) {
            if (err)
                res.send(err);
            Wish.find(function(err, wishs) {
                if (err)
                    res.send(err)
                res.json(wishs);
            });
        });
    });

    // delete
    app.delete('/api/wishs/:wish_id', function(req, res) {
        Wish.remove({
            _id : req.params.wish_id
        }, function(err, wish) {
            if (err)
                res.send(err);
            Wish.find(function(err, wishs) {
                if (err)
                    res.send(err)
                res.json(wishs);
            });
        });
    });

    // frontend route
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
    });
};
