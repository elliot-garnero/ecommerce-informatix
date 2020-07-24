import React, { Component } from 'react';

class ProfileAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updatedatas: [],
            isLoaded: false,
            addresses: null
        }
        this.updateState = this.updateState.bind(this);
    }

    updateState(value) {
        this.setState({ updatedatas: value.update })

    }

    componentDidMount() {
        fetch('http://localhost:8000/api/address/1')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    addresses: json,

                })
            });
    }

    render() {
        const addressStyle = { 'width': '18rem' }
        const { updatedatas, addresses, isLoaded } = this.state;
        if (!isLoaded) {
            return <div>Chargement...</div>
        }
        else {
            return (
                <div className="container-fluid">
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
                </div>
            )
        }
    }
}

export default ProfileAddress;