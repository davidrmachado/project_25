import React from 'react';

function ItemCard() {
  return (
    <div>
    { products.map((product) => (
      <div
        key={ product.id }
        data-testid={ `customer_products__element-card-price-${product.id}` }
      >
        <p
          data-testid={ `customer_products__element-card-price-${product.id}` }
        >
          { product.price.toString().replace('.', ',') }
        </p>
        <img
          data-testid={ `customer_products__img-card-bg-image-${product.id}` }
          src={ product.url_image }
          alt="product demo"
        />
        <h1
          data-testid={ `customer_products__element-card-title-${product.id}` }
        >
          { product.name }
        </h1>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${product.id}` }
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${product.id}` }
          type="number"
          defaultValue="0"
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${product.id}` }
        >
          +
        </button>
      </div>
      )
    }
    </div>
    )
  };

  export default ItemCard;
