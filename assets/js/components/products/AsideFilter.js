import React, { Component } from 'react';
import axios from 'axios';

class AsideFilter extends Component{
    constructor(props){
        super(props);
        this.state = {
          price_min: '0',
          price_max: '500',
          listCat: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        const target = event.target;
        const value = target.name;
        const price_min = target.name;
        const price_max = target.name;
        this.setState({[price_min]: event.target.value, [price_max]: event.target.value});
    }
  
    handleSubmit(event) {
      //alert('Votre prix est : ' + this.state.price_min + this.state.price_max);
      event.preventDefault();
      
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/searchByPrice',
        data: {'min': this.state.price_min,'max': this.state.price_max },
        headers: {'Content-Type': 'application/json' }
        })
        .then(function (response) {
            //handle success
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    }



    render(){
        return(
            <div id="aside_blue">
                <h5>Affiner votre recherche :</h5>
                <h5>Par prix :</h5>
                <form onSubmit = { this.handleSubmit } method="post">
                    <div className="form-row align-items-center">
                        <div className="form-group col-md-5">
                            <label htmlFor="inputState">min</label>
                            <select value={this.state.price_min} onChange={this.handleChange} name="price_min" id="price_min" className="form-control">
                                <option value="0" defaultValue>0</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                                <option value="200">200</option>
                                <option value="400">400</option>
                                <option value="500">500</option>
                                <option value="600">600</option>
                                <option value="700">700</option>
                                <option value="800">800</option>
                                <option value="900">900</option>
                                <option value="1000">1000</option>
                                <option value="1500">1500</option>
                                <option value="2000">2000</option>
                            </select>
                        </div>
                        <div className="form-group col-md-5">
                            <label htmlFor="inputState">max</label>
                            <select value={this.state.price_max} onChange={this.handleChange} name="price_max" id="price_max" className="form-control">
                            <option value="0">0</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                                <option value="200">200</option>
                                <option value="400">400</option>
                                <option value="500" defaultValue>500</option>
                                <option value="600">600</option>
                                <option value="700">700</option>
                                <option value="800">800</option>
                                <option value="900">900</option>
                                <option value="1000">1000</option>
                                <option value="1500">1500</option>
                                <option value="2000">2000</option>
                            </select>
                        </div>
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-secondary mb-2">valider</button>
                    </div>
                </form>
                <h5>Par marque :</h5>
                <h5>Par nom :</h5>
                <h5>Par catégorie :</h5>
            </div>
        )
    }

}

export default AsideFilter;