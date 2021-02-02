import React, { Component } from "react";


class ClientForm extends Component {
    state =  {
        newClient:""
    }

    handleChange = (event) => {
  
        this.setState({newClient:  event.currentTarget.value});
        console.log(event.currentTarget.value)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const id = new Date().getTime(); // obtenir un id unique
        const nom = this.state.newClient;
        this.props.onClientAdd({id, nom});
        this.setState({newClient: ""});
        //console.log(this.clientInput.current.value);
    }

    render() {

        return ( 

            <form onSubmit={this.handleSubmit}> 
                <input onChange={this.handleChange} value={this.state.newClient} type="text" placeholder="Ajouter un client"/>
                <button>Confirmer</button>
            </form>
  
        );
        
    };

}

export default ClientForm;