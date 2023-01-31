import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import moment from 'moment/moment';

import api from '../../utils/apiURL';
import Navbar from '../../components/SellerNavbar';
import ShoppingCart from '../../components/ShoppingCart';

function SellerOrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const [preparingButton, setPreparingButton] = useState(false);
  const [deliveryButton, setDeliveryButton] = useState(true);
  const [orderStatus, setOrderStatus] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));
  const { token } = user;

  const prefix = 'seller_order_details__';
  const inTransit = 'Em Trânsito';
  const orderNumberLength = 4;

  const changeSellerButtons = (status) => {
    if (status === 'Preparando') {
      setPreparingButton(true);
      setDeliveryButton(false);
      setOrderStatus('Preparando');
    }

    if (status === inTransit) {
      setDeliveryButton(true);
      setOrderStatus(inTransit);
    }
  };

  const verifyInitialButtonStates = (status) => {
    if (status === 'Preparando') {
      setPreparingButton(true);
      setDeliveryButton(false);
    }

    if (status === inTransit || status === 'Entregue') {
      setPreparingButton(true);
      setDeliveryButton(true);
    }
  };

  const changeStatus = async (status) => {
    changeSellerButtons(status);
    const response = await api.put(
      `/sale/${id}`,
      { status },
      {
        headers: {
          Authorization: token,
        },
      },
    );
    console.log(response);
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
    verifyInitialButtonStates(order.status);
    setOrderStatus(order.status);
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
          data-testid="seller_order_details__button-preparing-check"
          type="button"
          onClick={ () => changeStatus('Preparando') }
          disabled={ preparingButton }
        >
          PREPARAR PEDIDO
        </button>
        <button
          data-testid="seller_order_details__button-dispatch-check"
          type="button"
          onClick={ () => changeStatus(inTransit) }
          disabled={ deliveryButton }
        >
          SAIU PARA ENTREGA
        </button>
      </div>
      <ShoppingCart products={ order.products } prefix="seller_order_details" />
    </>
  );
}

export default SellerOrderDetails;
