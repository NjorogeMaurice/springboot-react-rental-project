import React from "react";
import "../App.css"
import Payrent from "./payrent";
import SignUp from "./signup";
import userImage from './user.png'
import notice from './file.png'

class DashBoard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            btnclicked:false,
            rentclicked:false,
            notices:[],
            greetings:"",
            time:new Date().getHours()
        }
        
        this.handleBtnClicked = this.handleBtnClicked.bind(this)
        this.handleRent = this.handleRent.bind(this)
        this.handlefalse = this.handlefalse.bind(this)

    }

    
    
    handleBtnClicked(){
        this.setState({btnclicked:true})
    }
    handleRent(){
        this.setState({btnclicked:true})
        this.setState({rentclicked:true})
    }

    handlefalse(){
        this.setState({btnclicked:false})
        this.setState({rentclicked:false})
    }

   
    async componentDidMount(){
        await fetch(`/notices`,{
            method: 'GET',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
        })
        .then(response=>response.json())
        .then(data=>this.setState({notices:data}));
    }
    

    render(){
        return(
            <div className="dashDiv">

                <div className="tenantDetails">
                    <p className="header"><img src={userImage} width={"70px"}/></p>
                    <Details idno={this.props.id} fname={this.props.fname} lname={this.props.lname} room={this.props.room} phone={this.props.phone}/>
                </div>
                <div className="noticeBoard">
                    <p className="header"><img src={notice} width={"70px"}/></p>
                    {this.state.notices.map(notice=>{
                       return(
                        <Notices date={notice.date} details={notice.data}/>
                       )
                    })}
                </div>
                <div className="payRent">
                    
                    {this.state.btnclicked? 
                     <Others id={this.state.rentclicked} call={this.handlefalse} room={this.props.room} phone={this.props.phone}/>:
                     <div className="othersPage">
                        <div className="note">{this.state.time > 12? <p>{this.state.time > 16?<p>Good evening, what's up for today?</p>
                        :<p>Good afternoon, what's up for today?</p>}</p>
                        :<p>Good morning, what's up for today?</p>}</div>
                        <p><button onClick={this.handleRent}>Pay rent</button></p>
                        <p><button onClick={this.handleBtnClicked}>Message</button></p>
                        <p><button onClick={this.handleBtnClicked}>Terminate Tenancy</button></p>
                     </div>}
                </div>
            </div>
        )
    }

}

const Details=(props)=>{
    return(
        <div>
        <p>Id number: {props.idno}</p>
        <p>First name: {props.fname}</p>
        <p>Last name: {props.lname}</p>
        <p>Phone number: {props.phone}</p>
        <p>Room number: {props.room}</p>
        </div>
        
    )
}

const Notices=(props)=>{
    return(
        <div>
            <p>{props.date}</p>
            <p>{props.details}</p>
        </div>
    )
}

const Others=(props)=>{
    return(
        <div>
            <p><a onClick={props.call}>Back</a></p>
            {props.id? <Payrent room={props.room} phone={props.phone}/> : alert("sending message to landlord....")}
            
        </div>
    )
}

export default DashBoard