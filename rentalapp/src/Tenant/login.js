// @Author Njoroge Maurice
// Using uncontrolled componentin login form

import React, {Component} from 'react'
import {Navigate, redirect, Routes,Route, Link} from 'react-router-dom'
import '../App.css'

import DashBoard from './dashboard';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            idNumber:0,
            roomNo:"",
            password:"",
            tenantData:[],
            error:false,
            redirect:false
        }
        
        this.handleid = this.handleid.bind(this)
        this.handleroom = this.handleroom.bind(this)
        this.handlepass = this.handlepass.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleid(event){
        this.setState({idNumber:event.target.value})
    }
    handleroom(event){
        this.setState({roomNo:event.target.value})
    }
    handlepass(event){
        this.setState({password:event.target.value})
    }

    

    async handleSubmit(event){
        event.preventDefault();

        await fetch(`/tenant/${this.state.idNumber}`,{
            method: 'GET',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
        })
        .then(response=>response.json())
        .then(data=>this.setState({tenantData:data}));
        
        if(this.state.password == this.state.tenantData.pass 
            && this.state.idNumber == this.state.tenantData.id)
        {
            console.log(this.state.tenantData);
            this.setState({redirect:true})
        }
        else
        {
            this.setState({error:true});
        }
        
    }

    render(){
        // <Routes>
        //     <Route exact path='/dashboard' element={<DashBoard/>}/>
        // </Routes>
        return(
            <div>
                {this.state.redirect? <DashBoard 
                id={this.state.tenantData.id}
                fname={this.state.tenantData.firstName}
                lname={this.state.tenantData.lastName}
                room={this.state.tenantData.room}
                phone={this.state.tenantData.phone}
                /> :
                
                <form className='loginform' onSubmit={this.handleSubmit}>
                <h1 className='note'>Sign in</h1>
                <div className='row'>
                <label>
                    National Id number
                </label>
                    <input type="number" value={this.state.idNumber} onChange={this.handleid} placeholder="Id number*"/>
                </div>    
                
                <div className='row'>
                <label>
                    Password</label>
                    <input type="password" value={this.state.password} onChange={this.handlepass} placeholder="Password*"/>
                </div>
                {this.state.error? <p className='error'>User not found</p>:<p></p>}
                <p className='note'><input className='button' type="submit" value="Sign in"/></p>
                <p className='note'>Or</p>
                <p className='note'><Link to={'/account'}>Create account</Link></p>
            </form>}
            

            </div>
        )
    }
} 



export default Login;


