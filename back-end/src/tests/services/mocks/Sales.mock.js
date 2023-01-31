const saleInsert = {
    totalPrice: 10.5,
    deliveryAddress: "casa da mãe Menina",
    deliveryNumber: "35011-1152",
    sellerId: 1,
    products: [
      {
       name: "Skol Lata 250ml",
        quantity: 10
      },
      {
        name:"Heineken 600ml",
        quantity: 10
      }
    ]
  }

  const userModel = {
    dataValues: {
        id: 7,
        name: 'Gabriel Barbosa',
        email: 'gabigol@email.com',
        password: '4b057ee530b87c294f69a5fbb6b9cd9a',
        role: 'seller'
    }
  }

  const productModel = {
    dataValues: {
        id: 1,
        name: 'Skol Lata 250ml'
    }
  }

  const user = {
    id: 1,
    name: "Gabriel Barbosa",
    email: "gabigol@email.com",
    role: 'administrator'
};

const listUsers = [
    {
        id: 1,
        email: 'peido@gmail.com',
        name: 'Peido Souza',
        role: 'seller'
    },
    {
        id: 2,
        email: 'souza@email.com',
        name: 'General Souza',
        role: 'seller' 
    }
]


const saleProductAndUser = [
    {
      id: 1,
      totalPrice: "11.50",
      deliveryAddress: "casa da mãe Joana",
      deliveryNumber: "35011-1152",
      salesDate: "2023-01-26T19:43:19.000Z",
      status: "Pendente",
      seller: {
        id: 2,
        name: "Fulana Pereira",
        role: "seller"
      },
      products: [
        {
          id: 1,
          name: "Skol Lata 250ml",
          price: "2.20",
          url_image: "http://localhost:3001/images/skol_lata_350ml.jpg",
          SaleProduct: {
            quantity: 15
          }
        }
      ]
    }
  ];

  const returnSales =  [
    {
    id: 1,
    totalPrice: "11.50",
    deliveryAddress: "casa da mãe Joana",
    deliveryNumber: "35011-1152",
    salesDate: "2023-01-26T19:43:19.000Z",
    status: "Pendente",
  }]

  module.exports = {saleInsert, user, userModel, productModel, listUsers, saleProductAndUser, returnSales};