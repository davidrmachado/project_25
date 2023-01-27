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

const sellers = async () => {
    const vendedores = await User.findAll({ where: { role: 'seller' } });
    return vendedores;
};

const salesProdutcts = async () => {
    const salesAndProducts = await Sale.findAll({
        attributes: { exclude: ['user_id', 'seller_id', 'sellerId', 'userId'] },
     include: [{ model: User, as: 'seller', attributes: { exclude: ['password', 'email'] } },
    { model: Product, as: 'products', through: { attributes: ['quantity'] } }] });
    return salesAndProducts;
};

const salesProdutctsId = async (id) => {
    const salesAndProducts = await Sale.findOne({
        where: { id },
        attributes: { exclude: ['user_id', 'seller_id', 'sellerId', 'userId'] },
     include: [{ model: User, as: 'seller', attributes: { exclude: ['password', 'email'] } },
    { model: Product, as: 'products', through: { attributes: ['quantity'] } }] });
    return salesAndProducts;
};

module.exports = { 
    createSale, 
    sellers, 
    salesProdutcts,
    salesProdutctsId };
