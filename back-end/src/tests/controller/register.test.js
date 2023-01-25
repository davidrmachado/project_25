const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const chaiHttp = require('chai-http');
const app = require('../../api/app');
const registerController = require('../../api/controller/registerController');
const { User } = require('../../database/models');
const { ERRORS, VALID_DATA, RETURN_OK, INVALID_DATA } = require('../mocks');

chai.use(sinonChai);
chai.use(chaiHttp);
const { expect } = chai;

describe('Testa os retornos do endpoint /register', function () {
    it('É possível cadastrar um novo usuário', async function() {
        const res = {};
        const req = { body: VALID_DATA.REGISTER };

        res.status = sinon.stub().returns(res)
        res.json = sinon.stub().returns();

        sinon.stub(User, 'findOne').resolves(null);
        sinon.stub(User, 'create').resolves(RETURN_OK.REGISTER);
        
        await registerController.registerController(req, res);

        expect(res.status).to.have.been.calledWith(201);
        expect(res.json).to.have.been.calledWith({ message: RETURN_OK.REGISTER_RESPONSE.message });
        sinon.restore();
    })

    it('Não é possível cadastrar um usuário já registrado', async function () {
        sinon.restore();
        sinon.stub(User, 'findOne').resolves(INVALID_DATA.REGISTER)
        chai.request(app).post('/register').send(INVALID_DATA.REGISTER_INFO).end((req, res) => {
            expect(res).to.have.status(409);
            expect(res.body).to.deep.equal(ERRORS.CONFLICT);
        })
    })
})
