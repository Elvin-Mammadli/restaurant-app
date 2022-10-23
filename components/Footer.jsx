import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" alt="background" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Cognioli&apos;s Pizza best you ever tasted!
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Find our Restaurant</h1>
          <p className={styles.text}>
            Elmlar str.568, AZ1141 <br />
            Baku, +994 (077) 777-77-77
          </p>

        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Working hours</h1>
          <p className={styles.text}>
            Monday-Friday <br />
            09:00 - 23:59
          </p>

        </div>

      </div>
    </div>
  )
}

export default Footer