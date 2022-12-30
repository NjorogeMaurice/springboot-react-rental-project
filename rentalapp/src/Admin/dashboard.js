import React from "react";
import "../App.css"
import {Button, ButtonGroup, Container, Table} from 'reactstrap'

class AdminDashBoard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            applicants:[],
            tenants:[],
            greetings:"",
            time:new Date().getHours(),
            getTenants:true,
            getApplicants:false,
            getMessages:false,
        }

        this.show = this.show.bind(this)
        this.notshow = this.notshow.bind(this)
    }

    show(){
        this.setState({getTenants:true})
    }
    notshow(){
        this.setState({getTenants:false})
    }


   
    async componentDidMount(){
        await fetch(`/apply`,{
            method: 'GET',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
        })
        .then(response=>response.json())
        .then(data=>this.setState({applicants:data}));

        await fetch(`/tenant`,{
            method: 'GET',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
        })
        .then(response=>response.json())
        .then(data=>this.setState({tenants:data}));
    }
    

    render(){
        const tenantsList = this.state.tenants.map(tenant=>{
            return(
                <tr key={tenant.id}>
            <td >{tenant.firstName}</td>
            <td style={{whiteSpace: 'nowrap'}}>{tenant.lastName}</td>
            <td>{tenant.id}</td>
            <td>{tenant.phone}</td>
            <td>{tenant.room}</td>
            <td>
                <ButtonGroup>
                    <Button size="sm" color="danger" onClick={()=>{}}>Terminate</Button>
                </ButtonGroup>
            </td>
        </tr>
            )
        })
        const applicantsList = this.state.applicants.map(tenant=>{
            return(
                <tr key={tenant.id}>
            <td >{tenant.firstName}</td>
            <td style={{whiteSpace: 'nowrap'}}>{tenant.lastName}</td>
            <td>{tenant.id}</td>
            <td>{tenant.phone}</td>
            <td>{tenant.room}</td>
            <td>
                <ButtonGroup>
                    <Button size="sm" color="danger" onClick={()=>{}}>Decline</Button>
                    <Button size="sm" color="primary" onClick={()=>{}}>Accept</Button>
                </ButtonGroup>
            </td>
        </tr>
            )
        })
        return(
            <div>
                
            <div className="dashDiv">
                <div className="tenants">
                <Container fluid>
                <span><p onClick={this.show}>Tenants</p><p onClick={this.notshow}>Applicants</p><p>Messages</p><p>Log out</p></span>
                {this.state.getTenants? <ShowTenants list={tenantsList}/>
                :<ShowApplicants list={applicantsList}/>}
            </Container>
                </div>
                <div className="aNotice">
                    <p className="note">Post a notice</p>
                  <p className="note"><input type='text' placeholder='Write a notice'/></p>
                  <p className="note"><button onClick={this.see}>Post notice</button></p>
                </div>
                
            </div>
            </div>
        )
    }

}

const ShowTenants=(props)=>{

    return(
        <Table className="mt-4">
        <thead>
        <tr>
            <th width="15%">First Name</th>
            <th width="15%">Last Name</th>
            <th width="10%">Id number</th>
            <th width="15%">Phone</th>
            <th width="10%">Room</th>
            <th width="10%">Actions</th>
        </tr>
        </thead>
        <tbody>
        {props.list}
        </tbody>
    </Table>
    )
   
}
const ShowApplicants=(props)=>{

    return(
        <Table className="mt-4">
        <thead>
        <tr>
            <th width="15%">First Name</th>
            <th width="15%">Last Name</th>
            <th width="10%">Id number</th>
            <th width="15%">Phone</th>
            <th width="10%">Room</th>
            <th width="10%">Actions</th>
        </tr>
        </thead>
        <tbody>
        {props.list}
        </tbody>
    </Table>
    )
   
}


export default AdminDashBoard