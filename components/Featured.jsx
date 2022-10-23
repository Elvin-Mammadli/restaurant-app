import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Featured.module.css";

const Featured = () => {
  const [slide, setSlide] = useState(0);

  const handleArrow = direction => {
    if(direction === "l") {
      setSlide(prev => prev !==0 ? prev - 1 : 2)
    }
    if(direction === "r") {
      setSlide(prev => prev !==2 ? prev + 1 : 0)
    }
  }

  console.log(slide)

  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ]
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{left: 0}} onClick={() => handleArrow("l")}>
        <Image src="/img/arrowl.png" alt="arrow left" layout="fill" objectFit="contain" />
      </div>

      <div className={styles.wrapper} style={{transform: `translateX(${slide * -100}vw)`}}>
        {images.map((img, i) => (
          <div key={i} className={styles.imgContainer}>
            <Image src={img} alt="slide1" layout="fill" objectFit="contain" />
          </div>
        ))}

      </div>

      <div className={styles.arrowContainer} style={{right: 0}} onClick={() => handleArrow("r")}>
        <Image src="/img/arrowr.png" alt="arrow right" layout="fill" objectFit="contain"/>
      </div>
    </div>
  )
}

export default Featured