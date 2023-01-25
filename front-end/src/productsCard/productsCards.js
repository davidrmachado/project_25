import React from 'react';
import PropTypes from 'prop-types';

function ProductsCard(props) {
  const { productItem } =  props;
  return (
    <section
      data-testid={ `customer_products__element-card-price-${productItem.id}` }
    >
    <h3
      data-testid={ `customer_products__element-card-title-${productItem.id}` }
    >
      { productItem.name }
    </h3>
    <img
      data-testid={ `customer_products__img-card-bg-image-${productItem.id}` }
      alt="image do product"
      src={ productItem.url_image }
    />
    <div
      data-testid={ `customer_products__element-card-price-${productItem.id}` }
    >
      Reais
      { ' ' }
      { productItem.price }
    </div>
    <button
      data-testid={ `customer_products__button-card-add-item-${productItem.id}` }
      type="button"
    >
     Acrescentar
    </button>
    <button
     data-testid={ `customer_products__button-card-rm-item-${productItem.id}` }
     type="button"
    >
      Deletar
    </button>
    <input
      data-testid={ `customer_products__input-card-quantity-${productItem.id}` }
      type="number"
    />
    </section>
  );
}

ProductsCard.propTypes = {
  product: PropTypes.objectOf(Object).isRequired,
};

export default ProductsCard;