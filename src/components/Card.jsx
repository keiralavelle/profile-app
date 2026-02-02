import styles from "../styles/Card.module.css";

const Card = ({ name, title, image, mode }) => {
  return (
    <div
      className={`${styles["profile-card"]} ${
        mode === "edit" ? styles.edit : ""
      }`}
    >
      <div className={styles.top}>
        <img src={image} alt={name} />
      </div>

      <div className={styles.bottom}>
        {mode === "edit" ? (
          <>
            <input className={styles.input} defaultValue={name} />
            <input className={styles.input} defaultValue={title} />
          </>
        ) : (
          <>
            <p>{name}</p>
            <p>{title}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
