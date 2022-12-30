import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import "../App.css"

class Apply extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id:0,
            fname:"",
            lname:"",
            room:"",
            phone:"",
            show:false,
            tenantData:[],
            error:false,
            applyerror:false,
            errorname:""
        }

        this.handleId = this.handleId.bind(this)
        this.handleRoom = this.handleRoom.bind(this)
        this.handlePhone = this.handlePhone.bind(this)
        this.handleFname = this.handleFname.bind(this)
        this.handleLname = this.handleLname.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleShow = this.handleShow.bind(this)
        this.handleError=this.handleError.bind(this)
    }

    handleId(event){
        this.setState({id:event.target.value})
    }
    handleRoom(event){
        this.setState({room:event.target.value})
    }
    handlePhone(event){
        this.setState({phone:event.target.value})
    }
    handleFname(event){
        this.setState({fname:event.target.value})
      
    }
    handleLname(event){
        this.setState({lname:event.target.value})
      
    }
    handleError(){
        this.setState({error:true})
        
    }


    async handleShow(event){
        event.preventDefault()
        if(this.state.id <=0){
            return
        }
        if(this.state.id.toString().length !=8){
            this.handleError()
        }
        else{
            this.setState({error:false})
            this.setState({show:!this.state.show})
        }
    }

    async handleSubmit(event){
        event.preventDefault()

        this.setState({passerror:false})

        const item ={
            "id":this.state.id,
            "phone":this.state.phone,
            "firstName":this.state.fname,
            "lastName":this.state.lname,
            "room":this.state.room,
        }

        await fetch(`/apply`,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(item)
        });

        alert("Applicant sent successfully...");
        window.location.reload()
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit} className='signupform'>
                <h1 className='header'>Tenancy Application</h1>
                <div className='row'>
                <label>
                    National Id number
                </label>
                    <input type="number" value={this.state.id} onChange={this.handleId} placeholder="Id number*"/>
                </div> 
                   {this.state.error? <p className='error'>Invalid id number</p>:<p></p>}
                {this.state.show?
                <div>
                 <div className='row'>
            <label>
                First Name</label>
                <input type="text" value={this.state.fname}  onChange={this.handleFname}/>
            </div>
            <div className='row'>
            <label>
                Last Name</label>
                <input type="text" value={this.state.lname}  onChange={this.handleLname}/>
            </div>
            <div className='row'>
            <label>
                Phone number</label>
                <input type="text" value={this.state.phone}  onChange={this.handlePhone}/>
            </div>
                <div className='row'>
            <label>
                Room Number</label>
                <input type="text" value={this.state.room}  onChange={this.handleRoom}/>
            </div>
            <p className='note'>Kindly read the tenancy policy before proceeding</p>
            <p className='note'>Proceed to apply upon agreeing with the policy</p>
            <p className='note'><input className='button' type="submit" value="Create account"/></p>
            <div></div>
            </div>
            :
            <div>
                {this.state.passerror? <p className='error'>{this.state.errorname}</p>:<p></p>}
               <p className='note'><input className='button' type="button"  value=" Continue" onClick={this.handleShow}/></p> 
            </div>
            }
            </form>
        )
    }
}

export default Apply