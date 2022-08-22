import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddOrgModal} from './AddOrgModal';
import {EditOrgModal} from './EditOrgModal';

export class Organisation extends Component{

    constructor(props){
        super(props);
        this.state={deps:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'organisation')
        .then(response=>response.json())
        .then(data=>{
            this.setState({orgs:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteOrg(orgid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'organisation/'+orgid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {orgs, orgname,orgnum, orgadd1, orgadd2, orgadd3, orgadd4, orgtown, orgpost, orgid}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>OrganisationName</th>
                            <th>OrganisationNumber</th>
                            <th>AddressLine1</th>
                            <th>AddressLine2</th>
                            <th>AddressLine3</th>
                            <th>AddressLine4</th>
                            <th>Town</th>
                            <th>Postcode</th>
                            <th>OrganisationId</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orgs.map(org=>
                            <tr key={org.OrganisationId}>                               
                                <td>{org.OrganisationName}</td>
                                <td>{org.AddressLine1}</td>
                                <td>{org.AddressLine2}</td>
                                <td>{org.AddressLine3}</td>
                                <td>{org.AddressLine4}</td>
                                <td>{org.Town}</td>
                                <td>{org.Postcode}</td>
                                <td>{org.OrganisationId}</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        orgname:org.OrganisationName,orgnum:org.OrganisationNumber,
        orgadd1:org.AddressLine1,orgadd2:org.AddressLine,orgadd3:org.AddressLine3,
        orgadd4:org.AddressLine4,orgtown:org.Town,orgpost:org.Postcode,orgid:org.OrganisationId})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteOrg(org.OrganisationId)}>
            Delete
        </Button>

        <EditOrgModal show={this.state.editModalShow}
        onHide={editModalClose}
        orgname={orgname}
        orgnum={orgnum}
        orgadd1={orgadd1}
        orgadd2={orgadd2}
        orgadd3={orgadd3}
        orgadd4={orgadd4}
        orgtown={orgtown}
        orgpost={orgpost}
        orgid={orgid}
        />
</ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Department</Button>

                    <AddOrgModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}