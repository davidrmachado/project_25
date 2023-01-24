const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const chaiHttp = require('chai-http');
const app = require('../../api/app');
const registerService = require('../../api/services/registerService');
const registerController = require('../../api/controller/registerController');

chai.use(sinonChai);
chai.use(chaiHttp);
const { expect } = chai;

