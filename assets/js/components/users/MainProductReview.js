import React, { Component } from 'react';

class MainProductReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: props.match.params.id,
    };
  }

  render() {
    return (
      <form method="POST" action="/api/createreview" className="container">
        <div className="card">
          <h2 className="card-header info-color white-text text-center py-4 txt-color">
            <strong>
              Laisser un avis sur le produit n°{this.state.productID}
            </strong>
          </h2>

          <input type="hidden" name="productID" value={this.state.productID} />

          <div className="card-header info-color white-text text-center py-4">
            <label htmlFor="rating">Note (sur 5)</label>
            <select className="form-control" name="rating">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className="card-header info-color white-text text-center py-4">
            <label htmlFor="review">Avis</label>
            <textarea
              rows="3"
              className="form-control"
              id="review"
              required
              name="review"
            />
          </div>

          <input
            type="submit"
            className="btn btn-primary btn-block"
            value="Envoyer"
          />
          <br />
        </div>
      </form>
    );
  }
}

export default MainProductReview;
