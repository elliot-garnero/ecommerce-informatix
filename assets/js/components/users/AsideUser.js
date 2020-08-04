import React, { Component } from 'react';


class AsideUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
        update: '',
        user:[{}],
        isLoaded: false,
        updatedatas:this.props.dataFromParent,
        flag:true,
        addresses: [{}]
      } 
      this.updateState = this.updateState.bind(this);
      this.refresh = this.refresh.bind(this);
    }

    refresh(){
        
        fetch('http://localhost:8000/api/user/1')
          .then(res => res.json())
          .then(json => {
              this.setState({
                user: json,
                isLoaded:true,
                flag:false
              })
        });
        fetch('http://localhost:8000/api/address')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    addresses: json,
                    flag: false
                })
            });
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
                isLoaded:true,
                flag:true
              })
        });
          fetch('http://localhost:8000/api/address')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    addresses: json,
                    flag:true
                })
            });
        
    }

    render(){
        const {updatedatas, user, isLoaded, flag, addresses} = this.state;
       
        if (!isLoaded){
            return <div>Chargement...</div>
        }
        else{
            if(!flag){this.state.flag=true}
            if(flag  && this.props.dataFromParent.updatedatas == 'refresh')
                {  
                    this.refresh();
                }
            else if(flag  && this.props.dataFromParent.address == true){
                this.refresh();
            }
            const options = {  year: 'numeric', month: 'short', day: 'numeric' };
            let date =new Date(user.createdAt.substr(0,10));
            date = date.toLocaleDateString('fr-FR', options);
            return(
                <div className="card-group mb-5">
                    <div className="card">
                        <div className="card-header">{user.firstname} {user.lastname} </div>
                        
                        <div className="card-body">
                            <p className="card-title">{user.address}</p>
                            <p className="card-text">{user.cp} {user.city} / {user.countries}</p>
                            
                            <p className="card-text"><small className="text-muted">{user.email}</small></p>
                        </div>
                        <div className="card-footer">Cagnotte : {user.discount == null ? 0 :user.discount} €</div>
                        <div className="card-footer">inscription le : {date}</div>
                        {addresses.map((address, i) => (
                            
                        <div key={i} >
                        {address.active == true && <div className="card-footer">
                            Adresse de livraison préférée : <small>M. {address.delFirstname} {address.delLastname}<br/>
                                {address.delAddress} <br/>
                                {address.delCp} {address.delCity} / {address.delCountries}
                            </small>
                        </div>}
                        {/* {address.active == 0 && <p>Adresse de livraison préférée : {address.active}</p>} */}
                        </div>

                         ) )}
                    </div>
                    </div>
            )
        }
    }
}

export default AsideUser;