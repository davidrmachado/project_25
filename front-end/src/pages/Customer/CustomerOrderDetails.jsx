import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import moment from 'moment/moment';

import api from '../../utils/apiURL';
import Navbar from '../../components/CustomerNavbar';
import ShoppingCart from '../../components/ShoppingCart';

function CustomerOrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const [deliveredButton, setDeliveredButton] = useState(true);
  const [orderStatus, setOrderStatus] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));
  const { token } = user;

  const prefix = 'customer_order_details__';
  const orderNumberLength = 4;

  const verifyInitialButtonStates = (status) => {
    if (status === 'Em Trânsito') {
      setDeliveredButton(false);
    } else {
      setDeliveredButton(true);
    }

    if (status === 'Entregue') {
      setOrderStatus('Entregue');
    }
  };

  const changeStatus = async (status) => {
    await api.put(
      `/sale/${id}`,
      { status },
      {
        headers: {
          Authorization: token,
        },
      },
    );

    verifyInitialButtonStates(status);
  };

  useEffect(() => {
    const getOrder = async () => {
      const response = await api.get(`/sale/${id}`);
      response.data.sellerName = response.data.seller.name;
      setOrder(response.data);
    };
    getOrder();
  }, [id]);

  useEffect(() => {
    setOrderStatus(order.status);
    verifyInitialButtonStates(order.status);
  }, [order]);

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
          {orderStatus}
        </div>
        <button
          data-testid="customer_order_details__button-delivery-check"
          type="button"
          onClick={ () => changeStatus('Entregue') }
          disabled={ deliveredButton }
        >
          Marcar como entregue
        </button>
      </div>
      <ShoppingCart products={ order.products } prefix="customer_order_details" />
    </>
  );
}

export default CustomerOrderDetails;
