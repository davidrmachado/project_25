const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const chaiHttp = require('chai-http');
const app = require('../../api/app');
const cardsService = require('../../api/services/cardsService');
const cardsController = require('../../api/controller/cardsController');
const { Product } = require('../../database/models');
const { LISTA_DE_PRODUTOS } = require('../mocks');

chai.use(sinonChai);
chai.use(chaiHttp);
const { expect } = chai;

describe('Testa o retorno do endpoint /products', function () {
    it('Lista todos os produtos', async function() {
        const res = { }

        sinon.stub(Product, 'findAll').resolves(LISTA_DE_PRODUTOS);

        chai.request(app).get('/customer/products').end((req, res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).to.have.length(3);
            expect(res.body).to.be.deep.equal(LISTA_DE_PRODUTOS);
        })
    })
})