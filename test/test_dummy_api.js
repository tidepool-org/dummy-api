'use strict';

var should = require('chai').should(),
    supertest = require('supertest'),
    envConfig = require('../env'),
    api;   

describe('dummy API', function() {

    before(function(){
        /*
        Start the Dummy API
        */
        api = supertest('http://localhost:'+envConfig.port);
    });

    describe('get /api/v1/echo', function() {

        it('should return data', function(done) {
            api.get('/api/v1/echo')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
        });

    });
});