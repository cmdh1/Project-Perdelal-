import React from 'react';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <div className="cart cart--empty">
      <h2>Корзина пустая <span role="img" aria-label="sad face">^^</span></h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.<br />
        Для того, чтобы заказать пиццу, перейдите на главную страницу.
      </p>
      <img src="./img/empty-cart.png" alt="Pizza logo" />
      <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
}
export default CartEmpty;