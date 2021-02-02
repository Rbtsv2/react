import React, { useState } from "react";

const Counter = (props) => {

    // creation d'un hook avec useState ..
    const tableau = useState(1);
    const compteur = tableau[0]; // affiche le compteur current
    const setCompteur = tableau[1]; // equivalent de setState met à jour la vue

    return (
        <div>  {compteur}
            <button onClick={()=> setCompteur(compteur + 1)}>
            Incrémenter
            </button>
        </div>
    )
}

export default Counter;
