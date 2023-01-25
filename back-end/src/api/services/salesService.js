const { Sale, SaleProduct, Product } = require('../../database/models');

const obj = (address, user) => ({
    userId: user.id,
    sellerId: user.id,
    totalPrice: address.totalPrice,
    deliveryAddress: address.deliveryAddress,
    deliveryNumber: address.deliveryNumber,
    salesDate: new Date(),
    status: 'Pendente',
});

const create = async (objInfo, user) => {
    const newObj = obj(objInfo, user); 
    const { dataValues: { id } } = await Sale.create({ ...newObj });
  return Number(id);
};

const findOne = async (column, search) => {
    const { dataValues: { id } } = await Product.findOne({ where: { [column]: search } });
    return Number(id);
};

const SALE = 'sale_id';
const PRODUCT = 'product_id';

const createSale = async (objInfo, user) => {
    try {
            const saleId = await create(objInfo, user);
            const map = objInfo.products.map(async (elem) => {
               const productId = await findOne('name', elem.name);
                await SaleProduct
                    .create({ 
                        [SALE]: saleId, [PRODUCT]: productId, quantity: Number(elem.quantity) });
            });
            await Promise.all(map);
            return saleId;
    } catch (err) {
        console.log(err);
    }
};

module.exports = { createSale };
