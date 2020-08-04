import React, { Component } from 'react';
import axios from 'axios';

class AsideUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
        update: '',
        id: "",
        user:null,
        isLoaded: false,
        updatedatas:this.props.dataFromParent,
        flag:true
      } 
      this.updateState = this.updateState.bind(this);
      this.refresh = this.refresh.bind(this);
    }

    refresh(){
        
        fetch('http://localhost:8000/api/user/16')
          .then(res => res.json())
          .then(json => {
              this.setState({
                user: json,
                isLoaded:true,
                flag:false
              })
        });
    }

    updateState(value) {
        this.setState({updatedatas:value.update})
       
    }
    
    componentDidMount() {
        this.getDatas();
        // console.log(this.state.id);
        // fetch('http://localhost:8000/api/user/16')
        //   .then(res => res.json())
        //   .then(json => {
        //       this.setState({
        //         user: json,
        //         isLoaded:true,
        //         flag:true
        //       })
        // });
        // console.log('toto2')
    }


    async getDatas() {
        await axios.get(`http://127.0.0.1:8000/api/user/authenticated`)
        .then((res) => {
            console.log(res);
          this.setState({ id: res.data.results.id});
        });
            await  fetch('http://localhost:8000/api/user/'+this.state.id)
            .then(res => res.json())
            .then(json => {
                console.log(this.state.id);
                this.setState({
                user: json,
                isLoaded:true,
                flag:true
                })
        });
      }

    render(){
        const {updatedatas, user, isLoaded, flag} = this.state;
       
        if (!isLoaded){
            return <div>Chargement...</div>
        }
        else{
            if(!flag){this.state.flag=true}
            if(flag  && this.props.dataFromParent.updatedatas == 'refresh')
                {  
                    this.refresh();
                }
            const options = {  year: 'numeric', month: 'short', day: 'numeric' };
            let date =new Date(user.createdAt.substr(0,10));
            date = date.toLocaleDateString('fr-FR', options);
            return(
                <div className="card-group mb-5">
                    <div className="card">
            <div className="card-header h5">{user.firstname} {user.lastname} </div>
            <p className="card-header"><small className="text-muted">pseudo : {user.username}</small></p>
                        <div className="card-body">
                        <p className="card-text"><small className="text-muted">{user.email}</small></p>
                            <p className="card-title">{user.address}</p>
                            <p className="card-text">{user.cp} {user.city} / {user.countries}</p>
                            <p className="card-text"><small className="text-muted">Cagnotte : {user.discount} €</small></p>    
                            
                        </div>
                        
                        <div className="card-footer">inscription le : {date}</div>
                    </div>
                    </div>
            )
        }
    }
}

export default AsideUser;