import React, { Component } from 'react';
import axios from 'axios';
import cardLogo from '../../../../images/cb.jpg';

export default class BlockCbModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            update: '',
            id: '',
            nom: '',
            prenom: '',
            payment: false
        }
        this.blockCb = this.blockCb.bind(this);
        this.deBlockCb = this.deBlockCb.bind(this);
    }

    blockCb($idPay) {
        axios
        .post(`http://localhost:8000/api/admin/blockCb/` + $idPay)
        .then((res) => {

        console.log(res)
        
        fetch('http://localhost:8000/api/admin/pay/' + this.props.id)
            .then(res => res.json())
            .then(json => {
                json == '' ? json = null : json;
                this.setState({
                    payment: json,
                    id: this.props.id,
                    nom: this.props.nom,
                    prenom: this.props.prenom,
                    update: 'refresh'
                })
            });
            this.sendToParent();
        })
        .catch(err => console.log(err));
    }

    deBlockCb($idPay) {
        axios
        .post(`http://localhost:8000/api/admin/deBlockCb/` + $idPay)
        .then((res) => {

        console.log(res)
        
        fetch('http://localhost:8000/api/admin/pay/' + this.props.id)
            .then(res => res.json())
            .then(json => {
                json == '' ? json = null : json;
                this.setState({
                    payment: json,
                    id: this.props.id,
                    nom: this.props.nom,
                    prenom: this.props.prenom,
                    update: 'refresh'
                })
            });
            this.sendToParent();
        })
        .catch(err => console.log(err));
    }

    sendToParent() {
        const update = this.state;
        this.props.dataToParent(update);
    }


    render() {
        const { updatedatas, payment } = this.state;
        const payStyle = { 'width': '30%' };
        const options = { year: 'numeric', month: 'numeric' };
        const inactiveStyle = {
            'filter': 'opacity(0%)',
            'WebkitFilter': 'opacity(0%)',
            'MozFilter': 'opacity(0%)'

        }
        const blockedStyle = {
            'filter': 'grayscale(100%)',
            'WebkitFilter': 'grayscale(100%)',
            'MozFilter': 'grayscale(100%)'
        }
        if (!this.props.showBlock) {
            return null;
        }

        return (
            <div className=" mt-5">

                <div className="h2 text-center">Les CB du client : {this.props.prenom} {this.props.nom}</div><br />

                <div className="bloc-cards pb-5 ">
                    {payment && <div className="container-fluid" >
                        <div className="row">
                            {payment.map((cb, i) => (
                                <div className="card mr-5 mb-3 " key={i} style={payStyle}>
                                    {cb.active == 0 && <img className="card-img-top" src={cardLogo} style={inactiveStyle} alt="Card image" />}
                                    {cb.active == 1 && <img className="card-img-top img-thumbnail" src={cardLogo} alt="Card image" />}
                                    {cb.active == 2 && <img className="card-img-top" src={cardLogo} style={blockedStyle} alt="Card image" />}

                                    {/* {!cb.active && <img className="card-img-top" src={cardLogo} style={inactiveStyle} alt="Card image" />} */}
                                    <div className="card-img-overlay">

                                        <h5 className="card-title d-flex flex-row-reverse mb-3">Carte n° {cb.payCb.toString().replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()}</h5>
                                        <p className="card-text d-flex flex-row-reverse pt-3">M. {cb.payLastname} {cb.payFirstname}</p>
                                        <p className="card-text d-flex flex-row-reverse">Expire à fin : {new Date(cb.payExpiration.substr(0, 10)).toLocaleDateString('fr-FR', options)}</p>
                                        <div className="d-flex flex-row-reverse">
                                            {cb.active !== 2 && <button className="btn btn-warning mb-2 mr-3 w-50 btn-sm" onClick={() => this.blockCb(cb.idPay)}>Bloquer</button>}
                                            {cb.active == 2 && <button className="btn btn-warning mb-2 mr-3 w-50 btn-sm" onClick={(e) => this.deBlockCb(cb.idPay)}>Débloquer</button>}

                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>}
                    {this.props.payment !== null && !payment && <div className="container-fluid" >
                        <div className="row">
                            {this.props.payment.map((cb, i) => (

                                <div className="card mr-5 mb-3 " key={i} style={payStyle}>
                                    {cb.active == 0 && <img className="card-img-top" src={cardLogo} style={inactiveStyle} alt="Card image" />}
                                    {cb.active == 1 && <img className="card-img-top img-thumbnail" src={cardLogo} alt="Card image" />}
                                    {cb.active == 2 && <img className="card-img-top" src={cardLogo} style={blockedStyle} alt="Card image" />}

                                    {/* {!cb.active && <img className="card-img-top" src={cardLogo} style={inactiveStyle} alt="Card image" />} */}
                                    <div className="card-img-overlay">

                                        <h5 className="card-title d-flex flex-row-reverse mb-3">Carte n° {cb.payCb.toString().replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()}</h5>
                                        <p className="card-text d-flex flex-row-reverse pt-3">M. {cb.payLastname} {cb.payFirstname}</p>
                                        <p className="card-text d-flex flex-row-reverse">Expire à fin : {new Date(cb.payExpiration.substr(0, 10)).toLocaleDateString('fr-FR', options)}</p>
                                        <div className="d-flex flex-row-reverse">
                                            {cb.active !== 2 && <button className="btn btn-warning mb-2 mr-3 w-50 btn-sm" onClick={() => this.blockCb(cb.idPay)}>Bloquer</button>}
                                            {cb.active == 2 && <button className="btn btn-warning mb-2 mr-3 w-50 btn-sm" onClick={(e) => this.deBlockCb(cb.idPay)}>Débloquer</button>}

                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>}
                </div>
            </div>

        );
    }
}
