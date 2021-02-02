
import './App.css';

import React from "react";
// import ReactDOM from "react-dom";

import Client from "./Client";
import ClientForm from "./ClientForm";

class App extends React.Component {

  //clientInput = React.createRef();

  state = {
    clients: [
      {id: 1, nom: "Bières"}, 
      {id: 2, nom: "Sopalin"},
      {id: 3, nom: "Lessive"}
    ]
 
  }

  handleDelete = (id) => { // methode fléché pour garder le bon this
    console.log(id);
    const clients = [...this.state.clients]; // On cree une copie
    const index = clients.findIndex( client => client.id === id);
    clients.splice(index, 1); // supprimer en partant de l'index et donc 1 element 
    this.setState( {clients});
  }

  handleAdd = client => {
    const clients = [...this.state.clients]; // on copie le tableau 
    clients.push(client); // on ajoute le client
    this.setState({clients});
  }

  render() {

    const title = "liste de course "
    return  (
    <div>
      <h1>{title}</h1> {/* interpolation  */}
       <ul>
         {this.state.clients.map(client => (
         <Client details={client} onDelete= {this.handleDelete}/>
         ))}
      </ul>

      <ClientForm onClientAdd={this.handleAdd}/>
    </div>
    )

  }

}


export default App;
