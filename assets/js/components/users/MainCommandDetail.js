import React, { Component } from 'react';
import jspdf from 'jspdf';

class MainCommandDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commandID: props.match.params.id,
      isLoaded: false,
      command: null,
      commandProducts: null,
    };
    this.generatePDF = this.generatePDF.bind(this);
  }

  componentDidMount() {
    this.mickaelTropGrosseQueue();
  }

  async mickaelTropGrosseQueue() {
    let command;
    let productIDsArray;
    let productsArray = [];
    await fetch(
      'http://localhost:8000/api/detailCommand/' + this.state.commandID
    )
      .then((res) => res.json())
      .then((json) => {
        command = json;
        let productsString = json[0].ordProducts;
        productIDsArray = productsString.split(';');
        productIDsArray.pop();
      });

    await productIDsArray.forEach((element) => {
      fetch('http://localhost:8000/api/products/' + element)
        .then((res) => res.json())
        .then((json) => {
          productsArray.push(json);
          this.setState({
            isLoaded: true,
            command,
            commandProducts: productsArray,
          });
        });
    });
  }

  generatePDF() {
    let doc = new jspdf();
    let elementHTML = document.getElementsByClassName(
      'container-fluid mb-5 pdf'
    )[0];

    doc.fromHTML(elementHTML, 8, 8);

    doc.save(`commande_informatix_${this.state.commandID}.pdf`);
  }

  render() {
    const { command, commandID, isLoaded } = this.state;
    const commandStyle = { width: '100%' };
    const options = { year: 'numeric', month: 'short', day: 'numeric' };

    if (!isLoaded) {
      return <div className="container">Chargement...</div>;
    } else {
      return (
        <div className="container mt-5">
          <div className="h2 text-center">Commande n°{commandID}</div>
          <br />
          <div className="text-center mb-5">
            <button className="btn btn-primary" onClick={this.generatePDF}>
              Générer une facture
            </button>
          </div>
          {command.length < 1 && (
            <p className="text-center">
              Pas de commande avec cet identifiant
              <br />
            </p>
          )}
          {command !== null && (
            <div className="container-fluid mb-5 pdf">
              <div className="row">
                {command.map((element, i) => (
                  <div
                    className="card"
                    style={commandStyle}
                    key={i}
                    id={element.idOrder}
                  >
                    <div className="row no-gutters">
                      <div className="card-body">
                        <div className=" card-title">
                          <h2>Société INFORMATIX</h2>
                          <p>
                            Commande n° WEB00{element.idOrder}/{element.idUser}
                          </p>
                          <p className="card-text">
                            Expédié à : {element.ordLastname}{' '}
                            {element.ordFirstname}
                          </p>
                          <p className="card-text">{element.ordAddress}</p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="card-body">
                          <h5 className="card-title">
                            Statut de la commande : {element.ordStatus}
                          </h5>
                          <p className="card-text">
                            Passée le :{' '}
                            {new Date(
                              element.ordDate.substr(0, 10)
                            ).toLocaleDateString('fr-FR', options)}
                          </p>
                          <p className="card-text">
                            Mode d'expédition : {element.ordMode}
                          </p>
                          <p className="card-text">
                            <strong>
                              Prix total : {element.ordTotal} Euros
                            </strong>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      {this.state.commandProducts.map((product, i) => (
                        <div key={i} className="row mt-5 border-bottom">
                          <div className="col-9">
                            <p>Identifiant produit : {product.idProduct}</p>
                            <p>
                              <strong>
                                {product.name} - {product.brand}
                              </strong>
                            </p>
                            <p>{product.characteristics}</p>
                            <a href={`productReview${product.idProduct}`}>
                              Laisser un avis sur ce produit
                            </a>
                          </div>
                          <div className="col-3">
                            <p>
                              <strong>{product.price} Euros</strong>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }
  }
}

export default MainCommandDetail;
