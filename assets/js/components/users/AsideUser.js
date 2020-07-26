import React, { Component } from 'react';

class AsideUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
        update: '',
        user:null,
        isLoaded: false,
      } 
      this.updateState = this.updateState.bind(this);
     
    }

    updateState(value) {
        this.setState({updatedatas:value.update})
    
    }
    
    componentDidMount() {
        fetch('http://localhost:8000/api/user/1')
          .then(res => res.json())
          .then(json => {
              this.setState({
                user: json,
                isLoaded:true
              })
        });
    }

    render(){
        const {updatedatas, user, isLoaded} = this.state;
       
        if (!isLoaded){
            return <div>Chargement...</div>
        }
        else{
            const options = {  year: 'numeric', month: 'short', day: 'numeric' };
            let date =new Date(user.createdAt.substr(0,10));
            date = date.toLocaleDateString('fr-FR', options);
            return(
                <div className="card-group mb-5">
                    <div className="card">
                        <div className="card-header">{user.firstname} {user.lastname}</div>
                        
                        <div className="card-body">
                            <p className="card-title">{user.address}</p>
                            <p className="card-text">{user.cp} {user.city} / {user.countries}</p>
                            
                            <p className="card-text"><small className="text-muted">{user.email}</small></p>
                        </div>
                        
                        <div className="card-footer">inscription le : {date}</div>
                    </div>
                    </div>
            )
        }
    }
}

export default AsideUser;