import { useState } from "react";
import styles from "./Form.module.css";
import { Card } from "../Card";

export const Form = () =>{
    const [show, setShow] = useState(false)
    const [user, setUser] = useState({name:"", color:""})
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        console.log(user)
        event.preventDefault();
        const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/; // color hexadecimal (incluyendo el #)
        if (
            user.name.trim().length >= 3 &&
            regex.test(user.color)
        ) {
            setShow(true);
            setError(false);
        } else {
            setShow(false)
            setError(true);
        }
    }
    return(
    <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label>Nombre:</label>
                <input
                    className={styles.input}
                    type="text"
                    value={user.name}
                    onChange={(event) =>
                        setUser({ ...user, name: event.target.value })
                        
                    }
                    />
            </div>
            <div className={styles.formGroup}>
                <label>Color(hex):</label>
                <input
                    className={styles.input}
                    type="text"
                    value={user.color}
                    placeholder="#1AFFa1"
                    onChange={(event) =>
                        setUser({ ...user, color: event.target.value })
                    }
                    />
            </div>
            <button className={styles.button}>Enviar</button>
            
        </form>
        {error ? (
            <h4 style={{ color: "red" }}>
                Por favor chequea que la información sea correcta
            </h4>
        ) : null}
        {show ? (
            <Card user={user}/>
        ) : null}
    </div>
    )
}