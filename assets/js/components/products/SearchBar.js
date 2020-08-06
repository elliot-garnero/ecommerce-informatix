import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            results: '',
            update:''
        }
        this.queryChange = this.queryChange.bind(this);
        this.onSubmitQuery = this.onSubmitQuery.bind(this);
    }

    queryChange(event) {
        const search = event.target.value;
        this.setState({
            query: search
        });
    };

    onSubmitQuery(e) {
        e.preventDefault(); console.log(this.state.query)
        const query = { 'query': this.state.query };
        axios
            .post(`http://localhost:8000/api/search`, query)
            .then((res) => {
                if (res) {
                    console.log(res)
                    this.setState({ results: res.data });
                    this.sendToParent();
                }
            })
            .catch(err => console.log(err));
    }

    sendToParent() {
        const update = this.state;
        this.props.dataToParent(update);
    }

    render() {
        const bgStyle ={'backgroundColor': '#0c3e75' }
        return (
            <form onSubmit={this.onSubmitQuery} className="text-center" style={bgStyle}>
                <input
                    className="w-25"
                    type="text"
                    placeholder="Rechercher un produit..."
                    value={this.state.query}
                    onChange={this.queryChange} />
                <button className="btn btn-link"><i className="fab fa-sistrix bg-warning m-1 p-2 rounded" ></i></button>
            </form>
        );
    }
}

export default SearchBar;