import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Navbar from '../../components/Navbar';

function OrderDetails() {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState({});

  const prefix = 'customer_order_details__';
  const orderNumberLength = 4;

  useEffect(() => {
    const order = {
      seller: 'Fulana Pereira',
      sale_date: '07/04/2022',
      status: 'Entregue',
      total_price: 'R$ 100,00',
      products: [
        {
          name: 'Skol Lata 250ml',
          quantity: 10,
        },
        {
          name: 'Heineken 600ml',
          quantity: 10,
        },
      ],
    };

    setOrderDetails(order);
  }, []);

  return (
    <>
      <Navbar />
      <p>Detalhe do pedido</p>
      <div>
        <p
          data-testid={ `${prefix}element-order-details-label-order-id` }
        >
          {`PEDIDO ${id.padStart(orderNumberLength, '0')}`}
        </p>
        <p
          data-testid={ `${prefix}element-order-details-label-seller-name` }
        >
          {`P. Vend: ${orderDetails.seller}`}
        </p>
        <p
          data-testid={ `${prefix}element-order-details-label-order-date` }
        >
          {`Data: ${orderDetails.sale_date}`}
        </p>
        <div
          data-testid={ `${prefix}element-order-details-label-delivery-status<index>` }
        >
          {orderDetails.stauts}
        </div>
      </div>
    </>
  );
}

export default OrderDetails;
