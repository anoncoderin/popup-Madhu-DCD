import { useState } from "react"
import styles from '.Ad.module.css'

export default function Ad(){

    const [popup, setPopup]= useState(true);

    return(
        <>
        {
            popup ?
            <div>
                <div>
                    <div>Close</div>
                    Welcome
                </div>
            </div>
            :<></>
        }

        </>
    )
}