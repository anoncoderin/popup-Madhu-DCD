import { useState } from "react"

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