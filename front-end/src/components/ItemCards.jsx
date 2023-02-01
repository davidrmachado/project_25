import React, { useContext } from 'react';
import { CustomerContext } from '../context/CustomerContext';

function ItemCard() {
  const {
    products,
    setProducts,
    cart,
    setCart } = useContext(CustomerContext);

  const updateCart = (product) => {
    const isInCart = cart.some((item) => item.id === product.id);
    const newQty = Number(product.quantity);

    if (isInCart && (newQty === 0)) {
      const newCart = cart.filter((item) => item.id !== product.id);
      setCart(newCart);
      return 0;
    }

    if (isInCart) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) return product;
        return item;
      });
      setCart(newCart);
      return 0;
    }

    if (!isInCart && newQty !== 0) {
      const newCart = [...cart, product];
      setCart(newCart);
      return 0;
    }
  };

  const changeQuantity = (e, id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        const updatedProduct = { ...product, quantity: e.target.value };
        updateCart(updatedProduct);
        return updatedProduct;
      }
      return product;
    });

    setProducts(updatedProducts);
  };

  const handleAddButton = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        const updatedProduct = { ...product, quantity: product.quantity + 1 };
        updateCart(updatedProduct);
        return updatedProduct;
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const handleRemoveButton = (id) => {
    const verifyProduct = products.find((product) => product.id === id);
    if (verifyProduct.quantity - 1 < 0) return 0;

    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        const updatedProduct = { ...product, quantity: product.quantity - 1 };
        updateCart(updatedProduct);
        return updatedProduct;
      }
      return product;
    });

    setProducts(updatedProducts);
  };

  return (
    <div className="products_list">
      { products.map((product) => (
        <article
          key={ product.id }
          data-testid={ `customer_products__element-card-price-${product.id}` }
        >
          <div className="title">
            <h2
              data-testid={ `customer_products__element-card-title-${product.id}` }
            >
              { product.name }
            </h2>
          </div>
          <div className="img_drink_container">
            <img
              data-testid={ `customer_products__img-card-bg-image-${product.id}` }
              src={ product.url_image }
              alt="product demo"
              // className="drink-image"
            />
          </div>
          <div className="item_price_container">
            <h4
              data-testid={ `customer_products__element-card-price-${product.id}` }
            >
              R$
              {' '}
              { product.price.toString().replace('.', ',') }
            </h4>
          </div>
          <div className="select_quant_container">
            <button
              type="button"
              className="add_delete_quantity"
              data-testid={ `customer_products__button-card-rm-item-${product.id}` }
              onClick={ () => handleRemoveButton(product.id) }
            >
              -
            </button>
            <input
              data-testid={ `customer_products__input-card-quantity-${product.id}` }
              type="number"
              className="quantity_input"
              value={ product.quantity }
              onChange={ (e) => changeQuantity(e, product.id) }
              min="0"
            />
            <button
              type="button"
              className="add_delete_quantity"
              data-testid={ `customer_products__button-card-add-item-${product.id}` }
              onClick={ () => handleAddButton(product.id) }
            >
              +
            </button>
          </div>
        </article>
      )) }
    </div>
  );
}

export default ItemCard;
