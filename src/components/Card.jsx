import styles from "../styles/Card.module.css";
import { useLayoutEffect, useRef, useState } from "react";

const Card = ({ name, title, image, mode }) => {
  const cardRef = useRef(null);          // ✅ useRef to access DOM element
  const [isCompact, setIsCompact] = useState(false);

  useLayoutEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const measure = () => {
      const width = el.getBoundingClientRect().width;
      setIsCompact(width < 350); 
    };

    measure(); 

    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${styles["profile-card"]} ${mode === "edit" ? styles.edit : ""} ${
        isCompact ? styles.compact : ""
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