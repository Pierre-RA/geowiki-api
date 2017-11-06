import * as request from "supertest";
import {} from "jest";
import { expect, should } from "chai";
import server = require("../../server");

const chai = require('chai');

describe('API tests - users', () => {
  /*before(done => {
    if (mongoose.connection.db) {
      return mongoose.connection.db.dropDatabase(done);
    }
    mongoose.connect(process.env.MONGODB_URI)
      .then(() => {
        mongoose.connection.db.dropDatabase(done);
      });
  });*/
  it('should add/get/update/delete a user', done => {
    let user = {
      name: 'Pierre',
      dateOfBirth: '1984.11.20',
      locale: 'EN',
    };
    let uri : string;
    request(server)
      .post('/users')
      .send(user)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res:any) => {
        let response = JSON.parse(res.body);
        uri = '/users/'.concat(response.userID);
        return request(server)
          .get(uri)
          .expect('Content-Type', /json/)
          .expect(200);
      })
      .then(res => {
        return request(server)
          .put(uri)
          .send(user)
          .expect('Content-Type', /json/)
      })
      .then(res => {
        user = {
          name: 'Pierre Jean Marcelino Repetto-Andipatin',
          dateOfBirth: '1984.02.20',
          locale: 'FR',
        };
        return request(server)
          .put(uri)
          .send(user)
          .expect('Content-Type', /json/)
          .expect(200);
      })
      .then(res => {
        return request(server)
          .delete(uri)
          .expect('Content-Type', /json/)
          .expect(200);
      })
      done();
  });

  it('should fail to get an inexisting user', done => {
    request(server)
      .get('/users/1234')
      .expect('Content-Type', /json/)
      .expect(404);
    done();
  });

  it('should fail to add a wrong user', done => {
    const user = {
      pseudo: 'Pierre',
    };
    request(server)
      .post('/users')
      .send(user)
      .expect('Content-Type', /json/)
      .expect(500);
    done();
  });

  it('should fail to update a wrong user', done => {
    const user = {
      name: 'Pierre',
      dateOfBirth: '1984.02.20',
      locale: 'FR',
    };
    request(server)
      .put('/users/1234')
      .send(user)
      .expect('Content-Type', /json/)
      .expect(500);
    done();
  });

  it('should fail to delete a wrong user', done => {
    request(server)
      .delete('/users/1234')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res =>{
        expect(res.body).to.equal(
          {message:'User not found'}
        );
      });
    done();
  });


  /*after(done => {
    mongoose.connection.close(() => {
      done();
  });*/

});
