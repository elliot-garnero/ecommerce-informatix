import React, { Component, useState } from 'react';
import PayModal from './modal/PayModal';
import cardLogo from '../../../../images/cb.jpg';
import axios from 'axios';


class ProfilePay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updatedatas: [],
            isLoaded: false,
            payment: null,
            user: null,
            show: false,
            alert: null,
            active: false,
        }
        this.updateState = this.updateState.bind(this);
        this.showModal = this.showModal.bind(this);

    }


    showModal(e) {
        this.setState({
            show: true,
            alert: null
        });
    };


    updateState(value) {
        this.setState({ updatedatas: value.update })
        if (value.update == 'refresh') {
            fetch('http://localhost:8000/api/pay/1')
                .then(res => res.json())
                .then(json => {
                    this.setState({
                        payment: json,
                        isLoaded: true,
                        show: false
                    })
                });
        }
    }

    delete(id) {
        fetch('http://localhost:8000/api/delete_pay/' + id)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                this.setState({ alert: res.message });
                fetch('http://localhost:8000/api/pay/1')
                    .then(res => res.json())
                    .then(json => {
                        this.setState({
                            isLoaded: true,
                            payment: json,
                            show: false
                        })
                    });
            });
    }

    active(id, idUser) {
        const data = { idPay: id, idUser: idUser }; console.log(data)
        axios
            .post(`http://localhost:8000/api/active_pay`, data)
            .then(res => {
                console.log(res)
                this.setState({ alert: res.message });
                fetch('http://localhost:8000/api/pay/1')
                    .then(res => res.json())
                    .then(json => {
                        this.setState({
                            isLoaded: true,
                            payment: json,
                            show: false
                        })
                    });
            });
    }

    componentDidMount() {

        fetch('http://localhost:8000/api/pay/1')
            .then(res => res.json())
            .then(json => {
                json == '' ? json = null : json;
                this.setState({
                    payment: json,
                    isLoaded: true,
                    show: false
                })

            });
    }
    cc_format(value) {
        var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
        var matches = v.match(/\d{4,16}/g);
        var match = matches && matches[0] || ''
        var parts = []
        for (i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4))
        }
        if (parts.length) {
            return parts.join(' ')
        } else {
            return value
        }
    }

    render() {
        const { updatedatas, payment, isLoaded, alert } = this.state;
        const payStyle = { 'width': '42%' };
        const options = { year: 'numeric', month: 'numeric' };
        const inactiveStyle = {
            'filter': 'grayscale(80%)',
            'WebkitFilter': 'grayscale(80%)',
            'MozFilter': 'grayscale(80%)'
        }

        if (!isLoaded) {
            return <div>Chargement...</div>
        }
        else {

            return (

                <div className=" mt-5">
                    {/* {alert !== null &&
                        <div className="text-center alert alert-success">
                            <p >{alert}</p>
                        </div>} */}
                    <div className="h2 text-center">Mes CB enregistrées</div><br />
                    {payment == null && <p className="text-center">
                        Retrouvez ici les cartes bancaires enregistrées lors de vos précédents achats sur notre site.<br />
                        <strong>Vous pouvez sélectionner votre carte préférée pour gagner du temps lors de vos prochaines commandes.</strong>
                    </p>}
                    <div className="bloc-cards pb-5 ">
                        {payment !== null && <div className="container-fluid" >
                            <div className="row">
                                {payment.map((cb, i) => (

                                    <div className="card mr-5 mb-3 " key={i} style={payStyle}>

                                        {cb.active && <img className="card-img-top" src={cardLogo} alt="Card image" />}
                                        {!cb.active && <img className="card-img-top" src={cardLogo} style={inactiveStyle} alt="Card image" />}
                                        <div className="card-img-overlay">

                                            <h5 className="card-title d-flex flex-row-reverse mb-3">Carte n° {cb.payCb.toString().replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()}</h5>
                                            <p className="card-text d-flex flex-row-reverse pt-3">M. {cb.payLastname} {cb.payFirstname}</p>
                                            <p className="card-text d-flex flex-row-reverse">Expire à fin : {new Date(cb.payExpiration.substr(0, 10)).toLocaleDateString('fr-FR', options)}</p>
                                            <div className="d-flex flex-row-reverse">
                                                <button className="btn btn-warning mb-2 mr-3 w-50 btn-sm" onClick={(e) => this.delete(cb.idPay)}>Supprimer</button>
                                                {!cb.active && <button className="btn btn-warning mb-2 mr-3 w-50 btn-sm" onClick={(e) => this.active(cb.idPay, cb.idUser)}>Activer</button>}

                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>}
                    </div>
                    <div className="text-center">
                        <button className="btn btn-info mb-5 mr-3 w-50" onClick={(e) => this.showModal()}>Ajouter une carte</button>
                    </div>
                    <PayModal show={this.state.show} dataToParent={this.updateState} />
                </div>
            )
        }
    }
}
export default ProfilePay;