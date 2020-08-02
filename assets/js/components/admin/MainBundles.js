import React, { Component } from 'react';
import axios from 'axios';

class MainBundles extends Component {

    constructor(props){
        super(props);
        this.state = {
          //categories: [], 
        }
    }

    //DID_MOUNT
    componentDidMount() {
        //this.getCategories();
        }

    //FUNCTIONS
    // getCategories() {
    //     axios.get(`http://localhost:8000/api/getcategories`)
    //     .then((res) => {
    //         const categories = res.data;
    //         this.setState({ 
    //             categories, 
    //         });
    //     });
    // }
    
    render(){
        //const categories = this.state.categories;
        return(
        <div className="container card">
            Main
        </div>
        )
    }
}

export default MainBundles;
