import React, { Component } from 'react';
import AddressModal  from './modal/AddressModal';


class ProfileAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updatedatas: [],
            isLoaded: false,
            addresses: null,
            show:false
        }
        this.updateState = this.updateState.bind(this);
    }

    updateState(value) {
        if(value.update =='refresh'){
            fetch('http://localhost:8000/api/address/1')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    addresses: json,
                    show:false
                })
            });
        }
    }

    

    componentDidMount() {
        fetch('http://localhost:8000/api/address/1')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    addresses: json,
                    show:false
                })
            });
    }

   
    render() {
        const addressStyle = { 'width': '18rem' }
        const { updatedatas, addresses, isLoaded, show } = this.state;
        if (!isLoaded) {
            return <div>Chargement...</div>
        }
        else {
            return (
                <div className=" mt-5">
                    <div className="h2 text-center">Mes Adresses</div><br/>
                    {addresses == null && <p className="text-center">
                        Retrouvez ici toutes les adresses que vous avez utilisées pour être livré lors de vos précédents achats sur notre site.<br />
                        </p>} 
                        {addresses !== null && <div className="container-fluid">
                    <div className="row">
                        {addresses.map((address, i) =>
                            <div className="div_all_adresses col-6" key={i} id={address.idDeliv}>

                                <div className="card-body"  >
                                    <div className="card text-primary border-primary mb-4" style={addressStyle} >
                                        <div className="card-body" >
                                            <h5 className="card-title">{address.delLastname} {address.delFirstname}</h5>
                                            <p className="card-text">{address.delAddress}</p>
                                            <p className="card-text">{address.delCp} {address.delCity}</p>
                                            <p className="card-text">{address.delCountry}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="text-center">
                    <button className="btn btn-info mb-5 mr-3 w-50" onClick={(e) =>this.showModal()}>Ajouter une adresse</button>

                   <AddressModal show={this.state.show} dataToParent={this.updateState} />
                        </div>
                </div>}
                </div>
            )
        }
    }
}

export default ProfileAddress;