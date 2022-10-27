import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Qantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tr}>
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
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button className={styles.button}>Checkout NOW!</button>
        </div>
      </div>
    </div>
  )
}

export default Cart