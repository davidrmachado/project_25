const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');


const app = require('../../api/app');
const serviceCards = require('../../api/services/cardsService');
const controller = require('../../api/controller/cardsController');
const {LISTA_DE_PRODUTOS} = require('./mocks/cards.controller.mock');

chai.use(sinonChai);
const { expect } = chai;

describe('Testa o retorno da controller Cards', function () {
    afterEach(sinon.restore)
    it('Lista todos os produtos', async function() {
        const req = { }
        const res = {};

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        sinon.stub(serviceCards, 'allCards').resolves(LISTA_DE_PRODUTOS);

        await controller.cardsController(req, res);
        
        expect(res.status.calledWith(200)).to.be.equal(true);
        expect(res.json.calledWith(LISTA_DE_PRODUTOS)).to.be.equal(true);
    });
});