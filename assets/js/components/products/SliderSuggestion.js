import React, { Component } from 'react';
import axios from 'axios';

class SliderSuggestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products1: [],
      products2: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/productsRandom')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          products1: json,
        });
      });
    fetch('http://localhost:8000/api/productsRandom')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          products2: json,
        });
      });
  }

  render() {
    var { products1, products2 } = this.state;

    return (
      <div className="mb-4">
        <hr></hr>
        <div className="row">
          <div className="col-md-12">
            <h3 className="p-3 bg-blue text-white">Produits compatibles</h3>
          </div>
        </div>

        <div
          id="multi-item-example"
          className="carousel slide carousel-multi-item"
          data-ride="carousel"
        >
          <div className="row ml-3 controls-top">
            <a
              className=" p-3 rounded-circle"
              href="#multi-item-example"
              data-slide="prev"
            >
              <i className="fas fa-chevron-left"></i>
            </a>
            <a
              className="p-3 rounded-circle"
              href="#multi-item-example"
              data-slide="next"
            >
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>

          <ol className="carousel-indicators">
            <li
              data-target="#multi-item-example"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#multi-item-example" data-slide-to="1"></li>
            <li data-target="#multi-item-example" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="d-flex">
                {products1.map((product, i) => (
                  <div className="col-md-3" key={i}>
                    <div className="card mb-2">
                      <img
                        className="card-img-top"
                        src={product.picture1}
                        alt={product.name}
                        max-height="200"
                      />
                      <div className="card-body text-center">
                        <a
                          href={`/detailsProduct${product.idProduct}`}
                          className="text-decoration-none"
                        >
                          <h5 className="card-title">{product.name}</h5>
                          <h5 className="card-text txt-blue">
                            <b>{product.price} €</b>
                          </h5>
                          <button className="btn btn-warning">
                            voir <i className="fa fa-plus-circle"></i>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="carousel-item">
              <div className="d-flex ">
                {products2.map((product, i) => (
                  <div className="col-md-3" key={i}>
                    <div className="card mb-2">
                      <img
                        className="card-img-top"
                        src={product.picture1}
                        alt={product.name}
                        max-height="200"
                      />
                      <div className="card-body text-center">
                        <a
                          href={`/detailsProduct${product.idProduct}`}
                          className="text-decoration-none"
                        >
                          <h5 className="card-title">{product.name}</h5>
                          <h5 className="card-text txt-blue">
                            <b>{product.price} €</b>
                          </h5>
                          <button className="btn btn-warning">
                            voir <i className="fa fa-plus-circle"></i>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SliderSuggestion;
