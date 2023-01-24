const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const chaiHttp = require('chai-http');
const app = require('../../api/app');
const loginService = require('../../api/services/loginService');
const loginController = require('../../api/controller/loginController');

chai.use(sinonChai);
chai.use(chaiHttp);
const { expect } = chai;

const LOGIN_RETURN_OK = {
    status: 200,
    message: {
        id: 3,
        name: "Cliente Zé Birita",
        email: "zebirita@email.com",
        role: "customer",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhVmFsdWVzIjp7ImlkIjozLCJuYW1lIjoiQ2xpZW50ZSBaw6kgQmlyaXRhIiwiZW1haWwiOiJ6ZWJpcml0YUBlbWFpbC5jb20iLCJwYXNzd29yZCI6IjFjMzc0NjZjMTU5NzU1Y2UxZmExODFiZDI0N2NiOTI1Iiwicm9sZSI6ImN1c3RvbWVyIn0sIl9wcmV2aW91c0RhdGFWYWx1ZXMiOnsiaWQiOjMsIm5hbWUiOiJDbGllbnRlIFrDqSBCaXJpdGEiLCJlbWFpbCI6InplYmlyaXRhQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiMWMzNzQ2NmMxNTk3NTVjZTFmYTE4MWJkMjQ3Y2I5MjUiLCJyb2xlIjoiY3VzdG9tZXIifSwidW5pcW5vIjoxLCJfY2hhbmdlZCI6e30sIl9vcHRpb25zIjp7ImlzTmV3UmVjb3JkIjpmYWxzZSwiX3NjaGVtYSI6bnVsbCwiX3NjaGVtYURlbGltaXRlciI6IiIsInJhdyI6dHJ1ZSwiYXR0cmlidXRlcyI6WyJpZCIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicm9sZSJdfSwiaXNOZXdSZWNvcmQiOmZhbHNlLCJpYXQiOjE2NzQ1MjY4ODIsImV4cCI6MTY3NDYxMzI4Mn0.RyR-l_MOeMVwpPXynkK5Oi_mlFyqf4sbO4e2wa-y_eU"
    }
}

describe('Testa os retornos associados ao endpoint /login', function () {
    it('Verifica que não é possível fazer login com dados inválidos', async function ()  {
        chai.request(app).get('/login').send({ email: 'qualquer@gmail.com', password: '12345678' }).end((req, res) => {
            expect(res).to.have.status(404);
            expect(res.notFound).to.be.equal(true);
            expect(res.res.statusMessage).to.be.equal('Not Found');
        })
    });

    it('Verifica que recebe resposta positiva com dados válidos', async function () {
        const res = { };
        const req = { body: { email: 'zebirita@email.com', password: '$#zebirita#$' } };

        res.status = sinon.stub().returns(res)
        res.json = sinon.stub().returns();

        sinon.stub(loginService, 'login').resolves(LOGIN_RETURN_OK.message);
        await loginController.loginController(req, res);

        const { id, name, email, role } = LOGIN_RETURN_OK.message

        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.calledWithMatch({ id, name, email, role });
    })

    afterEach(sinon.restore);
}) 

