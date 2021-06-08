process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('API', () => {

/*
  * Test the /GET route
  */
  describe('/GET home', () => {
      it('it should GET any reply', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
              done();
            });
      });
  });
  
  describe('/GET movies', () => {
      it('it should GET any reply', (done) => {
        chai.request(server)
            .get('/movies')
            .end((err, res) => {
                res.should.have.status(200);
              done();
            });
      });
  });
  
  describe('/GET reviewers', () => {
      it('it should GET any reply', (done) => {
        chai.request(server)
            .get('/reviewers')
            .end((err, res) => {
                res.should.have.status(200);
              done();
            });
      });
  });

describe('/GET publication', () => {
      it('it should GET any reply', (done) => {
        chai.request(server)
            .get('/publication')
            .end((err, res) => {
                res.should.have.status(120);
              done();
            });
      });
  });
});