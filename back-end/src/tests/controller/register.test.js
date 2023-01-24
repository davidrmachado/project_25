const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const chaiHttp = require('chai-http');
const app = require('../../api/app');
const registerService = require('../../api/services/registerService');
const registerController = require('../../api/controller/registerController');
const { User } = require('../../database/models');

chai.use(sinonChai);
chai.use(chaiHttp);
const { expect } = chai;

describe('Testa os retornos do endpoint /register', function () {
    it('É possível cadastrar um novo usuário', async function() {
        const res = {};
        const req = {
            body: {
                name: "Gabriel Barbosa",
                email: "gabigol@email.com",
                password: "$#reiDaLibertadores#$",
            }
        }

        res.status = sinon.stub().returns(res)
        res.json = sinon.stub().returns();

        sinon.stub(User, 'findOne').resolves(null);
        sinon.stub(User, 'create').resolves({
            dataValues: {
              id: 7,
              name: 'Gabriel Barbosa',
              email: 'gabigol@email.com',
              password: '4b057ee530b87c294f69a5fbb6b9cd9a',
              role: 'customer'
            }          
        });
        
        await registerController.registerController(req, res);

        expect(res.status).to.have.been.calledWith(201);
        expect(res.json).to.have.been.calledWith({ message: "Created" });
    })

    it('Não é possível cadastrar um usuário já registrado', async function () {
        const res = {};
        const req = {
            body: {
                name: "Gabriel Barbosa",
                email: "gabigol@email.com",
                password: "$#reiDaLibertadores#$",
            }
        }
        
        const sendingdata = {
                name: "Cliente Zé Birita",
                email: "zebirita@email.com",
                password: "$#zebirita#$",
            }


        chai.request(app).post('/register').send(sendingdata).end((req, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.deep.equal({ message: "Created"});
        })

    })

    // afterEach(sinon.restore);
})
