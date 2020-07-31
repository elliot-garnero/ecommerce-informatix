import React, { Component } from 'react';
import AddressModal from './modal/AddressModal';


class ProfileAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updatedatas: [],
            isLoaded: false,
            addresses: null,
            show: false,
            alert: null
        }
        this.updateState = this.updateState.bind(this);
        this.showModal = this.showModal.bind(this);
        this.delete = this.delete.bind(this);
    }

    updateState(value) {
        if (value.update == 'refresh') {
            fetch('http://localhost:8000/api/address/1')
                .then(res => res.json())
                .then(json => {
                    this.setState({
                        isLoaded: true,
                        addresses: json,
                        show: false,
                        alert: null
                    })
                });
        }
    }

    showModal(e) {
        this.setState({
            show: true,
            alert:null
        });
    };

    delete(id) {
        fetch('http://localhost:8000/api/delete_address/' + id)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                this.setState({ alert: res.message });
                fetch('http://localhost:8000/api/address/1')
                    .then(res => res.json())
                    .then(json => {
                        this.setState({
                            isLoaded: true,
                            addresses: json,
                            show: false
                        })
                    });
            });
    }


    componentDidMount() {
        fetch('http://localhost:8000/api/address/1')
            .then(res => res.json())
            .then(json => {
                json == '' ? json = null : json;
                this.setState({
                    isLoaded: true,
                    addresses: json,
                    show: false,
                    alert: null
                })
            });
    }


    render() {
        const addressStyle = { 'width': '18rem' }
        const { updatedatas, addresses, isLoaded, show, alert } = this.state;
        if (!isLoaded) {
            return <div>Chargement...</div>
        }
        else {
            return (
                <div className=" mt-5">
                    <div className="h2 text-center">Mes Adresses</div><br />
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
                                                <p className="card-text">{address.delCp} {address.delCity} /{address.delCountries}</p>

                                            </div>
                                            <div className="d-flex flex-row-reverse">
                                                <button className="btn btn-warning mb-2 mr-3 w-50" onClick={(e) => this.delete(address.idDeliv)}>Supprimer</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        {alert !== null && <div className="text-center alert alert-danger ">
                            {alert}
                        </div>}
                    </div>}
                    <div className="text-center">
                        <button className="btn btn-info mb-5 mr-3 w-50" onClick={(e) => this.showModal()}>Ajouter une adresse</button>

                        <AddressModal show={this.state.show} dataToParent={this.updateState} />
                    </div>
                </div>

            )
        }
    }
}

export default ProfileAddress;