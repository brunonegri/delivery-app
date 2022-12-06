const sinon = require("sinon");

const chai = require("chai");

// import * as chai from 'chai';

const chaiHttp = require("chai-http");

const app = require("../api/app");
const { User } = require("../database/models");

chai.use(chaiHttp);

const { expect } = chai;

describe("Rota /Register", () => {
  //
  // beforeEach(async () => {
  //     sinon
  //       .stub(User, "findOne")
  //       .resolves({
  //         name: 'Cliente Teste',
  //         role: 'customer',
  //         email: 'cliente@teste.com',
  //         password: '123456'
  //       });
  //   });

  afterEach(() => sinon.restore());

  it("quando o email já existe", async () => {
    sinon.stub(User, "findOne").resolves({dataValues: {
      id: 4,
      name: "Cliente Teste",
      role: "customer",
      email: "cliente@teste.com",
      password: "1c37466c159755ce1fa181bd247cb925",
    }});

    const httpResponse = await chai.request(app).post("/user/register").send({
      name: "Cliente Teste",
      email: "zebirita@email.com",
      password: "123456",
    });
    expect(httpResponse.status).to.equal(409);
    expect(httpResponse.body).to.be.deep.equal({
      message: "User alredy registered",
    });
  });

  it("register válido", async () => {
    sinon.stub(User, "findOne").resolves();
    sinon.stub(User, "create").resolves({dataValues: {
      id: 4,
      name: "Cliente Teste",
      role: "customer",
      email: "cliente@teste.com",
      password: "1c37466c159755ce1fa181bd247cb925",
    }});

    const httpResponse = await chai.request(app).post("/user/register").send({
      name: "Cliente Teste1",
      email: "cliente@testes.com",
      password: "$#zebirita#$",
    });
    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.have.property("token");
  });
});
