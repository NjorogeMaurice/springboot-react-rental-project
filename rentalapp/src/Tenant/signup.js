import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id:0,
            fname:"",
            lname:"",
            room:"",
            pass:"",
            pass1:"",
            show:false,
            tenantData:[],
            error:false,
            passerror:false
        }

        this.handleId = this.handleId.bind(this)
        this.handleRoom = this.handleRoom.bind(this)
        this.handlePass = this.handlePass.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleShow = this.handleShow.bind(this)
        this.handleError=this.handleError.bind(this)
        this.handlePass1 = this.handlePass1.bind(this)
    }

    handleId(event){
        this.setState({id:event.target.value})
    }
    handleRoom(event){
        this.setState({room:event.target.value})
    }
    handlePass(event){
        this.setState({pass:event.target.value})
    }
    async handlePass1(event){
        this.setState({pass1:event.target.value})
        if(this.state.pass1 == this.state.pass){
            this.setState({passerror:true})
        }

    }
    handleError(){
        this.setState({error:true})
        
    }


    async handleShow(event){
        event.preventDefault()
        if(this.state.id <=0){
            return
        }
        await fetch(`/tenant/${this.state.id}`,{
            method: 'GET',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
        })
        .then(response=>response.json())
        .then(data=>this.setState({tenantData:data}))


        if(this.state.id != this.state.tenantData.id){
            this.handleError()
        }
        else{
            console.log(this.state.tenantData)
            this.setState({room:this.state.tenantData.room})
            this.setState({id:this.state.tenantData.id})
            this.setState({show:!this.state.show})
        }
    }

    async handleSubmit(event){
        event.preventDefault()

        if(this.state.pass != this.state.pass1){
            this.setState({passerror:!this.state.passerror})
            return
        }

        this.setState({passerror:false})

        const item ={
            "id":this.state.id,
            "pass":this.state.pass,
            "firstName":this.state.tenantData.firstName,
            "lastName":this.state.tenantData.lastName,
            "room":this.state.tenantData.room,
        }

        await fetch(`/tenant/${this.state.id}`,{
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(item)
        });
    }
    
    render(){
        return(
            <form className='signupform'>
                <h1 className='header'>Create an account</h1>
                <div className='row'>
                <label>
                    National Id number
                </label>
                    <input type="number" value={this.state.id} onChange={this.handleId} placeholder="Id number*"/>
                </div> 
                {this.state.show?
                <div>
                <div className='row'>
            <label>
                Room Number</label>
                <input type="text" value={this.state.room}  readOnly/>
            </div>
            <div className='row'>
            <label>
                Password</label>
                <input type="password" value={this.state.pass} onChange={this.handlePass} placeholder="Password*" required/>
            </div>
            <div className='row'>
            <label>
                Confirm Password</label>
                <input type="password" value={this.state.pass1} onChange={this.handlePass1} placeholder="Password*" required/>
            </div>
            {this.state.passerror? <p className='error'>Not matching</p>:<p></p>}
            <p className='note'><input className='button' type="button" onClick={this.handleSubmit} value="Create account"/></p>
            <div></div>
            </div>
            :
            <div>
                {this.state.error? <p className='error'>User not found</p>:<p></p>}
               <p className='note'><input className='button' type="button"  value=" Continue" onClick={this.handleShow}/></p> 
            </div>
            }
                
                <p className='note'>Or</p>
                <p className='note'><Link to='/login'>Sign in</Link></p>
            </form>
        )
    }
}

export default SignUp