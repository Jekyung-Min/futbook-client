import React from "react";
import styles from "./list_item.module.css";

const ListItem = ({ openModal, img, date, title, address, label, price }) => {
  return (
    <div className={styles.item} onClick={openModal}>
      <img className={styles.image} src={img} alt="stadium" />
      <div className={styles.info}>
        <div className={styles.info_top}>
          <p>{date}</p>
          <h3>{title}</h3>
          <p>&nbsp;</p>
          <p>{address}</p>
        </div>
        <div className={styles.info_bottom}>
          <div>
            <p
              className={
                label === "실외"
                  ? `${styles.label}`
                  : `${styles.label} ${styles.inside}`
              }
            >
              {label}
            </p>
          </div>
          <div className={styles.price}>
            <h2>{price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;