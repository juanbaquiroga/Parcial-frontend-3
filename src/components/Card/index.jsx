import styles from "./Card.module.css"

export const Card = ({user}) => {
    const {name, color} = user
    console.log(user)
    console.log
    return (
      <div className={styles.container}>
        <h4 className={styles.name}>Hola, {name}!</h4>
        <h4 className={styles.color} style={{backgroundColor:color}}>el color seleccionado es: {color}</h4>
      </div>
    );
  };