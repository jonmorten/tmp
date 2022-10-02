import React from "react";
import { Link } from "react-router-dom";

import { getMemoizedNumItems } from "./Cart.slice";
import { useSelector } from "../../app/hooks";
import styles from "./CartLink.module.css";

export function CartLink() {
  const numItems = useSelector(getMemoizedNumItems);
  return (
    <Link to="/cart" className={styles.link}>
      <span className={styles.text}>
        🛒&nbsp;&nbsp;{numItems ? numItems : "Cart"}
      </span>
    </Link>
  );
}
