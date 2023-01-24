const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const chaiHttp = require('chai-http');
const app = require('../../api/app');
const cardsService = require('../../api/services/cardsService');
const cardsController = require('../../api/controller/cardsController');
const { Product } = require('../../database/models');

chai.use(sinonChai);
chai.use(chaiHttp);
const { expect } = chai;

const LISTA_DE_PRODUTOS = [
    {
      id: 1,
      name: "Skol Lata 250ml",
      price: "2.20",
      url_image: "http://localhost:3001/images/skol_lata_350ml.jpg"
    },
    {
      id: 2,
      name: "Heineken 600ml",
      price: "7.50",
      url_image: "http://localhost:3001/images/heineken_600ml.jpg"
    },
    {
      id: 3,
      name: "Antarctica Pilsen 300ml",
      price: "2.49",
      url_image: "http://localhost:3001/images/antarctica_pilsen_300ml.jpg"
    },
  ]

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