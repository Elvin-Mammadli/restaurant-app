import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Qantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image src="/img/pizza.png" layout="fill" objectFit="cover" alt="" />
                </div>
              </td>
              <td>
                <span className={styles.name}>Pepperoni</span>
              </td>
              <td>
                <span className={styles.extras}>
                  Double ingredients, spicy sauce
                </span>
              </td>
              <td>
                <span className={styles.price}>
                  $19.90
                </span>
              </td>
              <td>
                <span className={styles.quantity}>
                  2
                </span>
              </td>
              <td>
                <span className={styles.total}>
                  $39.80
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className={styles.right}></div>
      </div>
    </div>
  )
}

export default Cart