import React from "react"
import '../App.css'


class Payrent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            phone:"",
            room:"",
            amount:0
        }

        this.handlePhone = this.handlePhone.bind(this)
        this.handleRoom = this.handleRoom.bind(this)
        this.handleAmount = this.handleAmount.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handlePhone(event){
        this.setState({phone:event.target.value})
    }
    handleRoom(event){
        this.setState({room:this.props.room})
    }
    handleAmount(event){
        this.setState({amount:event.target.value})
    }
    handleSubmit(event){
        alert("Processing payment...")
        event.preventDefault()
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit} className="payForm">
                <header className="header">Pay with Mpesa</header>
                <div className="row">
                <label>Phone number</label>
                <input type="phonenumber" value={this.state.phone} onChange={this.handlePhone} placeholder="Phone number" required/>
                </div>
                <div className="row">
                <label>Room number</label>
                <input type="text" value={this.props.room} readOnly placeholder="Room number"/>
                </div>
                <div className="row">
                <label>Amount</label>
                <input type="number" value={this.state.amount} onChange={this.handleAmount} placeholder="Amount" required/>
                </div>
                <p className="note">Kindly pay in full amount</p>
                <input type="submit" className="button" value="Submit"/>
            </form>
        )
    }
}

export default Payrent