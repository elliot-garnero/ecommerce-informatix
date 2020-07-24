import React, { Component } from 'react';
import ProfileCommands from './profile/ProfileCommands';
import ProfileAddress from './profile/ProfileAddress';
import ProfilePay from './profile/ProfilePay';
import ProfileUpdate from './profile/ProfileUpdate'
import AddComButton from './buttons/AddComButton';
import AddAdressButton from './buttons/AddAdressButton';
import AddUpdateButton from './buttons/AddUpdateButton';
import AddPayButton from './buttons/AddPayButton';

class AsideProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        updatedatas: [],
        isEmptyState: true,
        update: true,
        pay: false,
        update: false,
        commands: false, 
      } 
      this.updateState = this.updateState.bind(this);
      this.addCommands = this.addCommands.bind(this);
      this.addAdress = this.addAdress.bind(this);
      this.addUpdate = this.addUpdate.bind(this);
      this.addPay = this.addPay.bind(this);
    }

    updateState(value) {
        this.setState({updatedatas:value})
        
    }
    addCommands(){
        this.setState({
          ...this.state,
          isEmptyState: true,
          update: false,
          pay: false,
          update: false,
          commands: true,
          
        })
      }

      addAdress(){
        this.setState({
            ...this.state,
            isEmptyState: true,
            commands: false,
            update: false,
            pay:false,
            adress: true
        })
      }

      addUpdate(){
        this.setState({
            ...this.state,
            isEmptyState: true,
            commands: false,
            adress: false,
            pay: false,
            update: true          
        })
      }
      addPay(){
        this.setState({
            ...this.state,
            isEmptyState: true,
            commands: false,
            update: false,
            adress: false,
            pay: true
        })
      }

    render(){
        const updatedatas = this.state;
       
        return(
            
            <div className="container">
           
            {this.state.isEmptyState && <AddComButton addCom={this.addCommands} />}
            {this.state.isEmptyState && <AddAdressButton addAdress={this.addAdress} />}
            {this.state.isEmptyState && <AddUpdateButton addUpdate={this.addUpdate} />}
            {this.state.isEmptyState && <AddPayButton addPay={this.addPay} />}
            {this.state.adress && <ProfileAddress />}
            {this.state.commands && <ProfileCommands />}
            {this.state.update && <ProfileUpdate />}
            {this.state.pay && <ProfilePay />}
          </div>   
            

        )
    }
}

export default AsideProfile;