import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="pizza" width={500} height={500} />
      <h1 className={styles.title}>Pepperoni</h1>
      <span className={styles.price}>$14.99</span>
      <p className={styles.desc}>Lorem ipsum dolor sit amet.</p>
    </div>
  )
}

export default PizzaCard