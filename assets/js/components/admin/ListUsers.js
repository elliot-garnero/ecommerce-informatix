import React, { Component } from 'react';
import DiscountModal from './modal/DiscountModal';
import Table from 'react-bootstrap/Table';

class ListUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updatedatas: [],
            isLoaded: false,
            users: '',
            dates:[],
            show:false,
            id:'', 
            nom:'',
            prenom:'',
            discount:''
        }
        this.updateState = this.updateState.bind(this);
        this.showModal = this.showModal.bind(this);
    }

    updateState(value) {
        this.setState({ updatedatas: value.update });
        this.refresh();
        console.log(this.state)
    }

    refresh(){
        console.log('refresh')
        fetch('http://localhost:8000/api/admin/listUsers')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                users:  json,
                show:false
            })
        })
    }

    showModal(id, nom, prenom, discount) {
        this.setState({
          id: id,
          nom: nom,
          prenom:prenom,
          discount: discount,
          show: true,
        });
      };



    componentDidMount() {
        fetch('http://localhost:8000/api/admin/listUsers')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                users:  json,
            })
        })
    }
    
    
    render() {
        const updatedatas = this.state;
        const{isLoaded, users} = this.state;
        const options = {  year: 'numeric', month: 'short', day: 'numeric' };
        if (!isLoaded) {
            return <div>Chargement...</div>
        }
        else {
            return (
                <>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#id</th>
                            <th>Pseudo</th>
                            <th>Prénom</th>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Adresse</th>
                            <th>CP</th>
                            <th>Ville</th>
                            <th>Pays</th>
                            <th>Crée le</th>
                            <th>Rabais</th>
                            <th>Paiements</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    
                        {this.state.users.map((user, i) => (
                       
                        <tr key={i} id={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>{user.cp}</td>
                            <td>{user.city}</td>
                            <td>{user.countries}</td>
                            <td>{new Date(user.createdAt.substr(0,10)).toLocaleDateString('fr-FR', options)}</td>
                            <td><button onClick={(e) =>this.showModal(user.id, user.lastname, user.firstname,user.discount)} className="btn btn-warning sm">Ajouter</button></td>
                            <td><button className="btn btn-warning sm">Restreindre</button></td>
                        </tr>
                        
                        ))}
                        
                    </tbody>
                   
                </Table>
                  <div className="col-12 text-center">
                    <DiscountModal  
                    show={this.state.show} 
                    id={this.state.id} 
                    nom={this.state.nom} 
                    prenom={this.state.prenom} 
                    discount = {this.state.discount} 
                    dataToParent={this.updateState} />
                </div>
                </>
            )
        }
    }
}

export default ListUsers;