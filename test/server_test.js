
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;
require(__dirname + '/../server');

describe('vanilla HTTP server should give time or greet person by name', () => {
  it('should greet someone by name when GET/greet', (done) => {
    chai.request('localhost:3000')
      .get('/someroute')
      .end((err, res) => {
        if(err) {return err};
          expect(res).to.have.status(200);
          expect(res.text).to.eql('howdy, friend');
      done();
    });
  )};
  it('should give back time when GET/time', (done) => {
    chai.request('localhost:3000')
    .get('/time')
    .end((err, res) => {
      if(err) {return err};
        expect(res.status).to.eql(404);
        expect(res.text).eql('this be a 404 msg, yo');
        done();
    })
  });
});

  
