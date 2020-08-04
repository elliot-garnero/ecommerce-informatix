import React, { Component } from 'react';
import axios from 'axios';

class MainBundles extends Component {

    constructor(props){
        super(props);
        this.state = {
          bundles: [], 
        }
    }

    //DID_MOUNT
    componentDidMount() {
        this.getBundles();
        }

    //FUNCTIONS
    getBundles() {
        axios.get(`http://localhost:8000/api/getBundles`)
        .then((res) => {
            this.setState({ 
                bundles: res.data
            });
        });
    }
    
    render(){
        const bundles = this.state.bundles;
        return(
        <div className="container">
            <div className="col">
                <div className="row">
                    <div className="col">
                        <h2 className="m-3 p-3 text-center txt-orange">
                            <strong>Administrateur / Gestionnaire de lots : </strong>
                        </h2>
                    </div>
                </div> 
                <div className="row">
                    <div className="col card">
                        <div className="row m-3 mb-0 mt-5">
                            <h4>
                                <strong>Liste des lots :</strong>
                            </h4>
                        </div>
                        <div className="row m-3">
                            <a href={`/addBundle`}>
                                <button type="button" className="mt-2 btn btn-primary"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Créer un nouveau lot</button>
                            </a>
                        </div>
                        <div className="row m-2 mt-0 p-2 pt-0">
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">N°</th>
                                        <th scope="col">Nom</th>
                                        <th scope="col">Images</th>
                                        <th scope="col">Réf.Produits</th>
                                        <th scope="col">Prix</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                {bundles.map((bundle, i) =>(
                                    <tr key={i}>
                                        <th scope="row">{bundle.idBundle}</th>
                                        <td>{bundle.bundName}</td>
                                        <td>
                                            <img className="w-25" src={bundle.bundPicture1}/>
                                            <img className="w-25" src={bundle.bundPicture2}/>
                                            <img className="w-25" src={bundle.bundPicture3}/>
                                            <img className="w-25" src={bundle.bundPicture4}/>
                                        </td>
                                        <td>{bundle.bundProducts}</td>
                                        <td>{bundle.bundPrice} €</td>
                                        <td>{bundle.ordProducts}</td>
                                        <td>
                                            <a href={`/modifsBundle${bundle.idBundle}`}>
                                                <button type="button" className="mt-2 btn btn-secondary"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Modifier le lot</button>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>                      
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        )
    }
}

export default MainBundles;
