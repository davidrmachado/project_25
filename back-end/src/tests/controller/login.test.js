const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const chaiHttp = require('chai-http');
const app = require('../../api/app');
const loginService = require('../../api/services/loginService');
const loginController = require('../../api/controller/loginController');
const { User } = require('../../database/models');
const { RETURN_OK, INVALID_DATA, ERRORS, VALID_DATA } = require('../mocks');

chai.use(sinonChai);
chai.use(chaiHttp);
const { expect } = chai;

describe('Testa os retornos associados ao endpoint /login', function () {
    it('Verifica que não é possível fazer login com dados inválidos', async function ()  {
        sinon.stub(User, 'findOne').resolves(null);
        chai.request(app).post('/login').send(INVALID_DATA.LOGIN).end((req, res) => {
            expect(res).to.have.status(404);
            expect(res.body).to.be.deep.equal(ERRORS.NOT_FOUND);
        })
        sinon.restore();
    });

    it('Verifica que recebe resposta positiva com dados válidos', async function () {
        const res = { };
        const req = { body: VALID_DATA.LOGIN };

        res.status = sinon.stub().returns(res)
        res.json = sinon.stub().returns();

        sinon.stub(loginService, 'login').resolves(RETURN_OK.LOGIN.message);
        await loginController.loginController(req, res);

        const { id, name, email, role } = RETURN_OK.LOGIN.message;

        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.calledWithMatch({ id, name, email, role });
    })

    afterEach(sinon.restore);
}) 

