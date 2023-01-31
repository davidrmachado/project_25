const corpo = {
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

const user = {
    id: 1,
    name: "Michael Jordan",
    email: "jordan@email.com",
    password: "$#melhorDoBasquete#$",
    role: 'seller',
}

const sellerUsers = [
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
];

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

  const sales = [
    {
    id: 1,
    totalPrice: "11.50",
    deliveryAddress: "casa da mãe Joana",
    deliveryNumber: "35011-1152",
    salesDate: "2023-01-26T19:43:19.000Z",
    status: "Pendente",
  }]

module.exports = { corpo, user, sellerUsers, saleProductAndUser };