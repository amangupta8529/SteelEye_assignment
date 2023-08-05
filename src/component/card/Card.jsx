import { useEffect } from "react";
import styles from "./Card.module.css";

const Card = ({ cardData, title }) => {
  useEffect(()=>{
    console.log(cardData)

  },[cardData])
  if (!cardData) return null;
 
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      {Object.entries(cardData).map(([k, v]) => (<>
        <div className={styles.cell}>
          <div className={styles.value}>{k}</div>
          <div className={styles.value}>{v}</div>
        </div>
      
       </> ))}
    </div>
  );
};

export default Card;
