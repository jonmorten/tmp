import React from "react";
import classnames from "classnames";

import {
  checkoutCart,
  getTotalPrice,
  removeFromCart,
  updateQuantity,
} from "./Cart.slice";
import { useDispatch, useSelector } from "../../app/hooks";
import styles from "./Cart.module.css";

export function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector(getTotalPrice);
  const checkoutState = useSelector((state) => state.cart.checkoutState);
  const errorMessage = useSelector((state) => state.cart.errorMessage);

  const onQuantityChange = (
    event: React.FocusEvent<HTMLInputElement>,
    id: string
  ) => {
    const quantity = Number(event.target.value) || 0;
    dispatch(updateQuantity({ id, quantity }));
  };

  const onCheckout = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(checkoutCart());
  };

  const tableClasses = classnames({
    [styles.table]: true,
    [styles.checkoutError]: checkoutState === "ERROR",
    [styles.checkoutLoading]: checkoutState === "LOADING",
  });

  return (
    <main className="page">
      <h1>Shopping Cart</h1>
      <table className={tableClasses}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(items).map(([id, quantity]) => (
            <tr key={id}>
              <td>{products[id].name}</td>
              <td>
                <input
                  type="text"
                  className={styles.input}
                  defaultValue={quantity}
                  onBlur={(event) => onQuantityChange(event, id)}
                />
              </td>
              <td>${products[id].price}</td>
              <td>
                <button
                  aria-label={`Remove ${products[id].name} from Shopping Cart`}
                  onClick={() => dispatch(removeFromCart(id))}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td></td>
            <td className={styles.total}>${totalPrice}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
      <form onSubmit={onCheckout}>
        {checkoutState === "ERROR" && errorMessage ? (
          <p className={styles.errorBox}>{errorMessage}</p>
        ) : null}
        <button className={styles.button} type="submit">
          Checkout
        </button>
      </form>
    </main>
  );
}
