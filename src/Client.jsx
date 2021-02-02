import React, {Component} from "react";


// composant fonctionnel car il n'as pas de composant d'etat
const Client = ({ details, onDelete }) => 

    //const details = this.props.details;
    //const onDelete = this.props.onDelete;
    // on peut faire plus simple soit destructurer
    // const { details, onDelete } = props;
    (
        <li>
            {details.nom}
            <button onClick={() => onDelete(details.id)}>x</button>
        </li>
    );

export default Client;

