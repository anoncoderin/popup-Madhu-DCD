import { useState } from "react"
import styles from '.Ad.module.css'

export default function Ad(){

    const [popup, setPopup]= useState(true);

    return(
        <>
        {
            popup ?
            <div classNmae={styles.container}>
                <div classNmame={styles.popup_}>
                    <div>Close</div>
                    Welcome
                </div>
            </div>
            :<></>
        }

        </>
    )
}