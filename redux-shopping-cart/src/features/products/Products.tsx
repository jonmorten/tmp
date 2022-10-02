import React, { useEffect } from "react";

import { addToCart } from "../cart/Cart.slice";
import { getProducts } from "../../app/api";
import { receivedProducts } from "./Products.slice";
import { useSelector, useDispatch } from "../../app/hooks";
import styles from "./Products.module.css";

export function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts().then((products) => {
      dispatch(receivedProducts(products));
    });
  }, []);

  const products = useSelector((state) => state.products.products);

  return (
    <main className="page">
      <ul className={styles.products}>
        {Object.values(products).map((product) => (
          <li key={product.id}>
            <article className={styles.product}>
              <figure>
                <img src={product.imageURL} alt={product.imageAlt} />
                <figcaption className={styles.caption}>
                  {product.imageCredit}
                </figcaption>
              </figure>
              <div>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <button onClick={() => dispatch(addToCart(product.id))}>
                  Add to Cart 🛒
                </button>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
