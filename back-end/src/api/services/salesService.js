const { Sale, SaleProduct, Product, User } = require('../../database/models');

const SALE = 'sale_id';
const PRODUCT = 'product_id';

const obj = (address, user, sellerId) => ({
    userId: user.id,
    sellerId,
    totalPrice: address.totalPrice,
    deliveryAddress: address.deliveryAddress,
    deliveryNumber: address.deliveryNumber,
    salesDate: new Date(),
    status: 'Pendente',
});

const create = async (objInfo, user) => {
    const { dataValues } = await User.findOne({ where: { name: objInfo.nameSeller } });
    const newObj = obj(objInfo, user, Number(dataValues.id)); 
    const { dataValues: { id } } = await Sale.create({ ...newObj });
  return Number(id);
};

const findOne = async (column, search) => {
    const { dataValues: { id } } = await Product.findOne({ where: { [column]: search } });
    return Number(id);
};

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
