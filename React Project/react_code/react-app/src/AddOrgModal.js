import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddOrgModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'organisation',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({                
                DepartmentName:event.target.DepartmentName.value,
                DepartmentNumber:event.target.DepartmentNumber.value,
                AddressLine1:event.target.AddressLine1.value,
                AddressLine2:event.target.AddressLine2.value,
                AddressLine3:event.target.AddressLine3.value,
                AddressLine4:event.target.AddressLine4.value,
                Town:event.target.Town.value,
                Postcode:event.target.Postcode.value,
                DepartmentId:null
            })
        })  
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }
    render(){
        return (
            <div className="container">

<Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Add Organisation
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="OrganisationName">
                        <Form.Label>OrganisationName</Form.Label>
                        <Form.Control type="text" name="OrganisationName" required 
                        placeholder="OrganisationName"/>
                    </Form.Group>

                    <Form.Group controlId="OrganisationNumber">
                        <Form.Label>OrganisationNumber</Form.Label>
                        <Form.Control type="text" name="OrganisationNumber" required 
                        placeholder="OrganisationNumber"/>
                    </Form.Group>

                    <Form.Group controlId="AddressLine1">
                        <Form.Label>AddressLine1</Form.Label>
                        <Form.Control type="text" name="AddressLine1" required 
                        placeholder="AddressLine1"/>
                    </Form.Group>

                    <Form.Group controlId="AddressLine2">
                        <Form.Label>AddressLine2</Form.Label>
                        <Form.Control type="text" name="AddressLine2" required 
                        placeholder="AddressLine2"/>
                    </Form.Group>

                    <Form.Group controlId="AddressLine3">
                        <Form.Label>AddressLine3</Form.Label>
                        <Form.Control type="text" name="AddressLine3" required 
                        placeholder="AddressLine3"/>
                    </Form.Group>

                    <Form.Group controlId="AddressLine4">
                        <Form.Label>AddressLine4</Form.Label>
                        <Form.Control type="text" name="AddressLine4" required 
                        placeholder="AddressLine4"/>
                    </Form.Group>

                    <Form.Group controlId="Town">
                        <Form.Label>Town</Form.Label>
                        <Form.Control type="text" name="Town" required 
                        placeholder="Town"/>
                    </Form.Group>

                    <Form.Group controlId="Postcode">
                        <Form.Label>Postcode</Form.Label>
                        <Form.Control type="text" name="Postcode" required 
                        placeholder="Postcode"/>
                    </Form.Group>

                    <Form.Group controlId="OrganisationId">
                        <Form.Label>OrganisationIde</Form.Label>
                        <Form.Control type="text" name="OrganisationId" required 
                        placeholder="OrganisationId"/>
                    </Form.Group>
                    
                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Add Organisation
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Modal.Body>
    
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}