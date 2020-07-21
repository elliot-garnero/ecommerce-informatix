import React, { Component } from 'react';
import axios from 'axios';

class AsideFilter extends Component{
    constructor(props){
        super(props);
        this.state = {
          price_min: '',
          price_max: '',
          brand:[],
          search: '',
          update:'',
          nameProduct: [],
          categorie: [],
        }
        this.byPriceChange = this.byPriceChange.bind(this);
        this.byPrice = this.byPrice.bind(this);
        this.byBrand = this.byBrand.bind(this);
        this.byBrandChange =this.byBrandChange.bind(this);
        this.byName = this.byName.bind(this);
        this.byNameChange =this.byNameChange.bind(this);
        this.byCategorie = this.byCategorie.bind(this);
        this.byCategorieChange =this.byCategorieChange.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:8000/api/products')
            .then(res => res.json())
            .then(json => {
                this.setState({ nameProduct: json, brand: json });
                //console.log(this.state.nameProduct);
            });
        fetch('http://localhost:8000/api/getcategories')
            .then(res => res.json())
            .then(json => {
                this.setState({ categorie: json });
                //console.log(this.state.categorie);
            });
    }

    byPriceChange(event) {
        const target = event.target;
        const price_min = target.name;
        const price_max = target.name;
        this.setState({[price_min]: event.target.value, [price_max]: event.target.value});
    }
  
    byPrice(event) {
        event.preventDefault();
        axios({
        method: 'post',
        url: 'http://localhost:8000/api/searchByPrice',
        data: {'min': this.state.price_min,'max': this.state.price_max },
        headers: {'Content-Type': 'application/json' }
        })
        .then( (response) => {
            console.log(response);
            this.setState({update:response});
            this.sendToParent()
        })
        .catch(function (response) {
            console.log(response);
        });
    }

    byBrandChange(event) {
        this.setState({search: event.target.value});
    }
    
    byBrand(event) {
        event.preventDefault();
        // console.log(this.state.search);
        axios({
        method: 'post',
        url: 'http://localhost:8000/api/searchByBrand',
        data: {'brand': this.state.search },
        headers: {'Content-Type': 'application/json' }
        })
        .then( (response) => {
            //handle success
            console.log(response);
            this.setState({update:response});
            this.sendToParent();
        })
        .catch(function (response) {
            console.log(response);
        });
    }
    
    sendToParent() {
        const update = this.state;
        this.props.dataToParent(update);
    }

    byNameChange(event) {
        this.setState({search: event.target.value});
    }

    byName(event) {
        event.preventDefault();
        //console.log(this.state.search);
        axios({
        method: 'post',
        url: 'http://localhost:8000/api/searchByName',
        data: {'name': this.state.search },
        headers: {'Content-Type': 'application/json' }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (response) {
            console.log(response);
        });
    }

    byCategorieChange(event) {
        this.setState({search: event.target.value});
    }

    byCategorie(event) {
        event.preventDefault();
        //console.log(this.state.search);
        axios({
        method: 'post',
        url: 'http://localhost:8000/api/searchByCategorie',
        data: {'name': this.state.search },
        headers: {'Content-Type': 'application/json' }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (response) {
            console.log(response);
        });
    }
    

    render(){

    const { brand } = this.state;
    let brandList = brand.length > 0
    	&& brand.map((item, i) => {
      return (
        <option key={i} value={item.brand}>{item.brand}</option>
      )
      }, this);

    const { nameProduct } = this.state;
    let productNameList = nameProduct.length > 0
        && nameProduct.map((item, i) => {
        return (
            <option key={i} value={item.name}>{item.name}</option>
        )
        }, this);

    const { categorie } = this.state;
    let categorieList = categorie.length > 0
        && categorie.map((item, i) => {
        return (
            <option key={i} value={item.catName}>{item.catName}</option>
        )
        }, this);

        return(
            <div id="aside_blue">
                <h5>Affiner votre recherche :</h5>
                <h5>Par prix :</h5>
                <form onSubmit = { this.byPrice } method="post">
                    <div className="form-row align-items-center">
                        <div className="form-group col-md-5">
                            <label htmlFor="inputState">min</label>
                            <select value={this.state.price_min} onChange={this.byPriceChange} name="price_min" id="price_min" className="form-control">
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
                            <select value={this.state.price_max} onChange={this.byPriceChange} name="price_max" id="price_max" className="form-control">
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
                <form onSubmit = { this.byBrand } method="post">
                    <div className="form-row align-items-center">
                        <div className="form-group col-md-10">
                
                            <select value={this.state.search} onChange={this.byBrandChange} name="brand_name" id="brand_name" className="form-control">
                            {brandList}
                            </select>                        
                        </div>
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-secondary mb-2">valider</button>
                    </div>
                </form>

                <h5>Par nom :</h5>
                <form onSubmit = { this.byName } method="post">
                    <div className="form-row align-items-center">
                        <div className="form-group col-md-10">
                
                            <select value={this.state.search} onChange={this.byNameChange} name="product_name" id="product_name" className="form-control">
                            {productNameList}
                            </select>                        
                        </div>
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-secondary mb-2">valider</button>
                    </div>
                </form>

                <h5>Par catégorie :</h5>
                <form onSubmit = { this.byCategorie } method="post">
                    <div className="form-row align-items-center">
                        <div className="form-group col-md-10">
                
                            <select value={this.state.search} onChange={this.byCategorieChange} name="categorie_name" id="categorie_name" className="form-control">
                            {categorieList}
                            </select>                        
                        </div>
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-secondary mb-2">valider</button>
                    </div>
                </form>
                </div>
        )
    }
}

export default AsideFilter;