import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import moment from 'moment/moment';

import api from '../../utils/apiURL';
import Navbar from '../../components/Navbar';
import ShoppingCart from '../../components/ShoppingCart';

function SellerOrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState({});

  const prefix = 'seller_order_details__';
  const orderNumberLength = 4;

  useEffect(() => {
    const getOrder = async () => {
      const response = await api.get(`/sale/${id}`);
      response.data.sellerName = response.data.seller.name;
      setOrder(response.data);
    };
    getOrder();
  }, [id]);

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
          {`P. Vend: ${order.sellerName}`}
        </p>
        <p
          data-testid={ `${prefix}element-order-details-label-order-date` }
        >
          { moment(`${order.saleDate}`).format('DD/MM/YYYY') }
        </p>
        <div
          data-testid={
            `${prefix}element-order-details-label-delivery-status${order.id}`
          }
        >
          {order.status}
        </div>
        <button
          data-testid="seller_order_details__button-preparing-check"
          type="button"
        >
          PREPARAR PEDIDO
        </button>
        <button
          data-testid="seller_order_details__button-dispatch-check"
          type="button"
          disabled
        >
          SAIU PARA ENTREGA
        </button>
      </div>
      <ShoppingCart products={ order.products } prefix="seller_order_details" />
    </>
  );
}

export default SellerOrderDetails;
