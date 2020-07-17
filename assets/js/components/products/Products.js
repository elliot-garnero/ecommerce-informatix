import React, { Component } from 'react';
import axios from 'axios';

class Products extends Component {
  constructor() {
    super();

    this.state = { products: [], loading: true };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    axios.get(`https://jsonplaceholder.typicode.com/posts/`).then((res) => {
      const products = res.data.slice(0, 15);
      this.setState({ products, loading: false });
    });
  }

  render() {
    const loading = this.state.loading;
    return (
      <div>
        <section className="row-section">
          <div className="container">
            <div className="row">
              <h2 className="text-center">List of products</h2>
            </div>

            {loading ? (
              <div className={'row text-center'}>
                <span className="fa fa-spin fa-spinner fa-4x"></span>
              </div>
            ) : (
              <div className={'row'}>
                {this.state.products.map((product) => (
                  <div
                    className="col-md-10 offset-md-1 row-block"
                    key={product.id}
                  >
                    <ul id="sortable">
                      <li>
                        <div className="media">
                          <div className="media-body">
                            <h4>{product.title}</h4>
                            <p>{product.body}</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default Products;
